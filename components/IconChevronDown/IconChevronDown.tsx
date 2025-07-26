import React from "react";
import Image from "next/image";
import "./IconChevronDown.css";

interface IconChevronDownProps {
  className?: string;
}

export const IconChevronDown: React.FC<IconChevronDownProps> = ({ className = "", ...props }) => {
  return (
    <Image
      className={"icon-chevron-down " + className}
      src="icon-chevron-down.svg"
      alt="Chevron down"
      width={24}
      height={24}
      {...props}
    />
  );
};