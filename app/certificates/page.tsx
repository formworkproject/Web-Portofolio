import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionHeader } from '@/components/section-header';
import { CertificateCard } from '@/components/certificate-card';
import { certificates } from '@/data/certificates';

export const metadata = {
  title: 'Certificates | Aditya Grimaldi Sanjaya',
  description: 'Professional certifications and training completed by Aditya Grimaldi Sanjaya.',
};

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F0EDE8] flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeader 
            number="06" 
            label="Certificates" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <CertificateCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
