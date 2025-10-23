import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Wifi } from "lucide-react";

export function Banner() {
  return (
    <section className="py-8 bg-gradient-to-r from-[#2E64B2] to-[#3976D1]">
      <div className="container mx-auto px-4">
        <a 
          href="https://ipviasatelite.com/planes/" 
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center md:text-left hover:opacity-90 transition-opacity">
            {/* Icon for mobile/visual interest */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 md:hidden">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <ImageWithFallback 
                src="https://ipviasatelite.com/planes/img/logo%20satelital%20ciberall.png"
                alt="CiberALL IP via Satelite"
                className="h-16 md:h-20 w-auto"
              />
            </div>
            
            {/* Text */}
            <div className="flex-1">
              <p className="text-white text-lg md:text-xl">
                <span className="font-semibold">¿Eres Nómada Digital?</span> Conéctate donde sea con IP vía Satélite
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex-shrink-0">
              <span className="inline-block px-6 py-3 bg-[#F47C20] text-[#0B0F14] rounded-lg hover:bg-[#FF8C3A] transition-colors">
                Ver Planes
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
