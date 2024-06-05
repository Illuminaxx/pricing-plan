import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Challenge Spikes - Pricing",
  description: "Challenge Spikes - Pricing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          spaceGrotesk.className,
          "bg-[#010B25] h-screen overflow-hidden"
        )}
      >
        {children}
      </body>
    </html>
  );
}
