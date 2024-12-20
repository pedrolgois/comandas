// Styles
import "./globals.css";

// Font
import { Montserrat } from "next/font/google";
const MontserratFont = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// Metadata
import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthProvider";
export const metadata: Metadata = {
  title: "Sistema de Comandas",
  description: "Sistema de gerenciamento de comandas",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthProvider>
      <html lang="pt-BR">
        <body className={`${MontserratFont.className}`}>{children}</body>
      </html>
    </AuthProvider>
  );
}
