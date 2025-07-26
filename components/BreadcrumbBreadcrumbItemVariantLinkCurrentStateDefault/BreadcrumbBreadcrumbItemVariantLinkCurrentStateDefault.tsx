import React from "react";
import "./BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefault.css";

interface BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefaultProps {
  breadcrumbText?: string;
  variant?: string;
  state?: string;
  className?: string;
}

export const BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefault: React.FC<BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefaultProps> = ({
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
        "breadcrumb-breadcrumb-item-variant-link-current-state-default " +
        className +
        " " +
        variantsClassName
      }
      {...props}
    >
      <div className="breadcrumb">{breadcrumbText} </div>
    </div>
  );
};