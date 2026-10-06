'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false); // Always close mobile menu on click
    
    // If the link is an anchor link to the home page (e.g., "/#about")
    if (href.startsWith('/#')) {
      const targetId = href.substring(1); // Extract the "#about" part
      
      if (pathname === '/') {
        // If we are already on the home page, just smooth scroll
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If we are NOT on the home page, let Next.js navigate to /#about normally
        // No e.preventDefault() here
      }
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-4 border-b border-[#1E1E1E]'
          : 'bg-transparent py-6'
      )}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/#home" 
          className="text-[#F0EDE8] font-bold tracking-wider text-lg"
          onClick={(e) => handleLinkClick(e, '/#home')}
        >
          ADITYA GRIMALDI SANJAYA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => {
              // Active if we're on a matching standalone page
              const hrefBase = link.href.replace('/#', '/');
              const isActive =
                (hrefBase === '/' && pathname === '/') ||
                (hrefBase !== '/' && pathname.startsWith(hrefBase));

              return (
                <li key={link.label} className="relative">
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={cn(
                      'text-sm transition-colors',
                      isActive
                        ? 'text-[#E8652D] font-medium'
                        : 'text-[#6B6B6B] hover:text-[#E8652D]'
                    )}
                  >
                    {link.label}
                  </Link>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#E8652D] rounded-full" />
                  )}
                </li>
              );
            })}
          </ul>
          
          <a 
            href="/files/Aditya-Grimaldi-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-wider uppercase px-4 py-2 bg-[#141414] text-[#F0EDE8] border border-[#1E1E1E] hover:border-[#E8652D] hover:text-[#E8652D] transition-colors rounded-sm"
          >
            View CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F0EDE8] p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col pt-20 px-6 h-screen"
          >
            <button
              className="absolute top-6 right-6 text-[#F0EDE8] p-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            
            <ul className="flex flex-col space-y-8 mt-10">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#F0EDE8] text-2xl font-semibold hover:text-[#E8652D] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-12">
              <a 
                href="/files/Aditya-Grimaldi-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium tracking-wider uppercase px-6 py-3 bg-[#E8652D] text-[#0A0A0A] rounded-sm w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                View CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
