import React from "react"
import Image from "next/image"

export default function GallerySection() {
  const galleryImages = [
    {
      src: "/images/shinjuku_yakei.jpg",
      alt: "Vista nocturna de la estación de Shinjuku (salida sur)",
    },
    {
      src: "/images/koenji_junjo.jpg",
      alt: "Koenji Junjo Shotengai (calle comercial de Koenji)",
    },
    {
      src: "/images/asagaya_starroad.jpg",
      alt: "Asagaya Star Road (calle comercial de Asagaya)",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galería de Tokio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre la belleza y diversidad de Tokio a través de estas imágenes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="space-y-2">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-center text-muted-foreground">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
