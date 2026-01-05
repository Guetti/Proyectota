import { Heart } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-secondary/10 to-accent/5" />
        <Image
          src="/images/hero-background.jpeg"
          alt="Hero Background"
          fill
          priority
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
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
    </section>
  );
};
