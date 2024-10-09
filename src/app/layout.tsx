"use client";
import { UserProvider } from "@/context/userContext";
import "@/styles/global.css";
import TanstackProvider from "@/utils/tanstack-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <UserProvider>{children}</UserProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
