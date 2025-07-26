import "./TableHeadRightTextAlignNoStateDefault.css";

export const TableHeadRightTextAlignNoStateDefault = ({
  tableHeadText = "Head Text",
  showText = true,
  rightTextAlign = "no",
  state = "default",
  className,
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
    >
      {showText && (
        <>
          <div className="head-text">{tableHeadText} </div>
        </>
      )}
    </div>
  );
};
