import "./AvatarTypeImageSize12.css";

export const AvatarTypeImageSize12 = ({
  fallbackText = "CN",
  type = "image",
  size = "12",
  className,
  ...props
}) => {
  const variantsClassName = "type-" + type + " size-" + size;

  return (
    <img
      className={
        "avatar-type-image-size-12 " + className + " " + variantsClassName
      }
      src="avatar-type-image-size-12.png"
    />
  );
};
