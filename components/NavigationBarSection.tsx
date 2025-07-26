import React from "react";
import Image from "next/image";
import { Logomark } from "./Logomark/Logomark";
import { IconSearch } from "./IconSearch/IconSearch";
import { IconWallet } from "./IconWallet/IconWallet";
import { ButtonVariantGhostStateDefaultSizeIcon } from "./ButtonVariantGhostStateDefaultSizeIcon/ButtonVariantGhostStateDefaultSizeIcon";
import { ButtonVariantDefaultStateDefaultSizeDefault } from "./ButtonVariantDefaultStateDefaultSizeDefault/ButtonVariantDefaultStateDefaultSizeDefault";
import { IconCircle } from "./IconCircle/IconCircle";

export const NavigationBarSection = (): React.JSX.Element => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-8">
            <Logomark className="w-8 h-8" />
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-gray-900">World</span>
              <span className="text-sm text-gray-500">My Holdings</span>
              <span className="text-sm text-gray-500">Mint IFT</span>
            </div>
          </div>

          {/* Right side - Search, Avatar, Connect Wallet */}
          <div className="flex items-center gap-4">
            <ButtonVariantGhostStateDefaultSizeIcon
              leftIcon={<IconSearch className="w-4 h-4" />}
              rightIcon={<IconCircle className="w-4 h-4" />}
              variant="ghost"
              size="icon"
              className="p-2"
            />
            <Image
              src="/base.png"
              alt="Base Network"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <ButtonVariantDefaultStateDefaultSizeDefault
              buttonText="Connect Wallet"
              showLeftIcon={true}
              leftIcon={<IconWallet className="w-4 h-4" />}
              rightIcon={<IconCircle className="w-4 h-4" />}
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};