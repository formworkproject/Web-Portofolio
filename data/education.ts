export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: 'completed' | 'ongoing';
  gpa?: string;
  thesis?: string;
}

export const educationData: Education[] = [
  {
    id: 'universitas-riau',
    degree: 'D3 Teknik Sipil',
    institution: 'Universitas Riau',
    period: '2022–2025',
    status: 'completed',
    gpa: '3.53',
    thesis: 'PENERAPAN BUILDING INFORMATION MODELING (BIM) PADA PEKERJAAN STRUKTUR MENGGUNAKAN SOFTWARE AUTODESK REVIT'
  },
  {
    id: 'universitas-abdurrab',
    degree: 'S1 Teknik Sipil',
    institution: 'Universitas Abdurrab',
    period: 'Current',
    status: 'ongoing'
  }
];

export const education = educationData;
