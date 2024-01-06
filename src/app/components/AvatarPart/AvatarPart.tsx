import Image from "next/image";
import React from "react";

interface AvatarPartProps {
  category: string;
  part: string;
  alt: string;
  onSelect: (category: string, part: string) => void;
}

export const AvatarPart: React.FC<AvatarPartProps> = ({
  category,
  part,
  alt,
  onSelect,
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
        width={90}
        height={37}
        onError={handleImageError}
      />
    </div>
  );
};
