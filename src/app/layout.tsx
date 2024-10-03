"use client";
import "./global.css";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TanstackProvider from "@/util/tanstack-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          {pathName === "/login" || pathName === "/register" ? (
            // No Navbar and Footer on login or register pages
            <>{children}</>
          ) : (
            <div className="flex flex-col min-h-screen overflow-hidden">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          )}
        </TanstackProvider>
      </body>
    </html>
  );
}
