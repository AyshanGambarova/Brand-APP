"use client";
import "./global.css";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Provider from "@/app/_provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const hideLayout =
    pathName === "/login" ||
    pathName === "/register" ||
    pathName === "/reset-password";

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {!hideLayout && <Navbar />}
          <main>
            <Provider>{children}</Provider>
          </main>
          {!hideLayout && <Footer />}
        </div>
      </body>
    </html>
  );
}
