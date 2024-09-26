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
  if (pathName === "/login" || pathName === "/register") {
    return (
      <html>
        <body>{children}</body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </TanstackProvider>
      </body>
    </html>
  );
}
