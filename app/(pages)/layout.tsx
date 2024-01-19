import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Provider from "@/provider/Provider";

const inter = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Luxe - Discover Vintage Fashion with a Luxurious Edge",
  description: "Discover timeless treasures at Luxe, a curated collection of vintage fashion and accessories. Shop unique finds for discerning collectors and style enthusiasts.",
  keywords: ["Luxe", "shopping", "luxury", "e-commerce", "vintage fashion", "timeless style", "statement pieces", "unique finds", "seamless shopping experience"],
  verification: {
    google: "xzfiIgCMJtFBQ48siCvMDQRe5Wx2YIvPboKiNh0PYyc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <header>
            <Header />
          </header>
          <main> {children}</main>
          <footer>
            <Footer />
          </footer>
        </Provider>
      </body>
    </html>
  );
}
