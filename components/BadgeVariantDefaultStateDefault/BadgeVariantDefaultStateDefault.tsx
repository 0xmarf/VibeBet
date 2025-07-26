import React from "react";
import "./BadgeVariantDefaultStateDefault.css";
import { IconCheck2 } from "../IconCheck2/IconCheck2";
import { IconArrowRight2 } from "../IconArrowRight2/IconArrowRight2";

interface BadgeVariantDefaultStateDefaultProps {
  badgeText?: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: string;
  state?: string;
  className?: string;
}

export const BadgeVariantDefaultStateDefault: React.FC<BadgeVariantDefaultStateDefaultProps> = ({
  badgeText = "Badge",
  showLeftIcon = false,
  showRightIcon = false,
  leftIcon = <IconCheck2 className="icon-check-instance" />,
  rightIcon = <IconArrowRight2 className="icon-arrow-right-instance" />,
  variant = "default",
  state = "default",
  className = "",
}) => {
  const variantsClassName = "variant-" + variant + " state-" + state;

  return (
    <div
      className={
        "badge-variant-default-state-default " +
        className +
        " " +
        variantsClassName
      }
    >
      {showLeftIcon && <>{leftIcon}</>}
      <div className="badge">{badgeText} </div>
      {showRightIcon && <>{rightIcon}</>}
    </div>
  );
};