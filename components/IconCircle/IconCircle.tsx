import React from "react";
import Image from "next/image";
import "./IconCircle.css";

interface IconCircleProps {
  className?: string;
}

export const IconCircle: React.FC<IconCircleProps> = ({ className = "", ...props }) => {
  return <Image className={"icon-circle " + className} src="icon-circle.svg" alt="Circle" width={24} height={24} {...props} />;
};