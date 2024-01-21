import React from "react";
import { Navbar } from "@/components/navbar";

export default function TodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main>{children}</main>
      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; 2022 My Awesome App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
