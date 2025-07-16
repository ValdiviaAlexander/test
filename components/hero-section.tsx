import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/tokyo-tower.jpg" alt="Torre de Tokio" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            ¡Vive Tokio a pie con un guía hispanohablante!
            
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            ¡Explora Tokio como nunca antes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="#contacto">Reservar un Tour</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/90 hover:text-black hover:border-white transition-colors duration-300" asChild>
              <Link href="#servicios" className="text-black">Ver Servicios</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
