import { Card, CardContent } from "./ui/card";
import { UserPlus, Search, FileCheck, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crea tu perfil",
    description: "Regístrate en minutos y completa tu perfil profesional con tus habilidades y experiencia."
  },
  {
    number: "02",
    icon: Search,
    title: "Explora oportunidades",
    description: "Navega entre miles de empleos nacionales e internacionales adaptados a tu perfil."
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Recibe asesoría",
    description: "Nuestros expertos te guían en el proceso legal y migratorio para tu nueva oportunidad."
  },
  {
    number: "04",
    icon: Rocket,
    title: "Comienza tu aventura",
    description: "Inicia tu nuevo empleo con todo el apoyo necesario, incluyendo hospedaje si lo requieres."
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-[#0F141A]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#131923] border border-[#1E2835] rounded-full px-4 py-2 mb-4">
            <span className="text-[#F47C20]">⚡</span>
            <span className="text-[#B8C2D1]">Proceso Simple</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl text-[#E6EAF2] mb-4">
            Cómo funciona ChambaMax®
          </h2>
          
          <p className="text-[#B8C2D1] text-lg">
            Solo cuatro pasos te separan de tu próxima gran oportunidad laboral
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F47C20] via-[#2E64B2] to-[#22C55E]" 
               style={{ width: 'calc(100% - 6rem)', left: '3rem' }} 
          />
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-[#131923] border-[#1E2835] shadow-[0_4px_12px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_24px_rgba(244,124,32,0.2)] transition-all duration-300 relative z-10">
                <CardContent className="pt-6">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#F47C20] to-[#FF8C3A] flex items-center justify-center shadow-lg shadow-[#F47C20]/30">
                    <span className="text-[#0B0F14]">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-[#0F141A] border border-[#1E2835] flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-8 h-8 text-[#F47C20]" />
                  </div>

                  <h3 className="text-[#E6EAF2] text-center mb-3">
                    {step.title}
                  </h3>

                  <p className="text-[#B8C2D1] text-center text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
