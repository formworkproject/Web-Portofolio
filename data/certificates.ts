export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  image: string;
  verificationLink?: string;
}

export const certificatesData: Certificate[] = [
  {
    id: 'revit-lts',
    title: 'Pelatihan Building Information Modeling (BIM) Revit Struktur Beton',
    issuer: 'Langen Teknik Satria (LTS)',
    year: '2024',
    credentialId: '002/REVIT-STRUKTUR/LTS/XI/2024',
    image: '/files/certificates/Revit E-Certificate LTS.pdf',
    verificationLink: 'https://www.langentekniksatria.com'
  },
  {
    id: 'autocad-lts',
    title: 'Pelatihan AutoCAD 2D : Gambar Kerja Struktur, Arsitektur, MEP',
    issuer: 'Langen Teknik Satria (LTS)',
    year: '2025',
    credentialId: '041/AUTOCAD-2D/LTS/II/2025',
    image: '/files/certificates/AutoCAD E-Certificate LTS.pdf',
    verificationLink: 'https://www.langentekniksatria.com'
  },
  {
    id: 'rab-lts',
    title: 'Penyusunan RAB, RAP, Schedulling : Manajemen Proyek Pra Konstruksi',
    issuer: 'Langen Teknik Satria (LTS)',
    year: '2024',
    credentialId: '005/RAP-RAB-SCHEDULLING/LTS/X/2024',
    image: '/files/certificates/RAB E-Certificate.pdf',
    verificationLink: 'https://www.langentekniksatria.com'
  },
  {
    id: 'workflow-bim',
    title: 'Implementasi BIM Revit + Navisworks + CDE Autodesk Construction Cloud',
    issuer: 'BIM PROPLAN',
    year: '2025',
    credentialId: '9bdc9ea16a6ade8b',
    image: '/files/certificates/E-Certificate WorkFlow BIM.pdf',
    verificationLink: 'https://www.bimproplan.com'
  },
  {
    id: 'msproject-kursus-sipil',
    title: 'Pengendalian Jadwal Proyek & Progress Report dengan Ms Project',
    issuer: 'Kursus Sipil Indonesia',
    year: '2025',
    credentialId: 'f48ddde8-2488-4501-9cec-3317682c3d02',
    image: '/files/certificates/Microsoft Project E-Certificate.pdf'
  },
  {
    id: 'powerbi-kursus-sipil',
    title: 'Boothcamp Power BI dan BIM untuk Analisis & Visualisasi Data',
    issuer: 'Kursus Sipil Indonesia',
    year: '2025',
    credentialId: 'f653bc08-3485-4e16-8728-f322485de125',
    image: '/files/certificates/Power BI E-Certificate.pdf'
  },
  {
    id: 'rsap-sipilpedia',
    title: 'Analisis Dan Desain Struktur Tahan Gempa Menggunakan RSAP',
    issuer: 'Sipilpedia Academy',
    year: '2025',
    credentialId: '0020/48/WORKSHOP/SIPILPEDIAACADEMY/III/2025',
    image: '/files/certificates/RSAP E-Certificate.pdf'
  },
  {
    id: 'tekla-wiganda',
    title: 'Pelatihan Tekla Structure Designer (TSD) Perhitungan Struktur Gedung',
    issuer: 'PT. Wiganda Education & Survey',
    year: '2024',
    credentialId: '38/DES/TSD/2024',
    image: '/files/certificates/Tekla Structural Designer E-Certificate.pdf'
  },
  {
    id: 'autocad-ded-arsisten',
    title: 'Full AutoCAD Masterclass for Architecture',
    issuer: 'Arsisten Academy',
    year: '2024',
    image: '/files/certificates/AutoCAD DED E-Certificate.pdf'
  },
  {
    id: 'autocad-arsisten',
    title: 'AutoCAD Masterclass for Beginners',
    issuer: 'Arsisten Academy',
    year: '2024',
    image: '/files/certificates/AutoCAD E-Certificate.pdf'
  },
  {
    id: 'archicad-arsisten',
    title: 'Archicad Masterclass for Beginners',
    issuer: 'Arsisten Academy',
    year: '2025',
    image: '/files/certificates/ArchiCAD E-Certificate.pdf'
  },
  {
    id: 'revit-arsisten',
    title: 'Revit Masterclass for Beginners',
    issuer: 'Arsisten Academy',
    year: '2026',
    image: '/files/certificates/Revit E-Certificate.pdf'
  },
  {
    id: 'sketchup-arsisten',
    title: 'Premium Sketchup Masterclass',
    issuer: 'Arsisten Academy',
    year: '2025',
    image: '/files/certificates/SketchUp E-Certificate.pdf'
  }
];

export const certificates = certificatesData;
