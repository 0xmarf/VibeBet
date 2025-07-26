import "./ButtonVariantOutlineStateDefaultSizeDefault.css";
import { IconCircle } from "../IconCircle/IconCircle.jsx";

export const ButtonVariantOutlineStateDefaultSizeDefault = ({
  buttonText = "Button",
  showLeftIcon = false,
  leftIcon = <IconCircle className="icon-circle-instance" />,
  showRightIcon = false,
  rightIcon = <IconCircle className="icon-circle-instance" />,
  variant = "default",
  state = "default",
  size = "default",
  className,
  ...props
}) => {
  const variantsClassName =
    "variant-" + variant + " state-" + state + " size-" + size;

  return (
    <div
      className={
        "button-variant-outline-state-default-size-default " +
        className +
        " " +
        variantsClassName
      }
    >
      {showLeftIcon && <>{leftIcon}</>}
      <div className="button">{buttonText} </div>
      {showRightIcon && <>{rightIcon}</>}
    </div>
  );
};
