import type { Metadata } from "next";
import { ppNeueMachina, biformPixel } from "@/fonts/fonts";
import { ThemeProvider } from "@/contexts/theme.context";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ppNeueMachina.variable} ${biformPixel.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
