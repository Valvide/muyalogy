import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { ToastProvider } from "@/components/providers/toaster-provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Ethiopian Online University",
  description: "Quality online education in Ethiopia",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          <ToastProvider />
          <ConfettiProvider />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
