"use client"

import React from "react"

export default function ChartHeader() {
  return (
    <div className="w-full max-w-[1280px] h-12 flex justify-between items-center px-6 py-2">
      {/* Left Section - Topic label */}
      <div className="w-52 flex justify-start">
        <span 
          className="text-sm font-medium"
          style={{ 
            color: 'var(--base-muted-foreground, #737373)', 
            fontFamily: 'Geist, sans-serif' 
          }}
        >
          Topic
        </span>
      </div>

      {/* Middle Section - Time intervals */}
      <div className="w-[816px] flex justify-between items-center px-5">
        <span 
          className="text-sm font-medium"
          style={{ 
            color: 'var(--base-muted-foreground, #737373)', 
            fontFamily: 'Geist, sans-serif' 
          }}
        >
          T
        </span>
        <span 
          className="text-sm font-medium"
          style={{ 
            color: 'var(--base-muted-foreground, #737373)', 
            fontFamily: 'Geist, sans-serif' 
          }}
        >
          T+6HRS
        </span>
        <span 
          className="text-sm font-medium"
          style={{ 
            color: 'var(--base-muted-foreground, #737373)', 
            fontFamily: 'Geist, sans-serif' 
          }}
        >
          T+12HRS
        </span>
        <span 
          className="text-sm font-medium"
          style={{ 
            color: 'var(--base-muted-foreground, #737373)', 
            fontFamily: 'Geist, sans-serif' 
          }}
        >
          T+18HRS
        </span>
        <span 
          className="text-sm font-medium"
          style={{ 
            color: 'var(--base-muted-foreground, #737373)', 
            fontFamily: 'Geist, sans-serif' 
          }}
        >
          T+24HRS
        </span>
      </div>

      {/* Right Section - Trade label */}
      <div className="w-52 flex justify-end">
        <span 
          className="text-sm font-medium"
          style={{ 
            color: 'var(--base-muted-foreground, #737373)', 
            fontFamily: 'Geist, sans-serif' 
          }}
        >
          Trade
        </span>
      </div>
    </div>
  )
}