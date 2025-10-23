import { Button } from "./ui/button";
import { ArrowRight, Briefcase, Shield, Home } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F141A] via-[#0B0F14] to-[#0B0F14]" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#131923] border border-[#1E2835] rounded-full px-4 py-2">
              <span className="text-[#F47C20]">✨</span>
              <span className="text-[#B8C2D1]">Conectando talento con oportunidades</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl text-[#E6EAF2] leading-tight">
              Tu próxima <span className="text-[#F47C20]">oportunidad laboral</span> sin fronteras
            </h1>
            
            <p className="text-lg text-[#B8C2D1] max-w-xl">
              ChambaMax® conecta personas con empleos nacionales e internacionales, 
              brindando asesoría legal, apoyo en trámites migratorios y soluciones de 
              hospedaje para extranjeros y nómadas digitales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-[#F47C20] text-[#0B0F14] hover:bg-[#FF8C3A] shadow-lg shadow-[#F47C20]/20"
              >
                Encuentra tu empleo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-[#2E64B2] text-[#2E64B2] hover:bg-[#2E64B2] hover:text-[#E6EAF2]"
              >
                Publicar vacante
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#131923] border border-[#1E2835] flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#F47C20]" />
                </div>
                <div>
                  <div className="text-[#E6EAF2]">5,000+</div>
                  <div className="text-[#8FA1B5] text-sm">Empleos activos</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#131923] border border-[#1E2835] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#2E64B2]" />
                </div>
                <div>
                  <div className="text-[#E6EAF2]">100%</div>
                  <div className="text-[#8FA1B5] text-sm">Asesoría legal</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#131923] border border-[#1E2835] flex items-center justify-center">
                  <Home className="w-5 h-5 text-[#22C55E]" />
                </div>
                <div>
                  <div className="text-[#E6EAF2]">500+</div>
                  <div className="text-[#8FA1B5] text-sm">Hospedajes</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-[#1E2835] shadow-2xl shadow-black/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjA4ODQ4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profesionales conectándose"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-[#131923] border border-[#1E2835] rounded-xl p-4 shadow-xl shadow-black/50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-[#F47C20]/10 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <div className="text-[#E6EAF2]">+2,500 conexiones</div>
                  <div className="text-[#8FA1B5] text-sm">Este mes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
