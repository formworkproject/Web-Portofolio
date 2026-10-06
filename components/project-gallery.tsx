'use client';

import { GalleryImage } from '@/data/projects';
import { Image as ImageIcon, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Lightbox } from './lightbox';

interface ProjectGalleryProps {
  images: GalleryImage[];
  projectTitle: string;
}

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) {
    return null;
  }

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, idx) => {
          const hasValidImage = img.src && img.src.startsWith('/') && !img.src.includes('[');
          return (
            <div key={idx} className="flex flex-col group cursor-pointer" onClick={() => openLightbox(idx)}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#141414] border border-[#1E1E1E] mb-2 flex items-center justify-center">
                {hasValidImage ? (
                  <Image
                    src={img.src}
                    alt={img.caption || `${projectTitle} image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-[#6B6B6B] opacity-50 space-y-2">
                    <ImageIcon className="w-6 h-6" />
                    <span className="text-xs font-medium tracking-wider">ADD IMAGE</span>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md w-6 h-6" />
                </div>
              </div>
              {img.caption && (
                <p className="text-xs text-[#6B6B6B] text-center mt-1">
                  {img.caption}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <Lightbox
        images={images}
        currentIndex={selectedIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        projectTitle={projectTitle}
        onNavigate={setSelectedIndex}
      />
    </>
  );
}
