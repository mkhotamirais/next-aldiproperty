"use client";

import React from "react";
import { MenuIcon, X } from "lucide-react";
import { useMobileMenu } from "@/hooks/zustand-hooks/useMobileMenu";
import { mainMenu } from "@/lib/common";
import { useScroll } from "@/hooks/useSctoll";
import ContactBtn from "./ContactBtn";

export default function NavMobile() {
  const { open, setOpen } = useMobileMenu();
  const isScrolled = useScroll(50);

  return (
    <div className="flex md:hidden items-center gap-4">
      <ContactBtn className="" />
      <button
        type="button"
        aria-label="mobile menu"
        className={`${isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-300"}`}
        onClick={() => setOpen(true)}
      >
        <MenuIcon className="" />
      </button>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur text-white flex items-center justify-center transition-all ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <button
          type="button"
          aria-label="close navbar"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-3 rounded-full bg-white/20"
        >
          <X className="size-5" />
        </button>
        <nav className="flex flex-col items-center gap-8 text-lg">
          {mainMenu.map((item) => (
            <a
              key={item.url}
              href={item.url}
              // className={`font-medium mx-4 ${isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-300"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
