import React from "react";
import { Button } from "../ui/button";
import { PhoneIcon } from "lucide-react";

export default function ContactBtn({ className }: { className?: string }) {
  return (
    <Button
      size={"lg"}
      variant={"outline"}
      className={`${className} border-emerald-600 text-white hover:text-white bg-emerald-600 hover:bg-emerald-700`}
    >
      <PhoneIcon />
      Hubungi Kami
    </Button>
  );
}
