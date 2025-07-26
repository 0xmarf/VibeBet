import "./IconEllipsis.css";

export const IconEllipsis = ({ className, ...props }) => {
  return (
    <img className={"icon-ellipsis " + className} src="icon-ellipsis.svg" />
  );
};
