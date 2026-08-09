import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GangtokCab | Premium Taxi Service in Sikkim",
  description:
    "Premium taxi service for Gangtok, Sikkim, Bagdogra Airport, NJP, Darjeeling and North Sikkim.",
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