import React from "react";
import { Button } from "../ui/button";
import { PhoneIcon } from "lucide-react";

export default function ContactBtn({ className }: { className?: string }) {
  return (
    <Button size={"lg"} variant={"outline"} className={className}>
      <PhoneIcon />
      Hubungi Kami
    </Button>
  );
}
