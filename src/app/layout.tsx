import type { Metadata } from "next";
import { ppNeueMachina, biformPixel } from "@/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cristhian Rodriguez - AI Automation Engineer",
  description: "CV of Cristhian Rodriguez - AI Automation Engineer & Intelligent Agents Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ppNeueMachina.variable} ${biformPixel.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
