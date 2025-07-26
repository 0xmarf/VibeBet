import React from "react";
import "./ButtonVariantOutlineStateDefaultSizeDefault.css";
import { IconCircle } from "../IconCircle/IconCircle";

interface ButtonVariantOutlineStateDefaultSizeDefaultProps {
  buttonText?: string;
  showLeftIcon?: boolean;
  leftIcon?: React.ReactNode;
  showRightIcon?: boolean;
  rightIcon?: React.ReactNode;
  variant?: string;
  state?: string;
  size?: string;
  className?: string;
}

export const ButtonVariantOutlineStateDefaultSizeDefault: React.FC<ButtonVariantOutlineStateDefaultSizeDefaultProps> = ({
  buttonText = "Button",
  showLeftIcon = false,
  leftIcon = <IconCircle className="icon-circle-instance" />,
  showRightIcon = false,
  rightIcon = <IconCircle className="icon-circle-instance" />,
  variant = "default",
  state = "default",
  size = "default",
  className = "",
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
      {...props}
    >
      {showLeftIcon && <>{leftIcon}</>}
      <div className="button">{buttonText} </div>
      {showRightIcon && <>{rightIcon}</>}
    </div>
  );
};