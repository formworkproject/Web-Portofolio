import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  number: string;
  title?: string;
  label: string;
  className?: string;
}

export function SectionHeader({
  number,
  title, // kept for backward compatibility but unused
  label,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 flex items-center gap-4', className)}>
      <div className="h-[2px] w-8 bg-[#E8652D]" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#F0EDE8]">
        <span className="text-[#E8652D] mr-2">{number}</span>
        {label}
      </h2>
    </div>
  );
}
