import React from "react";

interface AvatarTabsProps {
  categories: string[];
  activeTab: string;
  onSelectTab: (category: string) => void;
}

const AvatarTabs: React.FC<AvatarTabsProps> = ({
  categories,
  activeTab,
  onSelectTab,
}) => {
  return (
    <div className="avatar-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={category === activeTab ? "active" : ""}
          onClick={() => onSelectTab(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default AvatarTabs;
