import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Estedad = localFont({
  src: [
    {
      path: "./../fonts/Estedad-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./../fonts/Estedad-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./../fonts/Estedad-ExtraLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../fonts/Estedad-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../fonts/Estedad-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../fonts/Estedad-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={`${Estedad.className} antialiased`}>{children}</body>
    </html>
  );
}
