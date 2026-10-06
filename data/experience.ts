export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'professional' | 'academic' | 'freelance';
  responsibilities: string[];
  tools: string[];
}

export const experienceData: Experience[] = [
  {
    id: 'murda-jaya-abadi',
    title: 'Drafter',
    company: 'PT. Murda Jaya Abadi',
    location: 'Indonesia',
    period: 'Agustus 2025 - Sekarang',
    type: 'professional',
    responsibilities: [
      'As-built drawing production',
      'Architectural drawing coordination',
      'Construction documentation',
      'Shop drawing support',
      'Drainage drawing',
      'Elevation / invert documentation'
    ],
    tools: ['AutoCAD']
  }
];

export const experiences = experienceData;
