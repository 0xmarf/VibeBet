import "./BreadcrumbSizeMd.css";
import { IconChevronRight2 } from "../IconChevronRight2/IconChevronRight2.jsx";
import { BreadcrumbBreadcrumbItemVariantLinkStateDefault } from "../BreadcrumbBreadcrumbItemVariantLinkStateDefault/BreadcrumbBreadcrumbItemVariantLinkStateDefault.jsx";
import { IconChevronRight } from "../IconChevronRight/IconChevronRight.jsx";
import { BreadcrumbBreadcrumbItemVariantEllipsisStateDefault } from "../BreadcrumbBreadcrumbItemVariantEllipsisStateDefault/BreadcrumbBreadcrumbItemVariantEllipsisStateDefault.jsx";
import { BreadcrumbBreadcrumbItemVariantDropdownStateDefault } from "../BreadcrumbBreadcrumbItemVariantDropdownStateDefault/BreadcrumbBreadcrumbItemVariantDropdownStateDefault.jsx";
import { BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefault } from "../BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefault/BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefault.jsx";

export const BreadcrumbSizeMd = ({
  separator = <IconChevronRight2 className="icon-chevron-right-instance" />,
  breadcrumb2 = true,
  breadcrumb3 = true,
  breadcrumb4 = true,
  breadcrumb1 = true,
  breadcrumb5 = true,
  size = "md",
  component = (
    <BreadcrumbBreadcrumbItemVariantEllipsisStateDefault
      breadcrumbText="Breadcrumb"
      variant="ellipsis"
      state="default"
    />
  ),
  className,
  ...props
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
          ></BreadcrumbBreadcrumbItemVariantLinkStateDefault>
        </>
      )}
      {breadcrumb1 && <>{separator}</>}
      {breadcrumb2 && <>{component}</>}
      {breadcrumb2 && <>{separator}</>}
      {breadcrumb3 && (
        <>
          <BreadcrumbBreadcrumbItemVariantDropdownStateDefault className="breadcrumb-breadcrumb-item-instance"></BreadcrumbBreadcrumbItemVariantDropdownStateDefault>
        </>
      )}
      {breadcrumb3 && <>{separator}</>}
      {breadcrumb4 && (
        <>
          <BreadcrumbBreadcrumbItemVariantLinkStateDefault
            variant="link"
            className="breadcrumb-breadcrumb-item-instance"
          ></BreadcrumbBreadcrumbItemVariantLinkStateDefault>
        </>
      )}
      {breadcrumb4 && <>{separator}</>}
      {breadcrumb5 && (
        <>
          <BreadcrumbBreadcrumbItemVariantLinkStateDefault
            variant="link"
            className="breadcrumb-breadcrumb-item-instance"
          ></BreadcrumbBreadcrumbItemVariantLinkStateDefault>
        </>
      )}
      {breadcrumb5 && <>{separator}</>}
      <BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefault
        variant="link-current"
        className="breadcrumb-breadcrumb-item-instance"
      ></BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefault>
    </div>
  );
};
