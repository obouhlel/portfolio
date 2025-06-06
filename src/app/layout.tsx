import type { Metadata } from "next";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";
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
    <html lang="fr" className="dark">
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main className="text-white">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
