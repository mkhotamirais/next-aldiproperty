"use client";

// import { useScroll } from "@/hooks/useSctoll";
import Logo from "../Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import ContactBtn from "./ContactBtn";

export default function Header() {
  // const isScrolled = useScroll(50);

  return (
    <header
      // className={`min-h-20 fixed top-0 left-0 right-0 w-full z-30 transition-all duration-300 ${isScrolled ? "bg-white" : "bg-transparent"}`}
      className={`min-h-20 fixed top-0 left-0 right-0 w-full z-30 transition-all duration-300 bg-white`}
    >
      <div className="min-h-20 container max-w-6xl! flex items-center justify-between">
        <Logo />
        <div>
          <NavDesktop />
          <NavMobile />
        </div>
        <ContactBtn className="hidden md:flex" />
      </div>
    </header>
  );
}
