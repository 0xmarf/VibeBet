import "./BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefault.css";

export const BreadcrumbBreadcrumbItemVariantLinkCurrentStateDefault = ({
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
        "breadcrumb-breadcrumb-item-variant-link-current-state-default " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="breadcrumb">{breadcrumbText} </div>
    </div>
  );
};
