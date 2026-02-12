"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

interface MediaItem {
  id: string;
  colSpan: number;
  rowSpan: number;
  title: string;
  message: string;
  imageUrl?: string;
}

const galleryItems: MediaItem[] = [
  {
    id: "1",
    colSpan: 2,
    rowSpan: 2,
    title: "Momentos juntos",
    message: "Recuerdos que perduran",
    imageUrl: "/images/media/1.png",
  },
  {
    id: "2",
    colSpan: 2,
    rowSpan: 2,
    title: "Sonrisas",
    message: "Siempre radiante",
    imageUrl: "/images/media/2.png",
  },
  {
    id: "3",
    colSpan: 2,
    rowSpan: 3,
    title: "Aventuras",
    message: "Cada momento especial",
    imageUrl: "/images/media/3.png",
  },
  {
    id: "4",
    colSpan: 2,
    rowSpan: 4,
    title: "En familia",
    message: "Amor compartido",
    imageUrl: "/images/media/4.png",
  },
  {
    id: "5",
    colSpan: 2,
    rowSpan: 2,
    title: "Celebraciones",
    message: "Instantes de alegría",
    imageUrl: "/images/media/5.png",
  },
  {
    id: "6",
    colSpan: 1,
    rowSpan: 1,
    title: "Compañerismo",
    message: "Presencia genuina",
  },
  {
    id: "7",
    colSpan: 1,
    rowSpan: 2,
    title: "Naturaleza",
    message: "Conectado con la vida",
  },
  {
    id: "8",
    colSpan: 2,
    rowSpan: 2,
    title: "Experiencias",
    message: "Viajero de corazón",
  },
];

const getGridClasses = (colSpan: number, rowSpan: number) => {
  const colMap: Record<number, string> = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
  };
  const rowMap: Record<number, string> = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
  };
  return `${colMap[colSpan] || "col-span-1"} ${rowMap[rowSpan] || "row-span-1"}`;
};

export default function MediaSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = galleryItems.find((item) => item.id === selectedId);

  return (
    <section id="galeria" className="py-20 px-4 bg-muted/30">
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

        <div className="grid grid-cols-2 gap-4 lg:gap-6 auto-rows-[140px] lg:auto-rows-[180px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              data-gallery-id={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`col-span-1 row-span-1 lg:${getGridClasses(item.colSpan, item.rowSpan)} relative overflow-hidden rounded-2xl bg-card/80 border-6 border-foreground/20 shadow-[8px_8px_0px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_rgba(0,0,0,0.15)] cursor-pointer group`}
            >
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary/60 rounded-full shadow-[2px_2px_0px_rgba(0,0,0,0.15)]" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary/60 rounded-sm shadow-[2px_2px_0px_rgba(0,0,0,0.15)]" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-accent/60 rounded-full shadow-[2px_2px_0px_rgba(0,0,0,0.15)]" />

              {/* Image placeholder with gradient */}
              <div className="w-full h-full bg-linear-to-br from-primary/20 via-secondary/15 to-accent/10 relative overflow-hidden">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="w-full h-full object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-noise opacity-10" />
                    {/* Animated background elements */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-[spin_30s_linear_infinite]" />
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-secondary/10 blur-2xl animate-[spin_25s_linear_infinite_reverse]" />
                  </>
                )}
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-end p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90 drop-shadow-md italic">
                    {item.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedId(null)}
        >
          {/* Background with animation */}
          <div className="absolute inset-0 -z-10 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="absolute inset-0">
              <div className="absolute left-8 top-24 h-50 w-50 rounded-full bg-primary/20 blur-xl animate-[spin_18s_linear_infinite]" />
              <div className="absolute right-10 top-20 h-40 w-40 rotate-45 bg-secondary/20 blur-xl animate-[spin_22s_linear_infinite]" />
              <div className="absolute left-16 bottom-24 h-14 w-14 bg-accent/20 blur-sm animate-[spin_20s_linear_infinite]" />
              <div className="absolute right-1/3 bottom-12 h-10 w-10 rounded-full bg-foreground/10 blur-sm animate-[spin_24s_linear_infinite]" />
            </div>
          </div>

          {/* Modal content */}
          <div 
            className="relative bg-card/90 border-8 border-foreground/30 rounded-3xl shadow-2xl w-full max-w-[90vw] max-h-[90vh] backdrop-blur-sm flex flex-col animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/70 rounded-full shadow-[3px_3px_0px_rgba(0,0,0,0.2)]" />
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-secondary/70 rounded-sm shadow-[3px_3px_0px_rgba(0,0,0,0.2)]" />
            <div className="absolute -bottom-4 -right-4 w-7 h-7 bg-accent/70 rounded-full shadow-[3px_3px_0px_rgba(0,0,0,0.2)]" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/70 rounded-sm shadow-[3px_3px_0px_rgba(0,0,0,0.2)]" />

            {/* Close button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="p-8 overflow-y-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Image */}
                <div className="shrink-0 rounded-2xl overflow-hidden border-4 border-foreground/20 bg-black/20 flex items-center justify-center max-h-[50vh] lg:max-h-[70vh]">
                  {selectedItem.imageUrl ? (
                    <Image
                      src={selectedItem.imageUrl}
                      alt={selectedItem.title}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-primary/30 via-secondary/25 to-accent/15 flex items-center justify-center min-h-75">
                      <div className="text-center text-foreground/50">
                        <p>Sin imagen</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between py-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                      {selectedItem.title}
                    </h2>
                    <p className="text-lg text-foreground/80 italic leading-relaxed">
                      {selectedItem.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
