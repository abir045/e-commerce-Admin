import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce Admin",
  description: "Ecommerce Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container">{children}</main>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"
          defer
        ></script>
      </body>
    </html>
  );
}
