import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incrementer",
  description: "A small counter app with Vitest coverage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
