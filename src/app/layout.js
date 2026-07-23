import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
