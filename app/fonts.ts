import localFont from "next/font/local";

export const bebasNueue = localFont({
    src: [
      {
        path: "../public/fonts/Bebas-Neue-Pro-Book.ttf",
        weight: "400",
      },
      {
        path: "../public/fonts/Bebas-Neue-Pro-Bold.ttf",
        weight: "700",
      },
    ],
    variable: '--font-bebas-mueue'
  });