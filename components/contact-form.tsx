"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    dates: "",
    purpose: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, purpose: value }))
  }

  const validateForm = () => {
    const errors = {
      name: "",
      email: "",
      purpose: "",
      message: "",
    }

    if (!formState.name.trim()) {
      errors.name = "Nombre es requerido"
    }

    if (!formState.email.trim()) {
      errors.email = "Correo es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = "Formato de correo inválido"
    }

    if (!formState.purpose) {
      errors.purpose = "Propósito es requerido"
    }

    if (formState.purpose === "other" && !formState.message.trim()) {
      errors.message = "Mensaje requerido si seleccionas 'Otro'"
    }

    setFormErrors(errors)
    return !Object.values(errors).some((msg) => msg !== "")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (!res.ok) throw new Error("Slack notification failed")

      setIsSubmitted(true)
      setFormState({ name: "", email: "", dates: "", purpose: "", message: "" })
      setFormErrors({ name: "", email: "", purpose: "", message: "" })

      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error(error)
      alert("Error al enviar el mensaje. Por favor intenta más tarde.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Interesado en nuestros servicios? Completa el formulario a continuación y
            nos pondremos en contacto contigo pronto.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Formulario de Contacto</CardTitle>
            <CardDescription>
              Cuéntanos sobre tu visita a Japón y cómo podemos ayudarte.  <br />
              Revisaremos tu consulta y te responderemos al correo proporcionado dentro de 2 o 3 días hábiles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" name="name" value={formState.name} onChange={handleChange} />
                  {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dates">Fechas Preferidas</Label>
                  <Input
                    id="dates"
                    name="dates"
                    placeholder="Ej: 15-20 de Octubre, 2025"
                    value={formState.dates}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Propósito de la Visita</Label>
                  <div translate="no">
                    <Select value={formState.purpose} onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un propósito" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="city-guide" id="select-city-guide">
                          <span>Guía de la Ciudad</span>
                        </SelectItem>
                        <SelectItem value="night-food" id="select-night-food">
                          <span>Guía de Restaurantes</span>
                        </SelectItem>
                        <SelectItem value="recommended-spots" id="select-recommended-spots">
                          <span>Lugares Recomendados</span>
                        </SelectItem>
                        <SelectItem value="other" id="select-other">
                          <span>Otro</span>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {formErrors.purpose && <p className="text-red-500 text-sm">{formErrors.purpose}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje (opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="¿Tienes algo más que decirnos?"
                  />
                  {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
