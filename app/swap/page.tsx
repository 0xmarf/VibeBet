"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Wallet } from "lucide-react";
import Image from "next/image";

type Token = {
  symbol: string;
  name: string;
  icon: string;
  balance: string;
  price: number;
};

const tokens: Token[] = [
  {
    symbol: "USDC",
    name: "USD Coin",
    icon: "/USDC.png",
    balance: "200,986",
    price: 1.0,
  },
  {
    symbol: "Epstein",
    name: "Epstein Token",
    icon: "/vibebetlogo.png",
    balance: "200,986",
    price: 0.01596,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: "/ethereum.svg",
    balance: "0.5432",
    price: 2345.67,
  },
  {
    symbol: "VIBE",
    name: "VibeBet Token",
    icon: "/vibebetlogo.png",
    balance: "10,000.00",
    price: 0.15,
  },
  {
    symbol: "WBTC",
    name: "Wrapped Bitcoin",
    icon: "/wbtc.svg",
    balance: "0.0123",
    price: 65432.10,
  },
];

export default function SwapPage() {
  const [activeTab, setActiveTab] = useState("swap");
  const [fromToken] = useState<Token>(tokens[0]); // USDC
  const [toToken] = useState<Token>(tokens[1]); // Epstein
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [buySellTab, setBuySellTab] = useState("buy");

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    // Calculate to amount based on exchange rate
    if (value) {
      const calculatedAmount = (parseFloat(value) * fromToken.price) / toToken.price;
      setToAmount(calculatedAmount.toFixed(6));
    } else {
      setToAmount("");
    }
  };

  const handlePercentageClick = (percentage: number) => {
    const balance = parseFloat(fromToken.balance.replace(/,/g, ""));
    const amount = (balance * percentage / 100).toString();
    handleFromAmountChange(amount);
  };


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold"><span className="text-sky-400">VibeBet</span> <span className="text-orange-500">Swap</span></h1>
            <div className="flex items-center gap-2">
              <Image
                src="/base.png"
                alt="Base Network"
                width={24}
                height={24}
                className="rounded"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white gap-2" size="sm">
                <Wallet className="w-4 h-4" />
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto">
          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="swap">Swap</TabsTrigger>
                <TabsTrigger value="liquidity">Liquidity</TabsTrigger>
              </TabsList>

              <TabsContent value="swap" className="mt-6">
                {/* Buy/Sell Toggle */}
                <div className="mb-6">
                  <div className="flex bg-muted rounded-lg p-1">
                    <button
                      onClick={() => setBuySellTab("buy")}
                      className={`flex-1 py-2 px-4 rounded-md text-center font-medium transition-colors ${
                        buySellTab === "buy" 
                          ? "bg-background text-foreground shadow-sm" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Buy
                    </button>
                    <button
                      onClick={() => setBuySellTab("sell")}
                      className={`flex-1 py-2 px-4 rounded-md text-center font-medium transition-colors ${
                        buySellTab === "sell" 
                          ? "bg-background text-foreground shadow-sm" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Sell
                    </button>
                  </div>
                </div>

                {/* From Token */}
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <Input
                          type="number"
                          placeholder="0.00"
                          value={fromAmount}
                          onChange={(e) => handleFromAmountChange(e.target.value)}
                          className="border-none text-3xl font-medium focus:outline-none p-0 h-auto"
                          suppressHydrationWarning={true}
                        />
                        <span className="text-sm text-muted-foreground mt-1">
                          ${fromAmount ? (parseFloat(fromAmount) * fromToken.price).toFixed(2) : "0.00"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full">
                        <div className="flex items-center gap-2">
                          <Image
                            src={fromToken.icon}
                            alt={fromToken.symbol}
                            width={16}
                            height={16}
                            className="rounded-full"
                          />
                          <span className="font-medium">{fromToken.symbol}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-2 text-sm text-muted-foreground">
                      <span>Balance: {fromToken.balance}</span>
                    </div>
                  </Card>

                  {/* Percentage Buttons */}
                  <div className="flex justify-between gap-2">
                    {[10, 25, 50, 100].map((percentage) => (
                      <Button
                        key={percentage}
                        variant="outline"
                        size="sm"
                        onClick={() => handlePercentageClick(percentage)}
                        className="flex-1"
                      >
                        {percentage}%
                      </Button>
                    ))}
                  </div>

                  {/* To Token */}
                  <Card className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <div className="text-3xl font-medium">
                          {toAmount || "0"}
                        </div>
                        <span className="text-sm text-muted-foreground mt-1">
                          ${toAmount ? (parseFloat(toAmount) * toToken.price).toFixed(2) : "0.00"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full">
                        <div className="flex items-center gap-2">
                          <Image
                            src={toToken.icon}
                            alt={toToken.symbol}
                            width={16}
                            height={16}
                            className="rounded-full"
                          />
                          <span className="font-medium">{toToken.symbol}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-2 text-sm text-muted-foreground">
                      <span>Balance: {toToken.balance}</span>
                    </div>
                  </Card>

                  {/* Swap Button */}
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" size="lg">
                    {buySellTab === "buy" ? "Place Order" : "Approve Token"}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="liquidity" className="mt-6">
                <div className="text-center py-12 text-muted-foreground">
                  Liquidity features coming soon
                </div>
              </TabsContent>

            </Tabs>
          </Card>

          {/* Info Section */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Info className="h-4 w-4" />
            <span>Powered by <span className="text-sky-400">VibeBet</span> Protocol</span>
          </div>
        </div>
      </main>
    </div>
  );
}