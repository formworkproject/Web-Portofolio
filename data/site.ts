export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  name: string;
  shortName: string;
  role: string;
  location: string;
  socials: Record<string, SocialLink>;
  navItems: NavItem[];
  cvPath: string;
}

export const siteConfig: SiteConfig = {
  title: 'Aditya Grimaldi — Civil Engineering Portfolio',
  description: 'Civil engineering portfolio focused on drafting, quantity surveying, estimation, construction documentation, and digital engineering.',
  name: 'Aditya Grimaldi Sanjaya',
  shortName: 'ADITYA GRIMALDI SANJAYA',
  role: 'Civil Engineering • Drafter • Quantity Surveying • Estimation',
  location: 'Indonesia',
  socials: {
    linkedin: { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sanjayaadityaaa' },
    github: { name: 'GitHub', url: '[ADD LINK]' },
    instagram: { name: 'Instagram', url: '[ADD LINK]' },
    whatsapp: { name: 'WhatsApp', url: 'https://wa.me/6281234567890' },
    email: { name: 'Email', url: 'sanjayaaditya195@gmail.com' }
  },
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' }
  ],
  cvPath: '/files/Aditya-Grimaldi-CV.pdf'
};
