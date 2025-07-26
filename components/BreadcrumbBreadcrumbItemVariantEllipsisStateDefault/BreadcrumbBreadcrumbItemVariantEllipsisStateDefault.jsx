import "./BreadcrumbBreadcrumbItemVariantEllipsisStateDefault.css";
import { IconEllipsis } from "../IconEllipsis/IconEllipsis.jsx";

export const BreadcrumbBreadcrumbItemVariantEllipsisStateDefault = ({
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
        "breadcrumb-breadcrumb-item-variant-ellipsis-state-default " +
        className +
        " " +
        variantsClassName
      }
    >
      <IconEllipsis className="icon-ellipsis-instance"></IconEllipsis>
    </div>
  );
};
