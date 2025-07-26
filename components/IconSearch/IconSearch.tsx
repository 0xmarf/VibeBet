import React from "react";
import Image from "next/image";
import "./IconSearch.css";

interface IconSearchProps {
  className?: string;
}

export const IconSearch: React.FC<IconSearchProps> = ({ className = "", ...props }) => {
  return <Image className={"icon-search " + className} src="icon-search.svg" alt="Search" width={24} height={24} {...props} />;
};