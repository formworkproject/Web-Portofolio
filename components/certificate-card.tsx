'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Eye, X } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

interface CertificateCardProps {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  verificationLink?: string;
  image?: string;
  className?: string;
}

export function CertificateCard({
  title,
  issuer,
  year,
  credentialId,
  verificationLink,
  image,
  className,
}: CertificateCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  const hasValidImage = image && !image.startsWith('[');

  return (
    <>
      <div
        className={cn(
          'flex flex-col rounded-lg border border-[#1E1E1E] bg-[#141414] p-6 transition-all hover:border-[#6B6B6B]',
          className
        )}
      >
      <div className="mb-4">
        <h3 className={cn('text-lg font-bold leading-snug', !title && 'text-[#6B6B6B] italic')}>
          {title || 'Certificate Title'}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <p className={cn('text-sm', !issuer ? 'text-[#6B6B6B] italic' : 'text-[#F0EDE8]')}>
            {issuer || 'Issuing Organization'}
          </p>
          {(issuer && year) && <span className="text-[#6B6B6B]">•</span>}
          <span className={cn('text-sm font-medium', !year ? 'text-[#6B6B6B] italic' : 'text-[#E8652D]')}>
            {year || 'Year'}
          </span>
        </div>
      </div>

        {(credentialId || verificationLink || hasValidImage) && (
          <div className="mt-auto flex items-center justify-between border-t border-[#1E1E1E] pt-4">
            {credentialId ? (
              <span className="text-xs text-[#6B6B6B]">
                ID: {credentialId}
              </span>
            ) : (
              <span />
            )}
            
            <div className="flex items-center space-x-4">
              {hasValidImage && (
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className="flex items-center text-xs text-[#F0EDE8] hover:text-[#E8652D] transition-colors"
                >
                  <Eye className="mr-1.5 h-3 w-3" /> Preview
                </button>
              )}
              
              {verificationLink && (
                <a
                  href={verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs text-[#E8652D] hover:underline"
                >
                  Verify <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && hasValidImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreviewOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
          >
            <div className="absolute top-6 right-6 z-50">
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="p-2 text-[#6B6B6B] hover:text-[#F0EDE8] transition-colors rounded-full hover:bg-[#1A1A1A]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div 
              className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center flex-col bg-[#141414] rounded-lg overflow-hidden border border-[#1E1E1E]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[calc(100%-80px)]">
                {image.toLowerCase().endsWith('.pdf') ? (
                  <iframe 
                    src={`${image}#toolbar=0`} 
                    className="w-full h-full border-none"
                    title={`${title} Certificate`}
                  />
                ) : (
                  <Image
                    src={image}
                    alt={`${title} Certificate`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                )}
              </div>
              <div className="h-[80px] w-full flex flex-col items-center justify-center border-t border-[#1E1E1E] bg-[#0A0A0A] px-6">
                <h4 className="text-[#F0EDE8] text-base font-bold truncate w-full text-center">{title}</h4>
                <p className="text-[#6B6B6B] text-xs truncate w-full text-center mt-1">{issuer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
