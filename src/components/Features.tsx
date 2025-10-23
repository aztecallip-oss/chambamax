import { Check, Globe, Lock, Headphones, Zap, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Conectamos talento de todo el mundo con oportunidades sin límites geográficos"
  },
  {
    icon: Lock,
    title: "Seguridad Garantizada",
    description: "Todos nuestros empleadores y ofertas son verificadas y validadas"
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Nuestro equipo está disponible para ayudarte en cualquier momento"
  },
  {
    icon: Zap,
    title: "Proceso Rápido",
    description: "Simplificamos cada paso para que encuentres empleo más rápido"
  },
  {
    icon: Users,
    title: "Red de Expertos",
    description: "Abogados migratorios y consultores laborales a tu disposición"
  },
  {
    icon: Check,
    title: "100% Confiable",
    description: "Miles de profesionales han encontrado su oportunidad con nosotros"
  }
];

export function Features() {
  return (
    <section className="py-20 px-4 bg-[#0B0F14]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#1E2835] shadow-2xl shadow-black/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMHdvcmtpbmd8ZW58MXx8fHwxNzYwODAzODMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipo diverso trabajando"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#F47C20] to-[#FF8C3A] rounded-2xl p-6 shadow-xl shadow-[#F47C20]/30">
              <div className="text-[#0B0F14] text-center">
                <div className="text-3xl mb-1">98%</div>
                <div className="text-sm">Satisfacción</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 bg-[#131923] border border-[#1E2835] rounded-full px-4 py-2 mb-4">
              <span className="text-[#F47C20]">🌟</span>
              <span className="text-[#B8C2D1]">Por qué elegirnos</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl text-[#E6EAF2] mb-4">
              La plataforma más completa para tu éxito profesional
            </h2>
            
            <p className="text-[#B8C2D1] text-lg mb-8">
              En ChambaMax® no solo te ayudamos a encontrar trabajo, sino que te acompañamos 
              en todo el proceso de adaptación a tu nueva vida profesional.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 p-4 rounded-lg bg-[#131923] border border-[#1E2835] hover:border-[#2E64B2] transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0F141A] border border-[#1E2835] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#F47C20]" />
                  </div>
                  <div>
                    <h4 className="text-[#E6EAF2] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-[#8FA1B5] text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
