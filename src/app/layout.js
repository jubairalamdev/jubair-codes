import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://jubair.dev"),
  title: {
    default: "Jubair | Software Developer",
    template: "%s | Jubair",
  },
  description:
    "Professional portfolio of Jubair — a software developer specializing in modern web applications.",
  openGraph: {
    title: "Jubair | Software Developer",
    description:
      "Professional portfolio of Jubair — a software developer specializing in modern web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jubair | Software Developer",
    description:
      "Professional portfolio of Jubair — a software developer specializing in modern web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
