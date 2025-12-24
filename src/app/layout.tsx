import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katoki Foundation Hub",
  description:
    "Katoki Foundation Hub: Glad Schools, KIUL, and KatokiMedia (Radio & TV).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
