import React from "react";
import Image from "next/image";
import "./AvatarTypeImageSize12.css";

interface AvatarTypeImageSize12Props {
  type?: string;
  size?: string;
  className?: string;
  src?: string;
  alt?: string;
}

export const AvatarTypeImageSize12: React.FC<AvatarTypeImageSize12Props> = ({
  type = "image",
  size = "12",
  className = "",
  src = "/avatar-type-image-size-12.png",
  alt = "Avatar",
  ...props
}) => {
  const variantsClassName = "type-" + type + " size-" + size;

  return (
    <Image
      className={
        "avatar-type-image-size-12 " + className + " " + variantsClassName
      }
      src={src}
      alt={alt}
      width={48}
      height={48}
      {...props}
    />
  );
};