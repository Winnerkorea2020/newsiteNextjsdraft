import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "TY-Play",
  description: "TY-Play: Welcome TY-Play",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen justify-between">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
