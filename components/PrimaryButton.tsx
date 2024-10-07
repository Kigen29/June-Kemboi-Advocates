import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "./../types";
export default function primaryButton({ children, onClick }: ButtonProps) {
  return (
    <>
      <Button
        onClick={onClick}
        className="px-6 py-2 rounded-sm font-medium bg-[#800000] text-white w-fit transition-all shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
      >
        {children}
      </Button>
    </>
  );
}
