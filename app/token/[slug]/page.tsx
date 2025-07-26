"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Wallet } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TokenButton } from "@/components/TokenButton";

export default function TokenPage() {
  const [isLowLiquidity] = React.useState(false);
  const [percentage, setPercentage] = React.useState([0]);
  const [needsApproval, setNeedsApproval] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState("buy");
  const [buyAmount, setBuyAmount] = React.useState("");
  const [sellAmount, setSellAmount] = React.useState("");
  const [isHydrated, setIsHydrated] = React.useState(false);

  // Ensure component is hydrated before rendering interactive elements
  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const liquidityValue = isLowLiquidity ? "$24,985" : "$114,929";
  const liquidityClass = isLowLiquidity ? "bg-yellow-400" : "";

  // Safe parsing function
  const parseAmount = (amount: string): number => {
    const cleanAmount = amount.replace(/,/g, '');
    const parsed = parseFloat(cleanAmount);
    return isNaN(parsed) ? 0 : parsed;
  };

  // Show loading state until hydration is complete
  if (!isHydrated) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center space-x-6">
            <Image
              src="/ift-logo.png"
              alt="IFT Logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            <nav className="flex space-x-4">
              <Link href="/" className="text-sm font-medium text-primary hover:underline">
                World
              </Link>
              <Link href="/holdings" className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline">
                My Holdings
              </Link>
              <Link href="/mint" className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline">
                Mint IFT
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/base.png"
              alt="Base Network"
              width={24}
              height={24}
              className="rounded"
            />
            <Button className="bg-orange-500 text-white hover:bg-orange-600 gap-2" size="sm">
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold">epstein.ift.eth</h1>
              <p className="text-sm text-muted-foreground mt-1">
                This page displays all the details regarding this IFT.
              </p>
            </div>
            <p className="text-3xl font-semibold">$0.01596</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Info Cards */}
            <div className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Card className="hover:bg-[#FBBF24] transition-all duration-300">
                  <CardContent className="p-4">
                    <Label className="text-sm text-muted-foreground">Market Cap</Label>
                    <p className="text-2xl font-bold mt-1">$177m</p>
                  </CardContent>
                </Card>
                <Card className="hover:bg-[#FBBF24] transition-all duration-300">
                  <CardContent className="p-4">
                    <Label className="text-sm text-muted-foreground">Live since</Label>
                    <p className="text-2xl font-bold mt-1">2025-3-21</p>
                  </CardContent>
                </Card>
                <Card className="hover:bg-[#FBBF24] transition-all duration-300">
                  <CardContent className="p-4">
                    <Label className="text-sm text-muted-foreground">Token Address</Label>
                    <p className="text-2xl font-bold mt-1">0x83...2913</p>
                  </CardContent>
                </Card>
                <Card className="hover:bg-[#FBBF24] transition-all duration-300">
                  <CardContent className="p-4">
                    <Label className="text-sm text-muted-foreground">Creator Address</Label>
                    <p className="text-2xl font-bold mt-1">0x83...2913</p>
                  </CardContent>
                </Card>
                <Card className="hover:bg-[#FBBF24] transition-all duration-300">
                  <CardContent className="p-4">
                    <Label className="text-sm text-muted-foreground">Pool Address</Label>
                    <p className="text-2xl font-bold mt-1">0x83...2913</p>
                  </CardContent>
                </Card>
                <Card className={`hover:bg-[#FBBF24] transition-all duration-300 ${liquidityClass}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1">
                      <Label className="text-sm text-muted-foreground">Liquidity</Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="text-sm text-muted-foreground cursor-help hover:text-foreground transition-colors">ⓘ</span>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-md bg-orange-500 text-white border-orange-500">
                            <div className="p-2">
                              <h4 className="font-semibold mb-2">Liquidity threshold for AMM migration</h4>
                              <p className="text-sm">
                                IFTs are initially minted and burned algorithmically based on demand; as more users buy, the price increases along the curve. When the liquidity bonding curve passes LIQUIDITY_REQUIREMENT, liquidity automatically migrates to an AMM for free-market access.
                              </p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <p className="text-2xl font-bold mt-1">{liquidityValue}</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Trading Card Placeholder */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="animate-pulse">
                    <div className="h-10 bg-muted rounded mb-6"></div>
                    <div className="space-y-4">
                      <div className="h-20 bg-muted rounded"></div>
                      <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-8 bg-muted rounded"></div>
                        ))}
                      </div>
                      <div className="h-20 bg-muted rounded"></div>
                      <div className="h-12 bg-muted rounded"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 border-t">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Copyright 2025 © Element Labs</span>
            <div className="flex gap-6">
              <svg className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.10-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.67.85 3.14 2.14 4.01-.79-.02-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.92 2.4 3.31 4.51 3.35-1.65 1.29-3.73 2.06-5.99 2.06-.39 0-.77-.02-1.15-.07 2.14 1.37 4.68 2.17 7.4 2.17 8.88 0 13.74-7.36 13.74-13.74 0-.21 0-.42-.01-.62.94-.68 1.76-1.53 2.41-2.5z"/>
              </svg>
              <svg className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-6">
          <Image
            src="/ift-logo.png"
            alt="IFT Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <nav className="flex space-x-4">
            <Link href="/" className="text-sm font-medium text-primary hover:underline">
              World
            </Link>
            <Link href="/holdings" className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline">
              My Holdings
            </Link>
            <Link href="/mint" className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline">
              Mint IFT
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/base.png"
            alt="Base Network"
            width={24}
            height={24}
            className="rounded"
          />
          <Button className="bg-orange-500 text-white hover:bg-orange-600 gap-2" size="sm">
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold">epstein.ift.eth</h1>
            <p className="text-sm text-muted-foreground mt-1">
              This page displays all the details regarding this IFT.
            </p>
          </div>
          <p className="text-3xl font-semibold">$0.01596</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="hover:bg-[#FBBF24] transition-all duration-300">
                <CardContent className="p-4">
                  <Label className="text-sm text-muted-foreground">Market Cap</Label>
                  <p className="text-2xl font-bold mt-1">$177m</p>
                </CardContent>
              </Card>
              <Card className="hover:bg-[#FBBF24] transition-all duration-300">
                <CardContent className="p-4">
                  <Label className="text-sm text-muted-foreground">Live since</Label>
                  <p className="text-2xl font-bold mt-1">2025-3-21</p>
                </CardContent>
              </Card>
              <Card className="hover:bg-[#FBBF24] transition-all duration-300">
                <CardContent className="p-4">
                  <Label className="text-sm text-muted-foreground">Token Address</Label>
                  <p className="text-2xl font-bold mt-1">0x83...2913</p>
                </CardContent>
              </Card>
              <Card className="hover:bg-[#FBBF24] transition-all duration-300">
                <CardContent className="p-4">
                  <Label className="text-sm text-muted-foreground">Creator Address</Label>
                  <p className="text-2xl font-bold mt-1">0x83...2913</p>
                </CardContent>
              </Card>
              <Card className="hover:bg-[#FBBF24] transition-all duration-300">
                <CardContent className="p-4">
                  <Label className="text-sm text-muted-foreground">Pool Address</Label>
                  <p className="text-2xl font-bold mt-1">0x83...2913</p>
                </CardContent>
              </Card>
              <Card className={`hover:bg-[#FBBF24] transition-all duration-300 ${liquidityClass}`}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-1">
                    <Label className="text-sm text-muted-foreground">Liquidity</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-sm text-muted-foreground cursor-help hover:text-foreground transition-colors">ⓘ</span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-md bg-orange-500 text-white border-orange-500">
                          <div className="p-2">
                            <h4 className="font-semibold mb-2">Liquidity threshold for AMM migration</h4>
                            <p className="text-sm">
                              IFTs are initially minted and burned algorithmically based on demand; as more users buy, the price increases along the curve. When the liquidity bonding curve passes LIQUIDITY_REQUIREMENT, liquidity automatically migrates to an AMM for free-market access.
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <p className="text-2xl font-bold mt-1">{liquidityValue}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Trading Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="buy">Buy</TabsTrigger>
                    <TabsTrigger value="sell">Sell</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="buy" className="mt-6 space-y-4">
                    {/* From Input */}
                    <Card className="border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <Input
                            type="text"
                            value={buyAmount}
                            onChange={(e) => setBuyAmount(e.target.value)}
                            placeholder="0.00"
                            className="border-0 text-2xl font-semibold focus:outline-none p-0 bg-transparent"
                            suppressHydrationWarning
                          />
                          <TokenButton 
                            tokenSymbol="USDC"
                            iconSrc="/USDC.png"
                            iconAlt="USDC"
                          />
                        </div>
                        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                          <span>${buyAmount ? (parseAmount(buyAmount) * 1.0).toFixed(2) : '0.00'}</span>
                          <span>Balance: 200,986</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Percentage Buttons */}
                    <div className="grid grid-cols-4 gap-2">
                      {[10, 25, 50, 100].map((pct) => (
                        <Button
                          key={pct}
                          variant="outline"
                          size="sm"
                          onClick={() => setPercentage([pct])}
                          className={percentage[0] === pct ? "border-orange-500 text-orange-500" : ""}
                        >
                          {pct}%
                        </Button>
                      ))}
                    </div>

                    {/* To Output */}
                    <Card className="border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-semibold">{buyAmount ? (parseAmount(buyAmount) / 0.01596).toFixed(0) : '0'}</span>
                          <TokenButton 
                            tokenSymbol="epstein"
                            iconSrc="/ift-logo.png"
                            iconAlt="epstein"
                          />
                        </div>
                        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                          <span>${buyAmount ? (parseAmount(buyAmount) * 1.0).toFixed(2) : '0.00'}</span>
                          <span>Balance: 200,986</span>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="border-t pt-4" />

                    {/* Action Button */}
                    <Button
                      className="w-full bg-orange-500 text-white hover:bg-orange-600"
                      size="lg"
                      onClick={() => setNeedsApproval(false)}
                    >
                      {needsApproval ? "Approve Token" : "Place Order"}
                    </Button>
                  </TabsContent>

                  <TabsContent value="sell" className="mt-6 space-y-4">
                    {/* From Input */}
                    <Card className="border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <Input
                            type="text"
                            value={sellAmount}
                            onChange={(e) => setSellAmount(e.target.value)}
                            placeholder="0.00"
                            className="border-0 text-2xl font-semibold focus:outline-none p-0 bg-transparent"
                            suppressHydrationWarning
                          />
                          <TokenButton 
                            tokenSymbol="epstein"
                            iconSrc="/ift-logo.png"
                            iconAlt="epstein"
                          />
                        </div>
                        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                          <span>${sellAmount ? (parseAmount(sellAmount) * 0.01596).toFixed(2) : '0.00'}</span>
                          <span>Balance: 200,986</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Percentage Buttons */}
                    <div className="grid grid-cols-4 gap-2">
                      {[10, 25, 50, 100].map((pct) => (
                        <Button
                          key={pct}
                          variant="outline"
                          size="sm"
                          onClick={() => setPercentage([pct])}
                          className={percentage[0] === pct ? "border-orange-500 text-orange-500" : ""}
                        >
                          {pct}%
                        </Button>
                      ))}
                    </div>

                    {/* To Output */}
                    <Card className="border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-semibold">{sellAmount ? (parseAmount(sellAmount) * 0.01596).toFixed(2) : '0.00'}</span>
                          <TokenButton 
                            tokenSymbol="USDC"
                            iconSrc="/USDC.png"
                            iconAlt="USDC"
                          />
                        </div>
                        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                          <span>${sellAmount ? (parseAmount(sellAmount) * 0.01596).toFixed(2) : '0.00'}</span>
                          <span>Balance: 200,986</span>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="border-t pt-4" />

                    {/* Action Button */}
                    <Button
                      className="w-full bg-orange-500 text-white hover:bg-orange-600"
                      size="lg"
                    >
                      Place Order
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Copyright 2025 © Element Labs</span>
          <div className="flex gap-6">
            <svg className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.10-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.67.85 3.14 2.14 4.01-.79-.02-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.92 2.4 3.31 4.51 3.35-1.65 1.29-3.73 2.06-5.99 2.06-.39 0-.77-.02-1.15-.07 2.14 1.37 4.68 2.17 7.4 2.17 8.88 0 13.74-7.36 13.74-13.74 0-.21 0-.42-.01-.62.94-.68 1.76-1.53 2.41-2.5z"/>
            </svg>
            <svg className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}