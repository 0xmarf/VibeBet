import "./IconArrowRight.css";

export const IconArrowRight = ({ className, ...props }) => {
  return (
    <img
      className={"icon-arrow-right " + className}
      src="icon-arrow-right.svg"
    />
  );
};
