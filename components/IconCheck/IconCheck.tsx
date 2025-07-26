import React from "react";
import Image from "next/image";
import "./IconCheck.css";

interface IconCheckProps {
  className?: string;
}

export const IconCheck: React.FC<IconCheckProps> = ({ className = "", ...props }) => {
  return <Image className={"icon-check " + className} src="icon-check.svg" alt="Check" width={24} height={24} {...props} />;
};