import { cn } from '@/lib/utils';

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  status: 'completed' | 'ongoing';
  gpa?: string;
  thesis?: string;
  className?: string;
}

export function EducationCard({
  degree,
  institution,
  period,
  status,
  gpa,
  thesis,
  className,
}: EducationCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-lg border border-[#1E1E1E] bg-[#141414] p-6',
        className
      )}
    >
      <div className="mb-2 flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold text-[#F0EDE8]">
          {degree || <span className="text-[#6B6B6B] italic">Degree / Major</span>}
        </h3>
        
        {status === 'ongoing' && (
          <span className="shrink-0 rounded-full bg-[#E8652D]/10 px-2.5 py-0.5 text-xs font-semibold text-[#E8652D] border border-[#E8652D]/20">
            Current
          </span>
        )}
      </div>
      
      <p className="mb-4 text-base text-[#6B6B6B]">
        {institution || <span className="italic">Institution Name</span>}
      </p>
      
      {thesis && (
        <div className="mb-4">
          <span className="text-xs font-semibold text-[#E8652D] uppercase tracking-wider block mb-1">Tugas Akhir</span>
          <p className="text-sm text-[#F0EDE8] leading-relaxed capitalize-first">
            {thesis}
          </p>
        </div>
      )}
      
      <div className="mt-auto flex justify-between items-center border-t border-[#1E1E1E] pt-4">
        <div className="text-sm text-[#F0EDE8]">
          {period || <span className="text-[#6B6B6B] italic">Period</span>}
        </div>
        {gpa && (
          <div className="text-sm font-medium text-[#6B6B6B]">
            GPA: <span className="text-[#F0EDE8]">{gpa}</span>
          </div>
        )}
      </div>
    </div>
  );
}
