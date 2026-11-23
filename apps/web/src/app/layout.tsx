import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZENTRIX Hotels | Stay exceptionally well",
  description: "Discover considered stays and trusted hotels around the world with ZENTRIX Hotels.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
