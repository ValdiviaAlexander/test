import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tokio Guía - Servicios de Guía en Español en Japón",
  description: "Servicios de guía turística en español para visitantes hispanohablantes en Tokio, Japón.",
  generator: "v0.dev",
  openGraph: {
    title: "¡Viaja en Japón!",
    description: "Guía en español para explorar Tokio",
    url: "https://viajaenjapon.jp/",
    type: "website",
    images: [
      {
        url: "https://viajaenjapon.jp/ogp.png", // `public/ogp.png に配置
        width: 1200,
        height: 630,
        alt: "¡Viaja en Japón!",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "¡Viaja en Japón!",
    description: "Guía en español para explorar Tokio",
    images: [
      {
        url: "https://viajaenjapon.jp/ogp.png",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico", // /favicon.png に配置
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
