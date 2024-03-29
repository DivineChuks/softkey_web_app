import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Providers from "../components/redux/providers";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Elevate your software Experience",
  description:
    "Revolutionize the way you explore and acquire software and games.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClerkProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
