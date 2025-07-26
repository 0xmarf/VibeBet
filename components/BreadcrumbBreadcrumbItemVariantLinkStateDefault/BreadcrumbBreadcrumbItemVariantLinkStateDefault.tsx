import React from "react";
import "./BreadcrumbBreadcrumbItemVariantLinkStateDefault.css";

interface BreadcrumbBreadcrumbItemVariantLinkStateDefaultProps {
  breadcrumbText?: string;
  variant?: string;
  state?: string;
  className?: string;
}

export const BreadcrumbBreadcrumbItemVariantLinkStateDefault: React.FC<BreadcrumbBreadcrumbItemVariantLinkStateDefaultProps> = ({
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
        "breadcrumb-breadcrumb-item-variant-link-state-default " +
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