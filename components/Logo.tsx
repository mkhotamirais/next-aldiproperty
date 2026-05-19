"use client";

import Link from "next/link";

// import { useScroll } from "@/hooks/useSctoll";

export default function Logo() {
  // const isScrolled = useScroll(50);

  return (
    // <div className={`${!isScrolled ? "text-white" : ""} text-center font-bold`}>
    <Link href="/" className={`text-center font-bold`}>
      <span className="text-lg tracking-wider">ALDI</span>
      <br />
      <span>PROPERTY</span>
    </Link>
  );
}
