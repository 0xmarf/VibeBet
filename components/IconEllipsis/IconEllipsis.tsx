import React from "react";
import Image from "next/image";
import "./IconEllipsis.css";

interface IconEllipsisProps {
  className?: string;
}

export const IconEllipsis: React.FC<IconEllipsisProps> = ({ className = "", ...props }) => {
  return (
    <Image className={"icon-ellipsis " + className} src="icon-ellipsis.svg" alt="Ellipsis" width={24} height={24} {...props} />
  );
};