import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Input } from "./ui/input";

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0F141A] via-[#0B0F14] to-[#131923] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#F47C20]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2E64B2]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#131923] border border-[#1E2835] rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/50">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-[#0F141A] border border-[#1E2835] rounded-full px-4 py-2 mb-4">
                <span className="text-[#F47C20]">🚀</span>
                <span className="text-[#B8C2D1]">Comienza hoy</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl text-[#E6EAF2] mb-4">
                Tu próxima oportunidad te está esperando
              </h2>
              
              <p className="text-[#B8C2D1] text-lg max-w-2xl mx-auto">
                Únete a miles de profesionales que ya encontraron su empleo ideal. 
                Regístrate gratis y empieza a explorar oportunidades sin fronteras.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-6">
              <Input 
                type="email" 
                placeholder="tu@email.com"
                className="bg-[#0F141A] border-[#1E2835] text-[#E6EAF2] placeholder:text-[#8FA1B5] focus:border-[#2E64B2] focus:ring-[#3976D1]/45"
              />
              <Button 
                size="lg"
                className="bg-[#F47C20] text-[#0B0F14] hover:bg-[#FF8C3A] shadow-lg shadow-[#F47C20]/20 whitespace-nowrap w-full sm:w-auto"
              >
                Comenzar gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="text-[#8FA1B5] text-sm text-center">
              Sin tarjeta de crédito requerida • Acceso inmediato • Soporte 24/7
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-[#1E2835]">
              <div className="flex items-center space-x-2 text-[#B8C2D1]">
                <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                </div>
                <span className="text-sm">Registro en 2 minutos</span>
              </div>
              <div className="flex items-center space-x-2 text-[#B8C2D1]">
                <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                </div>
                <span className="text-sm">Ofertas verificadas</span>
              </div>
              <div className="flex items-center space-x-2 text-[#B8C2D1]">
                <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                </div>
                <span className="text-sm">100% gratis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
