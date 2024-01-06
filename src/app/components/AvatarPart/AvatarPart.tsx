import Image from "next/image";
import React from "react";

interface AvatarPartProps {
  category: string;
  part: string;
  alt: string;
  skinColor?: string;
  onSelect: (category: string, part: string) => void;
}

export const AvatarPart: React.FC<AvatarPartProps> = ({
  category,
  part,
  alt,
  onSelect,
  skinColor,
}) => {
  const handleClick = () => {
    onSelect(category, part);
  };

  const handleImageError = (event) => {
    //TODO: target: { style: { display: string } };
    event.target.style.display = "none";
  };

  return (
    <div className="avatar-part" onClick={handleClick}>
      <Image
        src={`/assets/${category}/${part}.svg`}
        alt={alt}
        width={80}
        height={37}
        // style={{
        //   fill: category === "skinColor" && color ? color : "currentColor",
        // }}
        style={{ "--skin-color": skinColor } as React.CSSProperties}
        onError={handleImageError}
      />
    </div>
  );
};
