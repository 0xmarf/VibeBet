import React from "react";
import Image from "next/image";
import "./IconCheck2.css";

interface IconCheck2Props {
  className?: string;
}

export const IconCheck2: React.FC<IconCheck2Props> = ({ className = "", ...props }) => {
  return <Image className={"icon-check-2 " + className} src="icon-check-2.svg" alt="Check" width={24} height={24} {...props} />;
};