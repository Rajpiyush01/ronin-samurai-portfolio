import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Piyush Raj | The Ronin Portfolio",
  description: "Developer, learner, and creator — walking the path of the Ronin."
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
