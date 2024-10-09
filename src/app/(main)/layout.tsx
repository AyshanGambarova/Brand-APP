import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function UnauthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
