import React from "react";

interface DescriptionPointsProps {
  text: string;
}

const DescriptionPoints: React.FC<DescriptionPointsProps> = ({ text }) => {
  const points = text
    .split(".")
    .map((point) => point.trim())
    .filter((point) => point.length > 0);

  return (
    <ul className="list-disc pt-5 pl-5 line-clamp-4 text-[#555555] text-[14px]">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );
};

export default DescriptionPoints;
