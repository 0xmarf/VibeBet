import React from "react";
import Image from "next/image";
import "./IconArrowRight2.css";

interface IconArrowRight2Props {
  className?: string;
}

export const IconArrowRight2: React.FC<IconArrowRight2Props> = ({ className = "", ...props }) => {
  return (
    <Image
      className={"icon-arrow-right-2 " + className}
      src="icon-arrow-right-2.svg"
      alt="Arrow right"
      width={24}
      height={24}
      {...props}
    />
  );
};