import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Expat Team - Finance & Insurance for International Professionals in Germany",
  description: "We help international professionals understand German finance, insurance, and retirement planning — clearly, transparently, and in your language.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
