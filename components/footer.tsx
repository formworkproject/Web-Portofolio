'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1E1E1E] py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <h3 className="text-[#F0EDE8] font-bold text-lg mb-1 tracking-wider">ADITYA GRIMALDI SANJAYA</h3>
          <p className="text-sm text-[#6B6B6B]">Civil Engineering • Drafter • QS • Estimation</p>
        </div>
        
        <div>
          <p className="uppercase tracking-widest text-xs text-[#6B6B6B]">
            ENGINEERING PORTFOLIO / INDONESIA
          </p>
        </div>
      </div>
      
      <div className="container mx-auto text-center border-t border-[#1E1E1E] pt-8">
        <p className="text-xs text-[#6B6B6B]">
          © {currentYear} Aditya Grimaldi Sanjaya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
