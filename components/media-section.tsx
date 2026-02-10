export default function MediaSection() {
  return (
    <section id="galeria" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Imágenes y videos
          </h2>
          <p className="text-foreground/70 text-lg">
            Un lugar para reunir fotos y videos significativos.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`media-${index}`}
              className="group rounded-2xl border border-border/60 bg-card/70 p-4 shadow-sm"
            >
              <div className="aspect-video w-full rounded-xl bg-foreground/5" />
              <p className="mt-3 text-sm text-foreground/70">
                Título o descripción del recuerdo.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
