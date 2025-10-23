import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "María González",
    role: "Ingeniera de Software",
    country: "México → Canadá",
    avatar: "https://images.unsplash.com/photo-1659353589552-1556f5093206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbCUyMHdvcmtlcnxlbnwxfHx8fDE3NjA4OTIwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "ChambaMax® me ayudó no solo a encontrar mi trabajo ideal en Toronto, sino también con todos los trámites migratorios. El proceso fue increíblemente sencillo.",
    rating: 5
  },
  {
    name: "Carlos Ramírez",
    role: "Diseñador UX/UI",
    country: "Colombia → España",
    avatar: "https://i.pravatar.cc/150?img=12",
    content: "La asesoría legal fue fundamental para mi proceso. Me guiaron paso a paso y ahora estoy trabajando en Barcelona. ¡100% recomendado!",
    rating: 5
  },
  {
    name: "Ana Martínez",
    role: "Marketing Manager",
    country: "Argentina → Estados Unidos",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "Encontré hospedaje temporal mientras buscaba mi propio lugar. El servicio integral de ChambaMax® hace toda la diferencia.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 px-4 bg-[#0F141A]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#131923] border border-[#1E2835] rounded-full px-4 py-2 mb-4">
            <span className="text-[#F47C20]">💬</span>
            <span className="text-[#B8C2D1]">Testimonios</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl text-[#E6EAF2] mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          
          <p className="text-[#B8C2D1] text-lg">
            Miles de profesionales han transformado sus carreras con ChambaMax®
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-[#131923] border-[#1E2835] hover:border-[#2E64B2] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_24px_rgba(244,124,32,0.2)]"
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" 
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#1E2835]" />
                </div>

                <p className="text-[#B8C2D1] italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-3 pt-4 border-t border-[#1E2835]">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-[#F47C20] text-[#0B0F14]">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-[#E6EAF2]">
                      {testimonial.name}
                    </div>
                    <div className="text-[#8FA1B5] text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-[#2E64B2] text-sm">
                      {testimonial.country}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-[#131923] border border-[#1E2835] rounded-xl">
            <div className="text-3xl text-[#F47C20] mb-2">10,000+</div>
            <div className="text-[#B8C2D1]">Usuarios activos</div>
          </div>
          <div className="text-center p-6 bg-[#131923] border border-[#1E2835] rounded-xl">
            <div className="text-3xl text-[#2E64B2] mb-2">50+</div>
            <div className="text-[#B8C2D1]">Países disponibles</div>
          </div>
          <div className="text-center p-6 bg-[#131923] border border-[#1E2835] rounded-xl">
            <div className="text-3xl text-[#22C55E] mb-2">95%</div>
            <div className="text-[#B8C2D1]">Tasa de éxito</div>
          </div>
          <div className="text-center p-6 bg-[#131923] border border-[#1E2835] rounded-xl">
            <div className="text-3xl text-[#60A5FA] mb-2">24/7</div>
            <div className="text-[#B8C2D1]">Soporte continuo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
