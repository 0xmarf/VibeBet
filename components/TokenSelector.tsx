"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";

export interface Token {
  symbol: string;
  name: string;
  icon: string;
  balance: string;
  price: number;
  address?: string;
}

interface TokenSelectorProps {
  selectedToken: Token;
  onSelectToken: (token: Token) => void;
  tokens: Token[];
  label?: string;
}

export function TokenSelector({
  selectedToken,
  onSelectToken,
  tokens,
  label = "Select token",
}: TokenSelectorProps) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTokens = tokens.filter(
    (token) =>
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectToken = (token: Token) => {
    onSelectToken(token);
    setOpen(false);
    setSearchQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 hover:bg-secondary"
        >
          {selectedToken.icon.startsWith("/") ? (
            <Image
              src={selectedToken.icon}
              alt={selectedToken.symbol}
              width={24}
              height={24}
              className="rounded-full"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-primary" />
          )}
          <span className="font-medium">{selectedToken.symbol}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name or symbol"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="max-h-[300px] overflow-y-auto space-y-2">
            {filteredTokens.map((token) => (
              <button
                key={token.symbol}
                onClick={() => handleSelectToken(token)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-3">
                  {token.icon.startsWith("/") ? (
                    <Image
                      src={token.icon}
                      alt={token.symbol}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary" />
                  )}
                  <div className="text-left">
                    <div className="font-medium">{token.symbol}</div>
                    <div className="text-sm text-muted-foreground">
                      {token.name}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{token.balance}</div>
                  <div className="text-sm text-muted-foreground">
                    ${(parseFloat(token.balance.replace(/,/g, "")) * token.price).toFixed(2)}
                  </div>
                </div>
              </button>
            ))}
            {filteredTokens.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No tokens found
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}