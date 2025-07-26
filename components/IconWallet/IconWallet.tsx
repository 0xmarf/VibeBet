import React from "react";
import Image from "next/image";
import "./IconWallet.css";

interface IconWalletProps {
  className?: string;
}

export const IconWallet: React.FC<IconWalletProps> = ({ className = "", ...props }) => {
  return <Image className={"icon-wallet " + className} src="icon-wallet.svg" alt="Wallet" width={24} height={24} {...props} />;
};