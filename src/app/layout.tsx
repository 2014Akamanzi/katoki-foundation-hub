import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katoki Foundation",
  description:
    "Katoki Foundation hub — Glad Schools, KIUL, Katoki Radio, and Katoki TV.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
