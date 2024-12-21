import React, { useState, useEffect } from 'react';
import { Pill, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Pill className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              MediScan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-4 py-2">
            <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const location = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/scan", label: "Scan Medicine" },
    { to: "/database", label: "Medicine Database" },
    { to: "/about", label: "About" }
  ];

  const linkClass = mobile
    ? "block py-2 text-gray-600 hover:text-purple-600 transition-colors"
    : "text-gray-600 hover:text-purple-600 transition-colors relative group";

  const activeLinkClass = mobile
    ? "block py-2 text-purple-600 font-medium"
    : "text-purple-600 font-medium relative group";

  return (
    <div className={mobile ? "space-y-2" : "flex items-center space-x-8"}>
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className={location.pathname === to ? activeLinkClass : linkClass}
          onClick={onClick}
        >
          {label}
          {!mobile && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          )}
        </Link>
      ))}
    </div>
  );
}