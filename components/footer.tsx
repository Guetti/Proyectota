import { githubRepo, instagramUrl, messagesEmail, siteName } from "@/lib/constants";
import { Github, Heart, Instagram, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Columna 1: Sobre el proyecto */}
          <div>
            <h3 className="mb-4 font-bold text-foreground text-lg">
              {siteName}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Un espacio digital creado con cariño para honrar la memoria de
              nuestro amigo. Un proyecto colaborativo construido por quienes lo
              conocimos y amamos.
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <div>
            <h3 className="mb-4 font-bold text-foreground text-lg">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#galeria"
                  className="text-muted-foreground text-sm transition-colors hover:text-accent"
                >
                  Galería de momentos
                </a>
              </li>
              <li>
                <a
                  href="#recortes"
                  className="text-muted-foreground text-sm transition-colors hover:text-accent"
                >
                  Recortes de pantalla
                </a>
              </li>
              <li>
                <a
                  href={githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                  Repositorio en GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="mb-4 font-bold text-foreground text-lg">Contacto</h3>
            <p className="mb-3 text-muted-foreground text-sm">
              ¿Quieres aportar contenido o tienes alguna sugerencia?
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${messagesEmail}`}
                  className="inline-flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  {messagesEmail}
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-accent"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="my-8 h-px bg-border" />

        {/* Pie de página */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {siteName}. Hecho con amor por sus amigos.
          </p>
          <p className="inline-flex items-center gap-1 text-muted-foreground text-sm">
            Construido con <Heart className="h-4 w-4 text-accent" /> en memoria
            de Tota
          </p>
        </div>

        {/* Decoración pixel art */}
        <div className="mt-6 flex justify-center gap-1">
          <div className="h-2 w-2 bg-primary/30" />
          <div className="h-2 w-2 bg-accent/30" />
          <div className="h-2 w-2 bg-primary/30" />
          <div className="h-2 w-2 bg-accent/30" />
          <div className="h-2 w-2 bg-primary/30" />
        </div>
      </div>
    </footer>
  );
}
