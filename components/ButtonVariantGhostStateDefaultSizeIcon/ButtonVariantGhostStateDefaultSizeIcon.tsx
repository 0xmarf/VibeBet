import React from "react";
import "./ButtonVariantGhostStateDefaultSizeIcon.css";
import { IconCircle } from "../IconCircle/IconCircle";

interface ButtonVariantGhostStateDefaultSizeIconProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: string;
  state?: string;
  size?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const ButtonVariantGhostStateDefaultSizeIcon: React.FC<ButtonVariantGhostStateDefaultSizeIconProps> = ({
  leftIcon = <IconCircle className="icon-circle-instance" />,
  rightIcon,
  variant = "default",
  state = "default",
  size = "default",
  className = "",
  onClick,
  disabled,
  type = "button",
}) => {
  const variantsClassName =
    "variant-" + variant + " state-" + state + " size-" + size;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={
        "button-variant-ghost-state-default-size-icon " +
        className +
        " " +
        variantsClassName
      }
    >
      {leftIcon}
      {rightIcon}
    </button>
  );
};