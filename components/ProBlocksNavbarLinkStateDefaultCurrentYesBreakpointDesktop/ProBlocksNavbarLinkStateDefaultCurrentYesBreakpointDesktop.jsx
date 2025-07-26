import "./ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktop.css";
import { IconChevronDown2 } from "../IconChevronDown2/IconChevronDown2.jsx";
import { IconCheck } from "../IconCheck/IconCheck.jsx";
import { IconArrowRight } from "../IconArrowRight/IconArrowRight.jsx";
import { BadgeVariantDefaultStateDefault } from "../BadgeVariantDefaultStateDefault/BadgeVariantDefaultStateDefault.jsx";
import { IconChevronDown } from "../IconChevronDown/IconChevronDown.jsx";

export const ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktop = ({
  badge = false,
  dropdown = false,
  text = "Dashboard",
  dropdownIcon = <IconChevronDown2 className="icon-chevron-down-instance" />,
  state = "default",
  current = "no",
  breakpoint = "desktop",
  className,
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
    >
      <div className="dashboard">{text} </div>
      {badge && (
        <>
          <BadgeVariantDefaultStateDefault
            badgeText="2"
            leftIcon={<IconCheck className="icon-check-instance" />}
            rightIcon={<IconArrowRight className="icon-arrow-right-instance" />}
            className="badge-instance"
          ></BadgeVariantDefaultStateDefault>
        </>
      )}
      {dropdown && <>{dropdownIcon}</>}
    </div>
  );
};
