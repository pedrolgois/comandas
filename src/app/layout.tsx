// Styles
import "./globals.css";

// Font
import { Montserrat } from "next/font/google";
const MontserratFont = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// Metadata
import { AuthProvider } from "@/context/AuthProvider";
import { ProductsProvider } from "@/context/ProductProvider";
import { TabProvider } from "@/context/TabProvider";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sistema de Comandas",
  description: "Sistema de gerenciamento de comandas",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthProvider>
      <ProductsProvider>
        <TabProvider>
          <html lang="pt-BR">
            <body className={`${MontserratFont.className}`}>{children}</body>
          </html>
        </TabProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}
