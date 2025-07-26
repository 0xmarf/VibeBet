import React from "react";
import "./ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktop.css";
import { IconChevronDown2 } from "../IconChevronDown2/IconChevronDown2";
import { IconCheck } from "../IconCheck/IconCheck";
import { IconArrowRight } from "../IconArrowRight/IconArrowRight";
import { BadgeVariantDefaultStateDefault } from "../BadgeVariantDefaultStateDefault/BadgeVariantDefaultStateDefault";

interface ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktopProps {
  badge?: boolean;
  dropdown?: boolean;
  text?: string;
  dropdownIcon?: React.ReactNode;
  state?: string;
  current?: string;
  breakpoint?: string;
  className?: string;
}

export const ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktop: React.FC<ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktopProps> = ({
  badge = false,
  dropdown = false,
  text = "Dashboard",
  dropdownIcon = <IconChevronDown2 className="icon-chevron-down-instance" />,
  state = "default",
  current = "no",
  breakpoint = "desktop",
  className = "",
  ...props
}) => {
  const variantsClassName =
    "state-" + state + " current-" + current + " breakpoint-" + breakpoint;

  return (
    <div
      className={
        "pro-blocks-navbar-link-state-default-current-yes-breakpoint-desktop " +
        className +
        " " +
        variantsClassName
      }
      {...props}
    >
      <div className="dashboard">{text} </div>
      {badge && (
        <>
          <BadgeVariantDefaultStateDefault
            badgeText="2"
            leftIcon={<IconCheck className="icon-check-instance" />}
            rightIcon={<IconArrowRight className="icon-arrow-right-instance" />}
            className="badge-instance"
          />
        </>
      )}
      {dropdown && <>{dropdownIcon}</>}
    </div>
  );
};