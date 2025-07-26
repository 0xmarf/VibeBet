import React from "react";
import "./TableHeadRightTextAlignNoStateDefault.css";

interface TableHeadRightTextAlignNoStateDefaultProps {
  tableHeadText?: string;
  showText?: boolean;
  rightTextAlign?: string;
  state?: string;
  className?: string;
}

export const TableHeadRightTextAlignNoStateDefault: React.FC<TableHeadRightTextAlignNoStateDefaultProps> = ({
  tableHeadText = "Head Text",
  showText = true,
  rightTextAlign = "no",
  state = "default",
  className = "",
  ...props
}) => {
  const variantsClassName =
    "right-text-align-" + rightTextAlign + " state-" + state;

  return (
    <div
      className={
        "table-head-right-text-align-no-state-default " +
        className +
        " " +
        variantsClassName
      }
      {...props}
    >
      {showText && (
        <>
          <div className="head-text">{tableHeadText} </div>
        </>
      )}
    </div>
  );
};