import type { Metadata } from "next";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Todo",
  description: "A simple todo app built with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.className, "w-full h-full")}>
        <UserProvider>
          <Toaster />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
