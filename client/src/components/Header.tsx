import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

/**
 * Header Component - FairSysTech Navigation
 * Design: Modern Minimalism with Tech Sophistication
 * - Clean navigation with turquoise accent
 * - Responsive design: desktop inline nav, mobile drawer menu
 * - Logo and 4 main menu items: About, Work, Project, Contact
 */

interface HeaderProps {
  onNavClick?: (section: string) => void;
}

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Project', id: 'project' },
  { label: 'Contact', id: 'contact' },
];

export default function Header({ onNavClick }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleNavClick = (id: string) => {
    onNavClick?.(id);
    if (isMobile) setOpen(false);
    // Smooth scroll to section
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E0E0E0] shadow-sm">
      <div className="container flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            src="/horizontalCI.png"
            alt="FairSysTech Logo"
            className="h-12 md:h-14 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-[#1A1A1A] hover:text-[#17B8A0] font-medium transition-colors duration-200 text-sm md:text-base"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-[#F5F5F5] rounded-lg transition-colors">
                {open ? (
                  <X className="w-6 h-6 text-[#1A1A1A]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#1A1A1A]" />
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-white">
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left text-[#1A1A1A] hover:text-[#17B8A0] font-medium transition-colors text-lg"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
}
