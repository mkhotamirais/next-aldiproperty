import ContactSec from "@/components/home/ContactSec";
import Gallery from "@/components/home/Gallery";
// import HeroSec from "@/components/home/HeroSec";
// import LocationSec from "@/components/home/LocationSec";
// import SpecificationsSec from "@/components/home/SpecificationsSec";
import WhyChooseUsSec from "@/components/home/WhyChooseUsSec";
import React from "react";

export default function Home() {
  return (
    <main>
      {/* <HeroSec />
      <LocationSec />
      <SpecificationsSec /> */}
      <Gallery />
      <WhyChooseUsSec />
      <ContactSec />
    </main>
  );
}
