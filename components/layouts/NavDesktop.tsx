"use client";

// import { useScroll } from "@/hooks/useSctoll";
import { mainMenu } from "@/lib/common";

export default function NavDesktop() {
  // const isScrolled = useScroll(50);

  return (
    <nav className="hidden md:flex">
      <div>
        {mainMenu.map((item) => (
          <a
            key={item.url}
            href={item.url}
            // className={`font-medium mx-4 ${isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-300"}`}
            className={`font-medium mx-4 text-gray-700 hover:text-gray-900`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
