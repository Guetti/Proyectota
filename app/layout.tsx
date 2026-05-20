import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SnowfallWrapper from "@/components/snowfall-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tota.cl"),
  title: {
    default: "En Memoria de Gonzalo Cornejo (Tota)",
    template: "%s | Memorial Tota",
  },
  description:
    "Un espacio para recordar y honrar la memoria de nuestro amigo Gonzalo Cornejo (Tota). Mensajes, fotos y recuerdos de quienes lo quisieron.",
  keywords: [
    "Gonzalo Cornejo",
    "Tota",
    "memorial",
    "en memoria",
    "recuerdos",
    "homenaje",
  ],
  authors: [{ name: "Guetti" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.tota.cl",
    locale: "es_CL",
    title: "En Memoria de Gonzalo Cornejo (Tota)",
    description:
      "Un espacio para recordar y honrar la memoria de nuestro amigo Gonzalo Cornejo (Tota). Mensajes, fotos y recuerdos de quienes lo quisieron.",
    siteName: "Memorial Tota",
    images: [
      {
        url: "/images/portrait.jpeg",
        width: 800,
        height: 800,
        alt: "Gonzalo Cornejo (Tota)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "En Memoria de Gonzalo Cornejo (Tota)",
    description:
      "Un espacio para recordar y honrar la memoria de nuestro amigo Gonzalo Cornejo (Tota).",
    images: ["/images/portrait.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://www.tota.cl",
  name: "En Memoria de Gonzalo Cornejo (Tota)",
  description:
    "Un espacio para recordar y honrar la memoria de nuestro amigo Gonzalo Cornejo (Tota).",
  inLanguage: "es",
  about: {
    "@type": "Person",
    name: "Gonzalo Cornejo",
    alternateName: "Tota",
    image: "https://www.tota.cl/images/portrait.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SnowfallWrapper />
        {children}
      </body>
    </html>
  );
}
