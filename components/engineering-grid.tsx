'use client';

import { cn } from '@/lib/utils';

export function EngineeringGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-0 z-[-1] h-full w-full opacity-30',
        className
      )}
      style={{
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0),
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        backgroundPosition: '0 0',
      }}
    />
  );
}
