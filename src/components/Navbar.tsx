import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'House Plans', href: '#plans' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-pipro-green rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
          <div className="leading-tight">
            <span className="text-pipro-green font-bold text-xl block">PIPRO HOMES</span>
            <span className="text-pipro-orange font-semibold text-xs tracking-widest uppercase">Developers</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors ${isScrolled ? 'text-slate-700 hover:text-pipro-green' : 'text-white hover:text-pipro-orange'}`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <a href="https://wa.me/910000000000" className="flex items-center gap-2 text-pipro-green font-semibold hover:opacity-80 transition-opacity">
              <MessageCircle size={20} />
              <span className="hidden lg:inline text-sm">WhatsApp</span>
            </a>
            <a href="tel:+910000000000" className="bg-pipro-green text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-md">
              Call Now
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 font-medium py-2 hover:text-pipro-green"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                <a href="https://wa.me/910000000000" className="flex items-center justify-center gap-2 text-pipro-green font-semibold py-2 border border-pipro-green rounded-lg">
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                <a href="tel:+910000000000" className="flex items-center justify-center gap-2 bg-pipro-green text-white font-semibold py-3 rounded-lg">
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
