import React from "react";
import Image from "next/image";
import "./IconChevronDown2.css";

interface IconChevronDown2Props {
  className?: string;
}

export const IconChevronDown2: React.FC<IconChevronDown2Props> = ({ className = "", ...props }) => {
  return (
    <Image
      className={"icon-chevron-down-2 " + className}
      src="icon-chevron-down-2.svg"
      alt="Chevron down"
      width={24}
      height={24}
      {...props}
    />
  );
};