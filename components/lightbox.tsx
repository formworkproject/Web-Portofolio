'use client';

import { GalleryImage } from '@/data/projects';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Image as ImageIcon, X } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect } from 'react';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  projectTitle,
  onNavigate,
}: LightboxProps) {
  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [onNavigate, currentIndex, images.length]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [onNavigate, currentIndex, images.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, handlePrev, handleNext]);

  if (!isOpen || !images.length) return null;

  const currentImage = images[currentIndex];
  const hasValidImage = currentImage.src && currentImage.src.startsWith('/') && !currentImage.src.includes('[');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={onClose}
            className="p-2 text-[#6B6B6B] hover:text-[#F0EDE8] transition-colors rounded-full hover:bg-[#1A1A1A]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 p-2 text-[#6B6B6B] hover:text-[#F0EDE8] transition-colors rounded-full hover:bg-[#1A1A1A] z-50"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 p-2 text-[#6B6B6B] hover:text-[#F0EDE8] transition-colors rounded-full hover:bg-[#1A1A1A] z-50"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}

        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center p-4 h-[90vh]">
          <div 
            className="relative w-full flex-grow flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {hasValidImage ? (
              <Image
                src={currentImage.src}
                alt={currentImage.caption || `${projectTitle} gallery image`}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            ) : (
              <div className="w-full h-full max-h-[80vh] bg-[#141414] border border-[#1E1E1E] rounded-xl flex flex-col items-center justify-center text-[#6B6B6B]">
                 <ImageIcon className="w-12 h-12 mb-4 opacity-50" />
                 <span className="font-medium tracking-wider text-sm">IMAGE PLACEHOLDER</span>
              </div>
            )}
          </div>

          <div className="mt-6 text-center" onClick={(e) => e.stopPropagation()}>
            {currentImage.caption && (
              <p className="text-[#F0EDE8] text-sm md:text-base mb-2">
                {currentImage.caption}
              </p>
            )}
            <p className="text-[#6B6B6B] text-xs">
              Image {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
