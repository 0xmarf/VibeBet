"use client"

import React from "react"
import Image from "next/image"

export default function Logo() {
  return (
    <div className="relative w-9 h-9">
      <Image 
        src="/logo.png" 
        alt="VibeBet Logo" 
        width={36} 
        height={36}
        className="object-contain"
      />
    </div>
  )
}