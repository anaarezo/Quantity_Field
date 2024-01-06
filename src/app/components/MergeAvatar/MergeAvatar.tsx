import React, { useMemo, useState, useEffect } from "react";

interface MergedAvatarProps {
  selections: Record<string, string>;
}

const MergedAvatar: React.FC<MergedAvatarProps> = ({ selections }) => {
  const [mergedSVG, setMergedSVG] = useState<string>("");

  useEffect(() => {
    const fetchSvgContent = async (category: string, part: string) => {
      try {
        const module = await import(`../../public/svg/${category}/${part}.svg`);
        return module.default || "";
      } catch (error) {
        console.error(`Error loading SVG for ${category}/${part}:`, error);
        return "";
      }
    };

    const generateMergedSVG = async () => {
      const svgParts: string[] = [];

      for (const [category, part] of Object.entries(selections)) {
        if (part) {
          const svgContent = await fetchSvgContent(category, part);
          svgParts.push(svgContent);
        }
      }

      const mergedSVG = `<svg xmlns="http://www.w3.org/2000/svg">${svgParts.join(
        ""
      )}</svg>`;
      setMergedSVG(mergedSVG);
    };

    generateMergedSVG();
  }, [selections]);

  const downloadSvg = () => {
    // Use the mergedSVG state directly for download
    const blob = new Blob([mergedSVG], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "merged_avatar.svg";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="merged-avatar">
      {/* Render the merged SVG */}
      <div dangerouslySetInnerHTML={{ __html: mergedSVG }} />

      {/* Add a download button */}
      <button onClick={downloadSvg}>Download Avatar</button>
    </div>
  );
};

export default MergedAvatar;
