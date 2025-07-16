import Image from "next/image"
import { Building2, Utensils, MapPin, Languages, Users, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      title: "Guía de la Ciudad",
      description: "Recorridos por los barrios más emblemáticos y lugares históricos de Tokio.",
      icon: <Building2 className="h-10 w-10 text-primary" />,
      image: "/images/tokyo_annai.jpg",
      alt: "Guía de Tokio",
    },
    {
      title: "Guía de Restaurantes",
      description: "Descubre la vibrante vida nocturna y la deliciosa gastronomía local.",
      icon: <Utensils className="h-10 w-10 text-primary" />,
      image: "/images/food_guide.jpg",
      alt: "Guía de Restaurantes",
    },
    {
      title: "Lugares Recomendados",
      description: "Visita a los lugares menos conocidos pero imprescindibles de la ciudad.",
      icon: <MapPin className="h-10 w-10 text-primary" />,
      image: "/images/kaminarimon.jpg",
      alt: "Puerta Kaminarimon, Asakusa",
    },
  ]

  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una variedad de servicios para hacer tu visita a Japón más cómoda y enriquecedora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors overflow-hidden focus:outline-none focus:ring-0">
              <div className="relative h-48 w-full">
                <Image src={service.image || "/placeholder.svg"} alt={service.alt} fill className="object-cover focus:outline-none focus:ring-0" />
              </div>
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
