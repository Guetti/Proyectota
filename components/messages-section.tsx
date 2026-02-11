import { Heart, MessageCircle } from "lucide-react";
import { Card } from "./ui/card";
import { getMemories } from "@/lib/memories";

export default async function MessagesSection() {
  const memories = getMemories();
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-sm border-2 border-accent bg-accent/10 px-4 py-2">
          <MessageCircle className="h-5 w-5 text-accent" />
          <span className="font-bold text-accent text-sm uppercase tracking-wide">
            Mensajes del Corazón
          </span>
        </div>
        <h2 className="mb-4 font-bold text-3xl text-foreground text-balance md:text-4xl">
          Palabras de Cariño y Gratitud
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
          Pensamientos y recuerdos compartidos por quienes tuvieron la fortuna
          de conocerle
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {memories.map((memory, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-2 rounded-none border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
          >
            {/* Decoración pixel art */}
            <div className="absolute top-0 left-0 h-1 w-12 bg-primary transition-all duration-300 group-hover:w-full" />

            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="mb-1 font-bold text-foreground text-lg">
                  {memory.author}
                </h3>
                <p className="text-muted-foreground text-sm">{memory.date}</p>
              </div>
              <Heart className="h-5 w-5 text-accent transition-transform group-hover:scale-110" />
            </div>

            <blockquote className="relative text-card-foreground text-pretty leading-relaxed">
              <span className="absolute -top-4 -left-1 font-serif text-3xl text-primary/30">
                &quot;
              </span>
              <p className="relative italic">{memory.message}</p>
              <span className="absolute -bottom-4 -right-1 font-serif text-3xl text-primary/30">
                &quot;
              </span>
            </blockquote>

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
