import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/6690860ad407763fb6f320076ad6b49be4324a21.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F141A] border-b border-[#1E2835] shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="ChambaMax®" className="h-24 md:h-32 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-[#B8C2D1] hover:text-[#E6EAF2] transition-colors">
              Servicios
            </a>
            <a href="#como-funciona" className="text-[#B8C2D1] hover:text-[#E6EAF2] transition-colors">
              Cómo Funciona
            </a>
            <a href="#testimonios" className="text-[#B8C2D1] hover:text-[#E6EAF2] transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-[#B8C2D1] hover:text-[#E6EAF2] transition-colors">
              Contacto
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-[#2E64B2] hover:text-[#3976D1] hover:bg-[#131923]"
            >
              Iniciar Sesión
            </Button>
            <Button 
              className="bg-[#F47C20] text-[#0B0F14] hover:bg-[#FF8C3A]"
            >
              Registrarse
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#E6EAF2]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a 
              href="#servicios" 
              className="block text-[#B8C2D1] hover:text-[#E6EAF2] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#como-funciona" 
              className="block text-[#B8C2D1] hover:text-[#E6EAF2] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cómo Funciona
            </a>
            <a 
              href="#testimonios" 
              className="block text-[#B8C2D1] hover:text-[#E6EAF2] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="#contacto" 
              className="block text-[#B8C2D1] hover:text-[#E6EAF2] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button 
                variant="ghost" 
                className="text-[#2E64B2] hover:text-[#3976D1] hover:bg-[#131923] w-full"
              >
                Iniciar Sesión
              </Button>
              <Button 
                className="bg-[#F47C20] text-[#0B0F14] hover:bg-[#FF8C3A] w-full"
              >
                Registrarse
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}