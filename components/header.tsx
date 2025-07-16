"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    // ヘッダーのスタイルを赤系に更新
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl text-primary">
            Tokio Guía
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#servicios" className="text-sm font-medium hover:underline">
            Servicios
          </Link>
          <Link href="#sobre-nosotros" className="text-sm font-medium hover:underline">
            Sobre Mí
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:underline">
            Contacto
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="#contacto">Reservar Ahora</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="#servicios" className="text-lg font-medium hover:underline" onClick={() => setIsOpen(false)}>
                Servicios
              </Link>
              <Link
                href="#sobre-nosotros"
                className="text-lg font-medium hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Sobre Mí
              </Link>
              <Link href="#contacto" className="text-lg font-medium hover:underline" onClick={() => setIsOpen(false)}>
                Contacto
              </Link>
              <Button asChild className="mt-4">
                <Link href="#contacto" onClick={() => setIsOpen(false)}>
                  Reservar Ahora
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
