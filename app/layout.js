import { Itim, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import NavBar from "./components/navbar";

const itim = Itim({
  variable: "--font-itim",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "ANNONCES TUNISIE",
  description: "Plateforme d'annonces en Tunisie",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${itim.variable} ${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        <Header />
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}