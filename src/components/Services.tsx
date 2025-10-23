import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Briefcase, FileText, Plane, Home } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Empleos Nacionales e Internacionales",
    description: "Conectamos talento con oportunidades laborales en todo el mundo. Accede a miles de vacantes verificadas.",
    color: "#F47C20",
    bgColor: "rgba(244, 124, 32, 0.1)"
  },
  {
    icon: FileText,
    title: "Asesoría Legal Especializada",
    description: "Nuestro equipo de expertos te guía en todos los aspectos legales de tu proceso laboral y migratorio.",
    color: "#2E64B2",
    bgColor: "rgba(46, 100, 178, 0.1)"
  },
  {
    icon: Plane,
    title: "Trámites Migratorios",
    description: "Simplificamos tu proceso de migración. Desde visas de trabajo hasta permisos de residencia.",
    color: "#22C55E",
    bgColor: "rgba(34, 197, 94, 0.1)"
  },
  {
    icon: Home,
    title: "Hospedaje para Nómadas Digitales",
    description: "Encuentra alojamiento temporal o permanente adaptado a tus necesidades como profesional internacional.",
    color: "#60A5FA",
    bgColor: "rgba(96, 165, 250, 0.1)"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 px-4 bg-[#0B0F14]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#131923] border border-[#1E2835] rounded-full px-4 py-2 mb-4">
            <span className="text-[#F47C20]">💼</span>
            <span className="text-[#B8C2D1]">Nuestros Servicios</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl text-[#E6EAF2] mb-4">
            Todo lo que necesitas en un solo lugar
          </h2>
          
          <p className="text-[#B8C2D1] text-lg">
            Ofrecemos una solución integral para tu desarrollo profesional sin fronteras
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-[#131923] border-[#1E2835] hover:border-[#2E64B2] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_24px_rgba(46,100,178,0.2)] group"
            >
              <CardHeader>
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: service.bgColor }}
                >
                  <service.icon 
                    className="w-7 h-7" 
                    style={{ color: service.color }}
                  />
                </div>
                <CardTitle className="text-[#E6EAF2]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#B8C2D1]">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
