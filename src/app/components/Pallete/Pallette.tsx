import React from "react";
import { AvatarPart } from "../AvatarPart/AvatarPart";

interface PaletteProps {
  categories: string[];
  onSelect: (category: string, part: string) => void;
  selections: any;
  activeTab: string;
}

export const Palette: React.FC<PaletteProps> = ({
  categories,
  onSelect,
  activeTab,
  selections,
}) => {
  return (
    <div className="palette">
      {categories.map((category) => (
        <div
          key={category}
          className={`category ${category === activeTab ? "active" : ""}`}
        >
          {category === activeTab && (
            <div className="options">
              {Array.from({ length: 11 }, (_, index) => (
                <AvatarPart
                  key={index}
                  category={category}
                  part={`option${index + 1}`}
                  alt={`${category}-${index + 1}`}
                  onSelect={onSelect}
                  skinColor={
                    category === "skinColor" ? selections.skinColor : undefined
                  }
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
