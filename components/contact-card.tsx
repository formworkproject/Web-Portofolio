import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  isPlaceholder?: boolean;
  className?: string;
}

export function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  isPlaceholder = false,
  className,
}: ContactCardProps) {
  const content = (
    <div
      className={cn(
        'group flex items-center space-x-4 rounded-lg border border-[#1E1E1E] bg-[#141414] p-4 transition-all duration-300',
        !isPlaceholder && href && 'hover:border-[#E8652D]',
        className
      )}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#0A0A0A] border border-[#1E1E1E] group-hover:border-[#E8652D]/50 transition-colors">
        <Icon className={cn('h-6 w-6', isPlaceholder ? 'text-[#6B6B6B]' : 'text-[#E8652D]')} />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-sm text-[#6B6B6B] truncate">{label}</span>
        <span
          className={cn(
            'text-base font-medium truncate',
            isPlaceholder ? 'text-[#6B6B6B] italic' : 'text-[#F0EDE8]'
          )}
          title={value}
        >
          {value}
        </span>
      </div>
    </div>
  );

  if (!isPlaceholder && href) {
    const isExternalOrPdf = href.startsWith('http') || href.endsWith('.pdf');
    
    if (isExternalOrPdf) {
      return (
        <a 
          href={href} 
          className="block outline-none" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className="block outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
