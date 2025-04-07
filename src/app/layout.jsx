import { Amiko } from "next/font/google";
import "./globals.css";

const amiko = Amiko({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-amiko',
  display: 'swap',
})

export const metadata = {
  title: "Portfolio AEN",
  description: "Portfolio de Agustín Enzo Noviello",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${amiko.variable} antialiased w-full flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
