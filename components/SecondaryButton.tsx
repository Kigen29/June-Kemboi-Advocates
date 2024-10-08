import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "./../types";
export default function secondaryButton({ children, onClick }: ButtonProps) {
  return (
    <>
      <Button
        onClick={onClick}
        className="px-6 py-2 rounded-sm font-medium bg-white text-[#800000] w-fit border border-[#800000]"
      >
        {children}
      </Button>
    </>
  );
}