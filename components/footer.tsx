import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Tokio Guía</h3>
            <p className="text-slate-400 mb-4">
              Servicios de guía turística en español para visitantes hispanohablantes en Tokio, Japón.
            </p>
            {/* <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#servicios" className="text-slate-400 hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#sobre-nosotros" className="text-slate-400 hover:text-white">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-slate-400 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Tokio Guía. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
