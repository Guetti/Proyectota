import { HeroSection } from "@/components/hero-section";
import MediaSection from "@/components/media-section";
import MessagesSection from "@/components/messages-section";
import { Separator } from "@/components/separator";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Separator />
      {/*       <AboutSection />
      <Separator /> */}
      <MediaSection />
      <Separator />
      <MessagesSection />
      <Separator />
    </main>
  );
}
