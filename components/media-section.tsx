import { images } from "@/content/images";
import { BentoGrid } from "./bento-grid";

export default function MediaSection() {
  return (
    <section id="galeria" className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Galería de momentos
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Un mosaico de recuerdos, risas y momentos compartidos que perdurarán
            en nuestros corazones.
          </p>
        </div>

        <BentoGrid items={images} columns={3} rowHeight={120} gap="gap-5" />
      </div>
    </section>
  );
}
