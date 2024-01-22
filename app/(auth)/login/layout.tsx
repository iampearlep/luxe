import type { Metadata } from "next";
import "../../styles/globals.css";
import Provider from "@/provider/Provider";
import { Quicksand} from "next/font/google";

const inter = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Enter the World of Luxe: Login | Register",
  description: "Create your Luxe account or sign in to unlock a world of curated fashion, and a seamless shopping experience. ",
  keywords: ["Luxe", "shopping", "luxury", "e-commerce", "vintage fashion", "timeless style", "statement pieces", "unique finds", "seamless shopping experience"],
  verification:{
    google: "VfSXEWYPxTnE7ukS86oItOXzuzrYmIsXloH9WZqnisE",
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main> {children}</main>
        </Provider>
      </body>
    </html>
  );
}
