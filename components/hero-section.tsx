import { Heart } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-secondary/15 to-accent/5" />
        <div className="absolute inset-0 bg-noise opacity-20" />
        {/* Decorative shapes */}
        <div className="absolute inset-0">
          <div className="absolute left-8 top-24 h-50 w-50 rounded-full bg-primary/25 blur-xl animate-[spin_18s_linear_infinite]" />
          <div className="absolute right-10 top-20 h-40 w-40 rotate-45 bg-secondary/25 blur-xl animate-[spin_22s_linear_infinite]" />
          <div className="absolute left-16 bottom-24 h-14 w-14 bg-accent/25 blur-sm animate-[spin_20s_linear_infinite]" />
          <div className="absolute left-1/2 top-12 h-8 w-8 rotate-45 bg-foreground/10 blur-sm animate-[spin_14s_linear_infinite]" />
          <div className="absolute right-1/3 bottom-12 h-10 w-10 rounded-full bg-foreground/10 blur-sm animate-[spin_24s_linear_infinite]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="relative text-center bg-card/80 border-9 border-foreground/20 shadow-[10px_10px_0px_rgba(0,0,0,0.15)] backdrop-blur-sm px-6 py-10 md:px-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] bg-size-[12px_12px]">
            <div className="absolute -top-3 left-6 h-3 w-8 bg-primary/60 shadow-[3px_3px_0px_rgba(0,0,0,0.15)]" />
            <div className="absolute -top-3 right-6 h-3 w-8 bg-secondary/60 shadow-[3px_3px_0px_rgba(0,0,0,0.15)]" />
            <div className="absolute -bottom-3 left-6 h-3 w-8 bg-accent/60 shadow-[3px_3px_0px_rgba(0,0,0,0.15)]" />
            <div className="absolute -bottom-3 right-6 h-3 w-8 bg-primary/60 shadow-[3px_3px_0px_rgba(0,0,0,0.15)]" />
            <div className="mb-8">
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="relative">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#C5852B] shadow-2xl">
                <Image
                  src="/images/portrait.jpeg"
                  alt="Portrait"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 z-20">
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-[#C5852B] shadow-lg bg-[#C5852B] flex items-center justify-center">
                  <Image
                    src="/images/kabuto.png"
                    alt="Kabuto Discord Icon"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance ">
            Gonzalo Cornejo (Tota)
          </h1>

          <p className="text-xl md:text-2xl text-foreground/90 mb-6">
            1997 - 2025
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto text-balance italic">
              &quot;Siempre atento a los demás, siempre con una sonrisa. Así te
              recordaremos.&quot;
            </p>
            <Heart className="w-5 h-5 text-primary fill-primary" />
          </div>

          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed text-pretty">
            Este espacio está dedicado a honrar los recuerdos, la risa y el amor
            compartido. Una celebración de una vida que tocó a tantos corazones.
          </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
