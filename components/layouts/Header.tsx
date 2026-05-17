import React from "react";
import Logo from "../Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Logo />
        <div>
          <NavDesktop />
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
