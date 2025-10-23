import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "figma:asset/6690860ad407763fb6f320076ad6b49be4324a21.png";
import studioLonsoLogo from "figma:asset/0134dcd4747991cfc053875d6620afb219688cde.png";

const footerLinks = {
  empresa: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Blog", href: "#" },
    { label: "Carreras", href: "#" }
  ],
  servicios: [
    { label: "Buscar empleos", href: "#" },
    { label: "Publicar vacante", href: "#" },
    { label: "Asesoría legal", href: "#" },
    { label: "Hospedaje", href: "#" }
  ],
  recursos: [
    { label: "Centro de ayuda", href: "#" },
    { label: "Guías migratorias", href: "#" },
    { label: "Preguntas frecuentes", href: "#" },
    { label: "Políticas de privacidad", href: "#" }
  ]
};

export function Footer() {
  return (
    <footer id="contacto" className="bg-[#131923] border-t border-[#1E2835]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt="ChambaMax®" className="h-32 w-auto" />
            </div>
            <p className="text-[#B8C2D1] mb-6 max-w-sm">
              Conectando talento con oportunidades. Tu plataforma integral para empleos 
              internacionales, asesoría legal y soluciones de hospedaje.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[#B8C2D1]">
                <Mail className="w-4 h-4 text-[#F47C20]" />
                <span className="text-sm">contacto@chambamax.com</span>
              </div>
              <div className="flex items-center space-x-3 text-[#B8C2D1]">
                <Phone className="w-4 h-4 text-[#F47C20]" />
                <span className="text-sm">+52 55 4162 9630</span>
              </div>
              <div className="flex items-center space-x-3 text-[#B8C2D1]">
                <MapPin className="w-4 h-4 text-[#F47C20]" />
                <span className="text-sm">Global - Servicio en 50+ países</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-[#E6EAF2] mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/portal.chambamax" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1E2835] flex items-center justify-center text-[#B8C2D1] hover:bg-[#F47C20] hover:text-[#0B0F14] transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/chambamax/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1E2835] flex items-center justify-center text-[#B8C2D1] hover:bg-[#F47C20] hover:text-[#0B0F14] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-[#E6EAF2] mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#B8C2D1] hover:text-[#F47C20] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#E6EAF2] mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#B8C2D1] hover:text-[#F47C20] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#E6EAF2] mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#B8C2D1] hover:text-[#F47C20] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Patrocinadores */}
        <div className="pt-8 border-t border-[#1E2835]">
          <p className="text-[#8FA1B5] text-sm text-center">
            Patrocinadores:{" "}
            <a 
              href="https://ciberall.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#2E64B2] hover:text-[#3976D1] transition-colors"
            >
              CiberALL IP via Satelite
            </a>
            {" "}y{" "}
            <a 
              href="https://aztecall.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#2E64B2] hover:text-[#3976D1] transition-colors"
            >
              AzteCall VoIP
            </a>
            {" • Diseño "}
            <a 
              href="https://lonso.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#2E64B2] hover:text-[#3976D1] transition-colors"
            >
              Studio Lonso
            </a>
          </p>
        </div>

        {/* Studio Lonso Logo */}
        <div className="pt-8 pb-4">
          <a 
            href="https://lonso.net" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center hover:opacity-80 transition-opacity"
            aria-label="Diseñado por Studio Lonso"
          >
            <img 
              src={studioLonsoLogo} 
              alt="Studio Lonso" 
              className="h-24 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}