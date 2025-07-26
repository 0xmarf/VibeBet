"use client"

import Image from "next/image"
import { Badge, type BadgeProps } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TokenButtonProps {
  tokenSymbol: string
  iconSrc: string
  iconAlt?: string
  className?: string
  variant?: BadgeProps["variant"]
}

export function TokenButton({ 
  tokenSymbol, 
  iconSrc, 
  iconAlt, 
  className,
  variant = "token"
}: TokenButtonProps) {
  return (
    <Badge 
      variant={variant}
      className={cn(
        "flex items-center justify-center gap-1",
        className
      )}
    >
      <Image 
        src={iconSrc}
        alt={iconAlt || tokenSymbol}
        width={16}
        height={16}
        className="h-4 w-4"
        loading="lazy"
      />
      <span className="text-xs font-semibold">{tokenSymbol}</span>
    </Badge>
  )
}