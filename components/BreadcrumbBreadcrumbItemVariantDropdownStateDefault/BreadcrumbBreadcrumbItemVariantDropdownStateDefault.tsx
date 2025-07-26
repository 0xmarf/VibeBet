import React from "react";
import "./BreadcrumbBreadcrumbItemVariantDropdownStateDefault.css";
import { IconChevronDown } from "../IconChevronDown/IconChevronDown";

interface BreadcrumbBreadcrumbItemVariantDropdownStateDefaultProps {
  breadcrumbText?: string;
  variant?: string;
  state?: string;
  className?: string;
}

export const BreadcrumbBreadcrumbItemVariantDropdownStateDefault: React.FC<BreadcrumbBreadcrumbItemVariantDropdownStateDefaultProps> = ({
  breadcrumbText = "Breadcrumb",
  variant = "dropdown",
  state = "default",
  className = "",
  ...props
}) => {
  const variantsClassName = "variant-" + variant + " state-" + state;

  return (
    <div
      className={
        "breadcrumb-breadcrumb-item-variant-dropdown-state-default " +
        className +
        " " +
        variantsClassName
      }
      {...props}
    >
      <div className="dropdown-menu-text">{breadcrumbText} </div>
      <IconChevronDown className="icon-chevron-down-instance" />
    </div>
  );
};