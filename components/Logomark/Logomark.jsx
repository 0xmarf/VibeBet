import "./Logomark.css";

export const Logomark = ({ className, ...props }) => {
  return (
    <div className={"logomark " + className}>
      <img className="content" src="content0.svg" />
    </div>
  );
};
