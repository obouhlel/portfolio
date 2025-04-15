import type { Metadata } from "next";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BackgroundBeams } from "@/components/ui/background-beams";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Oussama BOUHLEL | Portfolio",
  description: "Portfolio d'Oussama BOUHLEL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>
          <BackgroundGradientAnimation className="min-h-screen">
            <Header />
            <main className="text-white">{children}</main>
          </BackgroundGradientAnimation>
        </ThemeProvider>
        <BackgroundBeams />
      </body>
    </html>
  );
}
