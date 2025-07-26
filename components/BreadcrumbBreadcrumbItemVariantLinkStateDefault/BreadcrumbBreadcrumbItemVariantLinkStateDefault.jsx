import "./BreadcrumbBreadcrumbItemVariantLinkStateDefault.css";

export const BreadcrumbBreadcrumbItemVariantLinkStateDefault = ({
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
        "breadcrumb-breadcrumb-item-variant-link-state-default " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="breadcrumb">{breadcrumbText} </div>
    </div>
  );
};
