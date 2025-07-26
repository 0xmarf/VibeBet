import "./BreadcrumbBreadcrumbItemVariantDropdownStateDefault.css";
import { IconChevronDown } from "../IconChevronDown/IconChevronDown.jsx";

export const BreadcrumbBreadcrumbItemVariantDropdownStateDefault = ({
  breadcrumbText = "Breadcrumb",
  variant = "dropdown",
  state = "default",
  className,
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
    >
      <div className="dropdown-menu-text">{breadcrumbText} </div>
      <IconChevronDown className="icon-chevron-down-instance"></IconChevronDown>
    </div>
  );
};
