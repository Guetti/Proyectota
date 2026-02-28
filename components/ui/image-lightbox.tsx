"use client";

import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export function ImageLightbox({ src, alt, children }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative w-full cursor-zoom-in group/zoom"
        aria-label="Ampliar imagen"
      >
        {children}
        {/* Indicador de zoom */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-sm bg-foreground/80 px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover/zoom:opacity-100">
          <ZoomIn className="h-3 w-3" />
          <span>Ver más grande</span>
        </div>
      </button>

      {/* Modal/Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setIsOpen(false)}
        >
          {/* Botón cerrar */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-sm border-2 border-border bg-card text-foreground transition-colors hover:border-accent hover:bg-accent/10"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Instrucción */}
          <p className="absolute top-4 left-4 text-sm text-muted-foreground">
            Clic o Esc para cerrar
          </p>

          {/* Imagen ampliada */}
          <div
            className="relative max-h-[90vh] max-w-[95vw] overflow-auto rounded-sm border-2 border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="h-auto w-auto max-h-[85vh] object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
