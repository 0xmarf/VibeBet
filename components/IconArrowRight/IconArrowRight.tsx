import React from "react";
import Image from "next/image";
import "./IconArrowRight.css";

interface IconArrowRightProps {
  className?: string;
}

export const IconArrowRight: React.FC<IconArrowRightProps> = ({ className = "", ...props }) => {
  return (
    <Image
      className={"icon-arrow-right " + className}
      src="icon-arrow-right.svg"
      alt="Arrow right"
      width={24}
      height={24}
      {...props}
    />
  );
};