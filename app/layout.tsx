import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/global.scss"
import 'swiper/css';

import Header from "@/backbone/header";
import Footer from "@/backbone/footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import ProgressBar from "@/components/progress-bar";


const inter = Lato({ 
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();


  return (
   <SessionProvider session={session} basePath="/api/auth">
     <html lang="en">
      <body className={`${inter.className}`}>
          <ProgressBar />
          <Header session={session}/>  
          <div className="container_add">    
            {children}
            <Footer />
          </div>
      </body>
     </html>
   </SessionProvider>
  );
}


