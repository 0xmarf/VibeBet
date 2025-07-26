"use client"

import { useState, lazy, Suspense } from "react"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { TokenButton } from "@/components/TokenButton"

// Lazy load the chart component
const ChartSection = lazy(() => import("./ChartSection"))

export default function OptimizedBentoCard() {
  const [selectedToggle, setSelectedToggle] = useState("buy")

  return (
    <Card className="p-4 sm:p-6 space-y-4 sm:space-y-6 rounded-xl border transition-all duration-300">
      {/* Metrics Section - Responsive layout */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* Price */}
        <div className="flex flex-col gap-1 sm:gap-2 flex-1">
          <div className="flex justify-between items-center w-full">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground">Price</p>
            <p className="text-xs sm:text-sm font-medium text-orange-500">+15.11%</p>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-foreground">$0.0029</p>
        </div>
        
        <Separator orientation="vertical" className="hidden sm:block h-[52px]" />
        <Separator orientation="horizontal" className="sm:hidden" />
        
        {/* Market Cap */}
        <div className="flex flex-col gap-1 sm:gap-2 flex-1">
          <div className="flex justify-between items-center w-full">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground">mCap</p>
            <p className="text-xs sm:text-sm font-medium text-orange-500">+25.66%</p>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-foreground">$29M</p>
        </div>
        
        <Separator orientation="vertical" className="hidden sm:block h-[52px]" />
        <Separator orientation="horizontal" className="sm:hidden" />
        
        {/* Holders */}
        <div className="flex flex-col gap-1 sm:gap-2 flex-1">
          <div className="flex justify-between items-center w-full">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground">Holder</p>
            <p className="text-xs sm:text-sm font-medium text-orange-500">+11.23%</p>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-foreground">9,841</p>
        </div>
      </div>
      
      {/* Chart Section - Lazy loaded */}
      <Suspense fallback={
        <div className="h-[200px] sm:h-[280px] bg-muted animate-pulse rounded-md" />
      }>
        <ChartSection />
      </Suspense>
      
      {/* Swap Widget */}
      <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4 px-0 sm:px-2 pb-2 sm:pb-4">
        {/* Buy/Sell Toggle */}
        <ToggleGroup type="single" value={selectedToggle} onValueChange={(value) => value && setSelectedToggle(value)} className="w-full">
          <ToggleGroupItem value="buy" className="flex-1 data-[state=on]:bg-accent data-[state=on]:text-foreground text-sm sm:text-base">Buy</ToggleGroupItem>
          <ToggleGroupItem value="sell" className="flex-1 text-sm sm:text-base">Sell</ToggleGroupItem>
        </ToggleGroup>
        
        {/* Input Fields */}
        <div className="space-y-2">
          {/* First Token Input */}
          <div className="p-3 sm:p-4 rounded-md bg-background border">
            <div className="flex justify-between items-center">
              <p className="text-base sm:text-lg font-semibold text-foreground">21,698</p>
              <TokenButton 
                tokenSymbol="PVE"
                iconSrc="/USDC.png"
                iconAlt="USDC"
                variant="default"
              />
            </div>
            <div className="flex justify-between items-center mt-1 sm:mt-1.5">
              <p className="text-xs text-muted-foreground">$21,684</p>
              <p className="text-xs text-muted-foreground">200,986</p>
            </div>
          </div>
          
          {/* Percentage Badges */}
          <div className="flex justify-between px-2 sm:px-4 gap-2">
            <Badge variant="secondary" className="text-xs sm:text-sm text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer flex-1">10%</Badge>
            <Badge variant="secondary" className="text-xs sm:text-sm text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer flex-1">25%</Badge>
            <Badge variant="secondary" className="text-xs sm:text-sm text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer flex-1">50%</Badge>
            <Badge variant="secondary" className="text-xs sm:text-sm text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer flex-1">100%</Badge>
          </div>
          
          {/* Second Token Input */}
          <div className="p-3 sm:p-4 rounded-md bg-background border">
            <div className="flex justify-between items-center">
              <p className="text-base sm:text-lg font-semibold text-foreground">21,698</p>
              <TokenButton 
                tokenSymbol="USDC"
                iconSrc="/USDC.png"
                iconAlt="USDC"
                variant="default"
              />
            </div>
            <div className="flex justify-between items-center mt-1 sm:mt-1.5">
              <p className="text-xs text-muted-foreground">$21,684</p>
              <p className="text-xs text-muted-foreground">200,986</p>
            </div>
          </div>
        </div>
        
        <Separator />
        
        {/* Place Order Button */}
        <Button className="w-full hover:shadow-lg transition-shadow duration-200 text-sm sm:text-base">Place Order</Button>
      </div>
    </Card>
  )
}