import React from "react";
import Image from "next/image";
import "./IconChevronRight2.css";

interface IconChevronRight2Props {
  className?: string;
}

export const IconChevronRight2: React.FC<IconChevronRight2Props> = ({ className = "", ...props }) => {
  return (
    <Image
      className={"icon-chevron-right-2 " + className}
      src="icon-chevron-right-2.svg"
      alt="Chevron right"
      width={24}
      height={24}
      {...props}
    />
  );
};