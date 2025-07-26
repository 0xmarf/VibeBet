import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import "./Logomark.css";

interface LogomarkProps {
  className?: string;
}

export const Logomark: React.FC<LogomarkProps> = ({ className = "" }) => {
  return (
    <div className={cn("logomark", className)}>
      <Image 
        className="content" 
        src="/content0.svg" 
        alt="VibeBet logo"
        width={40}
        height={40}
      />
    </div>
  );
};