import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const teamMembers = [
    {
      name: "Carlos Rodríguez",
      role: "Fundador y Guía Principal",
      bio: "Nacido en España y residente en Tokio desde hace 10 años. Apasionado por la cultura japonesa y experto en historia local.",
      image: "/images/team-member-1.jpg",
    },
    {
      name: "María González",
      role: "Guía Especializada en Gastronomía",
      bio: "Chef profesional con experiencia en cocina japonesa. Conoce los mejores lugares para disfrutar de la auténtica gastronomía de Tokio.",
      image: "/images/team-member-2.jpg",
    },
    {
      name: "Javier Sánchez",
      role: "Coordinador de Tours",
      bio: "Experto en logística y planificación. Se asegura de que cada tour sea una experiencia perfectamente organizada y sin contratiempos.",
      image: "/images/team-member-3.jpg",
    },
  ]

  return (
    <section id="sobre-nosotros" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mí</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image src="/images/alex.jpg" alt="Nuestro equipo en Tokio" fill className="object-cover object-top" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">Sobre Mí</h3>
            <p className="mb-4">
              ¡Hola! Soy un peruano nacido en Japón.<br />
              Aunque el japonés es mi idioma nativo, también hablo español con mis padres, así que mi forma de hablar es bastante natural, aunque a veces puedo no conocer algunas palabras difíciles.
              Hace unos 7 años me mudé a Tokio, ¡y desde entonces he estado explorando todos sus rincones!<br />
              Me encanta disfrutar de unas copas, así que si te interesa conocer izakayas (bares japoneses tradicionales), puedo recomendarte algunos lugares geniales.<br />
              Si tienes algún sitio turístico en mente, estaré encantado de investigar y llevarte. ¡La idea es que disfrutes al máximo tu visita!
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-6 text-primary">¿Por qué empecé este tour?</h3>
            <p>
              Hay muy pocos guías en Japón que hablen español.<br />
              Me encanta conversar y conocer nuevas personas.<br />
              ¡Quiero que quienes visiten Japón se lleven recuerdos inolvidables!<br />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
