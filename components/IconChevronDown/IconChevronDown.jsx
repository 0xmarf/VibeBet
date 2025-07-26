import "./IconChevronDown.css";

export const IconChevronDown = ({ className, ...props }) => {
  return (
    <img
      className={"icon-chevron-down " + className}
      src="icon-chevron-down.svg"
    />
  );
};
