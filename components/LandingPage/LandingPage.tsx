import React from "react";
import { cn } from "@/lib/utils";
import ChartHeader from "../ChartHeader";
import ChartRow from "../ChartRow";
import "./LandingPage.css";
import { Logomark } from "../Logomark/Logomark";
import { IconChevronDown } from "../IconChevronDown/IconChevronDown";
import { ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktop } from "../ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktop/ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktop";
import { IconSearch } from "../IconSearch/IconSearch";
import { IconCircle } from "../IconCircle/IconCircle";
import { ButtonVariantGhostStateDefaultSizeIcon } from "../ButtonVariantGhostStateDefaultSizeIcon/ButtonVariantGhostStateDefaultSizeIcon";
import { AvatarTypeImageSize12 } from "../AvatarTypeImageSize12/AvatarTypeImageSize12";
import { IconWallet } from "../IconWallet/IconWallet";
import { ButtonVariantDefaultStateDefaultSizeDefault } from "../ButtonVariantDefaultStateDefaultSizeDefault/ButtonVariantDefaultStateDefaultSizeDefault";
import { ProBlocksPageHeader2BreakpointDesktop } from "../ProBlocksPageHeader2BreakpointDesktop/ProBlocksPageHeader2BreakpointDesktop";

interface LandingPageProps {
  className?: string;
}

// Removed interfaces since they're now in chartUtils.ts

export const LandingPage: React.FC<LandingPageProps> = ({ className = "" }) => {
  return (
    <div className={cn("landing-page", className)}>
      <div className="pro-blocks-app-shell-1">
        <div className="pro-blocks-navbar-1">
          <div className="container">
            <div className="flex">
              <Logomark className="logomark-instance" />
              <div className="nav">
                <ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktop
                  dropdownIcon={
                    <IconChevronDown className="icon-chevron-down-instance" />
                  }
                  text="World"
                  current="yes"
                  className="pro-blocks-navbar-link-instance"
                />
              </div>
            </div>
            <div className="flex2">
              <ButtonVariantGhostStateDefaultSizeIcon
                leftIcon={<IconSearch className="icon-search-instance" />}
                rightIcon={<IconCircle className="icon-circle-instance" />}
                variant="ghost"
                size="icon"
                className="button-instance"
              />
              <AvatarTypeImageSize12 className="avatar-instance" />
              <ButtonVariantDefaultStateDefaultSizeDefault
                buttonText="Connect Wallet"
                showLeftIcon={true}
                leftIcon={<IconWallet className="icon-wallet-instance" />}
                rightIcon={<IconCircle className="icon-circle-instance2" />}
                className="button-instance"
              />
            </div>
          </div>
        </div>
        <ProBlocksPageHeader2BreakpointDesktop
          titleText={
            <>
              <span className="text-orange-500">Price</span>
              <span> meets </span>
              <span className="text-sky-400">Popularity</span>
              <span>. Trade what&apos;s trending on X.</span>
            </>
          }
          descriptionText="This page tracks a trending topic's tweet count and its corresponding IFT price from the moment it appears in X's U.S. Top 50. Data updates hourly and topics remain on the chart for up to 24 hours."
          button1={false}
          button2={false}
          button3={false}
          button4={false}
          className="pro-blocks-page-header-2-instance"
        />
        <div className="div">
          <div className="container2">
            <div className="flex-vertical">
              {/* Chart Header */}
              <ChartHeader />
              
              {/* Chart Rows */}
              <div className="flex flex-col gap-4">
                <ChartRow topicKey="epstein" />
                <ChartRow topicKey="bondi" />
                <ChartRow topicKey="americaparty" />
                <ChartRow topicKey="superman" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="flex3">
          <div className="copyright-2025-element-labs">
            Copyright 2025 © Element Labs
          </div>
          <div className="flex4">
            <div className="privacy-policy">Privacy Policy </div>
            <div className="terms-of-service">Terms of Service </div>
          </div>
        </div>
      </div>
    </div>
  );
};