import React from "react";
import "./BreadcrumbSizeMd.css";
import { IconChevronRight2 } from "../IconChevronRight2/IconChevronRight2";
import { BreadcrumbBreadcrumbItemVariantLinkStateDefault } from "../BreadcrumbBreadcrumbItemVariantLinkStateDefault/BreadcrumbBreadcrumbItemVariantLinkStateDefault";
import { BreadcrumbBreadcrumbItemVariantEllipsisStateDefault } from "../BreadcrumbBreadcrumbItemVariantEllipsisStateDefault/BreadcrumbBreadcrumbItemVariantEllipsisStateDefault";
import { BreadcrumbBreadcrumbItemVariantDropdownStateDefault } from "../BreadcrumbBreadcrumbItemVariantDropdownStateDefault/BreadcrumbBreadcrumbItemVariantDropdownStateDefault";
import { BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefault } from "../BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefault/BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefault";

interface BreadcrumbSizeMdProps {
  separator?: React.ReactNode;
  breadcrumb2?: boolean;
  breadcrumb3?: boolean;
  breadcrumb4?: boolean;
  breadcrumb1?: boolean;
  breadcrumb5?: boolean;
  size?: string;
  component?: React.ReactNode;
  className?: string;
  breadcrumbBreadcrumbItembreadcrumbText?: string;
}

export const BreadcrumbSizeMd: React.FC<BreadcrumbSizeMdProps> = ({
  separator = <IconChevronRight2 className="icon-chevron-right-instance" />,
  breadcrumb2 = true,
  breadcrumb3 = true,
  breadcrumb4 = true,
  breadcrumb1 = true,
  breadcrumb5 = true,
  size = "md",
  component = (
    <BreadcrumbBreadcrumbItemVariantEllipsisStateDefault
      variant="ellipsis"
      state="default"
    />
  ),
  className = "",
  breadcrumbBreadcrumbItembreadcrumbText,
}) => {
  const variantsClassName = "size-" + size;

  return (
    <div
      className={"breadcrumb-size-md " + className + " " + variantsClassName}
    >
      {breadcrumb1 && (
        <>
          <BreadcrumbBreadcrumbItemVariantLinkStateDefault
            variant="link"
            className="breadcrumb-breadcrumb-item-instance"
            breadcrumbText={breadcrumbBreadcrumbItembreadcrumbText}
          />
        </>
      )}
      {breadcrumb1 && <>{separator}</>}
      {breadcrumb2 && <>{component}</>}
      {breadcrumb2 && <>{separator}</>}
      {breadcrumb3 && (
        <>
          <BreadcrumbBreadcrumbItemVariantDropdownStateDefault className="breadcrumb-breadcrumb-item-instance" />
        </>
      )}
      {breadcrumb3 && <>{separator}</>}
      {breadcrumb4 && (
        <>
          <BreadcrumbBreadcrumbItemVariantLinkStateDefault
            variant="link"
            className="breadcrumb-breadcrumb-item-instance"
          />
        </>
      )}
      {breadcrumb4 && <>{separator}</>}
      {breadcrumb5 && (
        <>
          <BreadcrumbBreadcrumbItemVariantLinkStateDefault
            variant="link"
            className="breadcrumb-breadcrumb-item-instance"
          />
        </>
      )}
      {breadcrumb5 && <>{separator}</>}
      <BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefault
        variant="link-current"
        className="breadcrumb-breadcrumb-item-instance"
      />
    </div>
  );
};