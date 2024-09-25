"use client";
import "./global.css";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Provider from "@/util/Providers";

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
        <Provider>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
