import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
