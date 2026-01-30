import "./globals.css";
import Navbar from "@/components/Navbar";
import { HeroWaveBackground } from "@/components/home/sections/HeroWaveBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
