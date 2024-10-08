import React from "react";
import { Button } from "@/components/ui/button";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const SolidButtonForm = ({ children, onClick }: ButtonProps) => {
  return (
    <Button onClick={onClick} className="bg-[#800000] text-[#EFB34E] px-6 py-3 rounded-md hover:text-white cursor-pointer transition duration-300 ease-in-out">
      {children}
    </Button>
  );
};

export default SolidButtonForm;
