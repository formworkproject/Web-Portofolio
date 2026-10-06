export interface ProjectImage {
  src: string;
  caption: string;
  type: 'drawing' | 'model' | 'photo';
}

export interface ProjectDocument {
  title: string;
  url: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  location: string;
  thumbnail: string;
  summary: string;
  description: string; // Deskripsi panjang / Long description
  tools: string[];
  responsibilities: string[];
  objectives: string[];
  workflow: string[];
  deliverables: string[];
  results: string[];
  gallery: ProjectImage[];
  documents: ProjectDocument[];
  featured: boolean;
  tags: string[];
  isAcademic?: boolean;
  academicNote?: string;
}

// Data proyek / Projects data
// Silakan sesuaikan data [ADD ...] dengan informasi yang sebenarnya
// Please adjust [ADD ...] data with actual information
export const projectsData: Project[] = [
  {
    id: 'rusun-kejaksaan',
    slug: 'rusun-kejaksaan-tinggi',
    title: 'Rusun Kejaksaan Tinggi',
    category: 'Construction Documentation',
    year: '[ADD PROJECT YEAR]',
    role: 'Drafter',
    location: 'Indonesia',
    thumbnail: '/images/projects/rusun-kejaksaan.jpg',
    summary: 'As-built drawing production and construction documentation for Rusun Kejaksaan Tinggi project.',
    description: 'Bertanggung jawab dalam pembuatan as-built drawing, koordinasi gambar arsitektur, dokumentasi konstruksi, dan pembuatan shop drawing untuk proyek Rusun Kejaksaan Tinggi.',
    tools: ['AutoCAD'],
    responsibilities: [
      'As-built drawing production',
      'Architectural drawing coordination',
      'Construction documentation',
      'Shop drawing support',
      'Drainage drawing',
      'Elevation / invert documentation'
    ],
    objectives: [
      'Menghasilkan dokumentasi konstruksi yang akurat',
      'Koordinasi gambar teknis',
      'Pembuatan shop drawing dan as-built drawing'
    ],
    workflow: [
      'Survey dan pengumpulan data lapangan',
      'Pembuatan draft drawing',
      'Koordinasi dengan tim arsitektur',
      'Finalisasi as-built drawing'
    ],
    deliverables: [
      'As-Built Drawing',
      'Shop Drawing',
      'Drainage Drawing',
      'Elevation Documentation'
    ],
    results: ['[ADD RESULTS]'],
    gallery: [
      { src: '/images/projects/rusun-kejaksaan/drawing-01.jpg', caption: '[ADD CAPTION]', type: 'drawing' }
    ],
    documents: [],
    featured: true,
    tags: ['AutoCAD', 'As-Built', 'Construction Documentation', 'Shop Drawing', 'Drainage']
  },
  {
    id: 'rusunawa-umri',
    slug: 'rusunawa-umri-pekanbaru',
    title: 'Pembangunan Rusunawa 3 Lantai UMRI Pekanbaru',
    category: 'Academic Research',
    year: '2025',
    role: 'Researcher',
    location: 'Pekanbaru, Indonesia',
    thumbnail: '/images/projects/tugas-akhir.png',
    summary: 'Penelitian akademik tentang penerapan Building Information Modeling (BIM) untuk pekerjaan struktural menggunakan Autodesk Revit.',
    description: 'Tugas akhir yang mengkaji penerapan Building Information Modeling (BIM) untuk pekerjaan struktural menggunakan Autodesk Revit. Fokus pada pemodelan struktural, quantity takeoff, perbandingan biaya, perbandingan waktu, pemodelan tulangan, bekisting, dan dokumentasi konstruksi.',
    tools: ['Revit', 'Microsoft Excel'],
    responsibilities: [
      'Structural BIM modeling',
      'Quantity takeoff analysis',
      'Cost comparison study',
      'Time efficiency analysis',
      'Rebar modeling',
      'Formwork documentation'
    ],
    objectives: [
      'Menganalisis efektivitas penerapan BIM pada pekerjaan struktural',
      'Membandingkan hasil quantity takeoff BIM dengan metode konvensional',
      'Mengukur efisiensi waktu penggunaan BIM'
    ],
    workflow: [
      'Literature review dan perencanaan penelitian',
      'Pemodelan struktural menggunakan Revit',
      'Quantity takeoff dan analisis biaya',
      'Perbandingan hasil dan dokumentasi'
    ],
    deliverables: [
      '3D Structural Model',
      'Quantity Takeoff Report',
      'Cost Comparison Analysis',
      'Research Documentation'
    ],
    results: [
      'Selisih volume approximately 0.56%',
      'Selisih biaya approximately 0.52%',
      'Efisiensi waktu approximately 67%'
    ],
    gallery: [
      { src: '/images/projects/rusunawa-umri/model-01.jpg', caption: '[ADD CAPTION]', type: 'model' }
    ],
    documents: [],
    featured: true,
    tags: ['BIM', 'Revit', 'Structural', 'Quantity Takeoff', 'Academic Research'],
    isAcademic: true,
    academicNote: 'Proyek penelitian akademik / tugas akhir — bukan pengalaman kerja profesional.'
  },
  {
    id: 'permukiman-kumuh',
    slug: 'permukiman-kumuh',
    title: 'Permukiman Kumuh',
    category: 'Technical Drawing',
    year: '[ADD PROJECT YEAR]',
    role: 'Drafter',
    location: 'Indonesia',
    thumbnail: '/images/projects/permukiman-kumuh.jpg',
    summary: 'Pembuatan shop drawing drainase termasuk detail elevasi invert dan dokumentasi teknis.',
    description: 'Pembuatan gambar teknis drainase meliputi shop drawing, detail elevasi invert, dan dokumentasi konstruksi menggunakan AutoCAD.',
    tools: ['AutoCAD'],
    responsibilities: [
      'Drainage drawing production',
      'Invert elevation detailing',
      'Technical detailing',
      'Construction documentation'
    ],
    objectives: [
      'Menghasilkan shop drawing drainase yang akurat',
      'Dokumentasi elevasi invert',
      'Detail teknis konstruksi drainase'
    ],
    workflow: [
      'Pengumpulan data elevasi',
      'Pembuatan layout drainase',
      'Detail invert elevation',
      'Finalisasi shop drawing'
    ],
    deliverables: [
      'Drainage Shop Drawing',
      'Invert Elevation Drawing',
      'Technical Details'
    ],
    results: ['[ADD RESULTS]'],
    gallery: [
      { src: '/images/projects/drainage/drawing-01.jpg', caption: '[ADD CAPTION]', type: 'drawing' }
    ],
    documents: [],
    featured: true,
    tags: ['AutoCAD', 'Drainage', 'Shop Drawing', 'Technical Drawing', 'Construction Documentation']
  }
];

// Aliased exports for component compatibility
export const projects = projectsData;
export type GalleryImage = ProjectImage;
