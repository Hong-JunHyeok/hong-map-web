import React, { PropsWithChildren } from "react";

interface HeadingProps extends PropsWithChildren {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export default function Heading({
  children,
  level = 1,
  className = "",
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`text-gray-800 font-bold ${className} ${getHeadingStyles(
        level
      )}`}
    >
      {children}
    </Tag>
  );
}

function getHeadingStyles(level: number) {
  switch (level) {
    case 1:
      return "text-4xl";
    case 2:
      return "text-3xl";
    case 3:
      return "text-2xl";
    case 4:
      return "text-xl";
    case 5:
      return "text-lg";
    case 6:
      return "text-base";
    default:
      return "text-4xl";
  }
}
