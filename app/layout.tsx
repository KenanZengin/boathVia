import type { Metadata } from "next";
import { Lato } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/global.scss"
import Header from "@/backbone/header";
import Footer from "@/backbone/footer";
// import { Container } from "react-bootstrap";


const inter = Lato({ 
  subsets: ["latin"],
  weight: ["400"] 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* TODO: Add Container */}
          <Header />  
          <div className="container_add">
            {children}
            <Footer />
          </div>
      </body>
    </html>
  );
}
