import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Language Whisperer",
  description: "Language learning App",
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
