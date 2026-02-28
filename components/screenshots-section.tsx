"use client";

import { screenshots } from "@/content/screenshots";
import { Camera, User } from "lucide-react";
import Image from "next/image";
import { Card } from "./ui/card";
import { ImageLightbox } from "./ui/image-lightbox";

export default function ScreenshotsSection() {
  return (
    <section id="recortes" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-sm border-2 border-accent bg-accent/10 px-4 py-2">
          <Camera className="h-5 w-5 text-accent" />
          <span className="font-bold text-accent text-sm uppercase tracking-wide">
            Recortes de Pantalla
          </span>
        </div>
        <h2 className="mb-4 font-bold text-3xl text-foreground text-balance md:text-4xl">
          Conversaciones que Perduran
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
          Capturas de momentos digitales que guardan palabras especiales y
          recuerdos únicos
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((screenshot) => (
          <Card
            key={screenshot.id}
            className="group relative overflow-hidden border-2 rounded-none border-border bg-card transition-all hover:border-accent hover:shadow-lg"
          >
            {/* Decoración pixel art superior */}
            <div className="absolute top-0 left-0 h-1 w-12 bg-primary transition-all duration-300 group-hover:w-full z-10" />

            {/* Imagen del screenshot */}
            <ImageLightbox
              src={screenshot.image}
              alt={screenshot.description || "Captura de pantalla"}
            >
              <div className="relative w-full p-3 pt-6 bg-muted/50">
                <div className="relative w-full">
                  <Image
                    src={screenshot.image}
                    alt={screenshot.description || "Captura de pantalla"}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain rounded-sm shadow-sm"
                  />
                </div>
                {/* Barra decorativa tipo ventana */}
                <div className="absolute top-0 left-0 right-0 h-3 bg-border/30 flex items-center gap-1 px-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-destructive/60" />
                  <div className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                </div>
              </div>
            </ImageLightbox>

            {/* Información del remitente */}
            <div className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent/20">
                  <User className="h-4 w-4 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-sm">
                    {screenshot.sender}
                  </h3>
                  {screenshot.date && (
                    <p className="text-muted-foreground text-xs">
                      {screenshot.date}
                    </p>
                  )}
                </div>
              </div>

              {screenshot.description && (
                <p className="text-card-foreground text-sm italic leading-relaxed">
                  {screenshot.description}
                </p>
              )}
            </div>

            {/* Decoración pixel art en esquina */}
            <div className="absolute bottom-2 right-2 flex gap-1">
              <div className="h-2 w-2 bg-accent/50" />
              <div className="h-2 w-2 bg-primary/50" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
