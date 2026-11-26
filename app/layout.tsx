import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Piyush Raj | Software Developer",
  description: "Portfolio of Piyush Raj — CSE student and aspiring software developer."
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
