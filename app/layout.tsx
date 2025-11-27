import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Expat Team - Premium Immigration Services",
  description: "Expert immigration solutions for tech companies and global talent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
