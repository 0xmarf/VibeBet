import React from "react";
import "./BreadcrumbBreadcrumbItemVariantEllipsisStateDefault.css";
import { IconEllipsis } from "../IconEllipsis/IconEllipsis";

interface BreadcrumbBreadcrumbItemVariantEllipsisStateDefaultProps {
  variant?: string;
  state?: string;
  className?: string;
}

export const BreadcrumbBreadcrumbItemVariantEllipsisStateDefault: React.FC<BreadcrumbBreadcrumbItemVariantEllipsisStateDefaultProps> = ({
  variant = "dropdown",
  state = "default",
  className = "",
}) => {
  const variantsClassName = "variant-" + variant + " state-" + state;

  return (
    <div
      className={
        "breadcrumb-breadcrumb-item-variant-ellipsis-state-default " +
        className +
        " " +
        variantsClassName
      }
    >
      <IconEllipsis className="icon-ellipsis-instance" />
    </div>
  );
};