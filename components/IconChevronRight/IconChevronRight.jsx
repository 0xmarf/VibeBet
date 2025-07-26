import "./IconChevronRight.css";

export const IconChevronRight = ({ className, ...props }) => {
  return (
    <img
      className={"icon-chevron-right " + className}
      src="icon-chevron-right.svg"
    />
  );
};
