import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-alfa-black/80 backdrop-blur-lg py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="Alfa Pedidos" className="h-14 md:h-20 w-auto object-contain" />
          <span className="font-bold text-lg tracking-tight text-white hidden lg:block">Mais economia no seu pedido.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-bold hover:text-alfa-red transition-colors">Início</a>
          <a href="#beneficios" className="text-sm font-bold hover:text-alfa-red transition-colors">Benefícios</a>
          <a href="#restaurantes" className="text-sm font-bold hover:text-alfa-red transition-colors">Para Restaurantes</a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-alfa-black border-t border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl"
        >
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Início</a>
          <a href="#beneficios" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Benefícios</a>
          <a href="#restaurantes" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Para Restaurantes</a>
        </motion.div>
      )}
    </header>
  );
}
