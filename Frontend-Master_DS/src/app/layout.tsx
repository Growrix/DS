import type { Metadata } from "next";
import {
  Fira_Code,
  Fraunces,
  Inter,
  JetBrains_Mono,
  Manrope,
  Montserrat,
  Playfair_Display,
  Sora,
  Source_Serif_4,
} from "next/font/google";

import { ThemeInitScript } from "@/ds";
import "./globals.css";

// Typography preset superset — every `--font-*` var referenced by any preset
// in `FONT_PRESETS` MUST be mounted here. The `ds:font-audit` script enforces
// this against `ALL_NEXT_FONT_VARS`. Adding a font preset that introduces a
// new variable requires extending this file (or the audit fails).
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const display = Montserrat({ variable: "--font-display", subsets: ["latin"] });
const firaCode = Fira_Code({ variable: "--font-fira-code", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const sourceSerif = Source_Serif_4({ variable: "--font-source-serif", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blueprint",
  description: "DS-first starter kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClassName = [
    inter.variable,
    display.variable,
    firaCode.variable,
    playfair.variable,
    sourceSerif.variable,
    jetbrainsMono.variable,
    manrope.variable,
    fraunces.variable,
    sora.variable,
  ].join(" ");
  return (
    <html lang="en" className={fontClassName} suppressHydrationWarning>
      <head>
        <ThemeInitScript />
      </head>
      <body>
        <a className="ui-skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
