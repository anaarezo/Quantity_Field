import Image from "next/image";
import React from "react";

interface AvatarPreviewProps {
  selections: Record<string, string>;
}

export const AvatarPreview: React.FC<AvatarPreviewProps> = ({ selections }) => {
  return (
    <div className="avatar-preview">
      {Object.entries(selections).map(
        ([category, part]) =>
          part && (
            <Image
              className={`${category}`}
              src={`/assets/${category}/${part}.svg`}
              alt={category}
              key={category}
              width={180}
              height={37}
              priority
            />
          )
      )}
    </div>
  );
};
