import React from "react";
import Image from "next/image";
import "./IconChevronRight.css";

interface IconChevronRightProps {
  className?: string;
}

export const IconChevronRight: React.FC<IconChevronRightProps> = ({ className = "", ...props }) => {
  return (
    <Image
      className={"icon-chevron-right " + className}
      src="icon-chevron-right.svg"
      alt="Chevron right"
      width={24}
      height={24}
      {...props}
    />
  );
};