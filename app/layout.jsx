import "./globals.css";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Anonymous Framer",
  description: "Branding, printing, and creative craft studio homepage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
