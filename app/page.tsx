import ContactSec from "@/components/home/ContactSec";
import HeroSec from "@/components/home/HeroSec";
import ProductSec from "@/components/home/ProductSec";
import React from "react";

export default function Home() {
  return (
    <main>
      <HeroSec />
      <ProductSec />
      <ContactSec />
    </main>
  );
}
