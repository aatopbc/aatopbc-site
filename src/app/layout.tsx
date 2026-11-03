import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const displayFont = localFont({
  src: "../../public/fonts/dm-serif-display-latin-400-normal.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "400",
});

const textFont = localFont({
  src: [
    {
      path: "../../public/fonts/plus-jakarta-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/plus-jakarta-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/plus-jakarta-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/plus-jakarta-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aatopbc.com"),
  title: "AATOPBC — Experiencias en Baja California",
  description:
    "17 operadores locales, 4 ciudades, una red que conoce cada rincón de Baja California. Tours de vino, transporte ejecutivo, eventos MICE, bodas destino y más.",
  openGraph: {
    title: "AATOPBC — Tu entrada a Baja California",
    description:
      "Asociación de Anfitriones y Tour Operadores de Baja California. Explora experiencias de enoturismo, cultura, aventura y más.",
    url: "https://aatopbc.com",
    siteName: "AATOPBC",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${displayFont.variable} ${textFont.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
