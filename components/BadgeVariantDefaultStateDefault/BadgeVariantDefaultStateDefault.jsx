import "./BadgeVariantDefaultStateDefault.css";
import { IconCheck2 } from "../IconCheck2/IconCheck2.jsx";
import { IconArrowRight2 } from "../IconArrowRight2/IconArrowRight2.jsx";
import { IconCheck } from "../IconCheck/IconCheck.jsx";
import { IconArrowRight } from "../IconArrowRight/IconArrowRight.jsx";

export const BadgeVariantDefaultStateDefault = ({
  badgeText = "Badge",
  showLeftIcon = false,
  showRightIcon = false,
  leftIcon = <IconCheck2 className="icon-check-instance" />,
  rightIcon = <IconArrowRight2 className="icon-arrow-right-instance" />,
  variant = "default",
  state = "default",
  className,
  ...props
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
