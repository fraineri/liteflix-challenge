import "./globals.css";
import { bebasNueue } from "./fonts";
import { Metadata } from "next";
import { Providers } from "@/components/client/Providers";

export const metadata: Metadata = {
  title: "Liteflix",
  description: "Liteflix challenge 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bebasNueue.variable} h-full w-full bg-dark-grey`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
