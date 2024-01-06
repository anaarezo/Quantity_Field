import React, { useState } from "react";
import { Palette, AvatarPreview, AvatarPart } from "../index";
import AvatarTabs from "../AvatarTabs/AvatarTabs";

const AvatarGenerator: React.FC = () => {
  const [selections, setSelections] = useState<Record<string, string>>({
    hair: "",
    eyes: "option1",
    face: "option1",
    glasses: "",
    blush: "",
    body: "option1",
    mouth: "option1",
    mustache: "",
  });
  const [activeTab, setActiveTab] = useState<string>("hair");

  const handleSelect = (category: string, part: string) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [category]: part,
    }));
  };

  const handleTabSelect = (category: string) => {
    setActiveTab(category);
  };

  const categories = [
    "hair",
    "eyes",
    "face",
    "glasses",
    "blush",
    "body",
    "mouth",
    "mustache",
  ];

  return (
    <div className="avatar-generator">
      <div className="layout-container">
        <AvatarPreview selections={selections} />
        <div className="tabs-container">
          <AvatarTabs
            categories={categories}
            activeTab={activeTab}
            onSelectTab={handleTabSelect}
          />
          <Palette
            categories={categories}
            onSelect={handleSelect}
            selections={selections}
            activeTab={activeTab}
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarGenerator;
