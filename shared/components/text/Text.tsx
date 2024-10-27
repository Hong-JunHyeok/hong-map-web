import React, { PropsWithChildren } from "react";

interface TextProps extends PropsWithChildren {
  variant?: "p" | "span" | "div";
  size?: "sm" | "base" | "lg" | "xl";
  weight?: "normal" | "medium" | "bold";
  className?: string;
}

export default function Text({
  children,
  variant = "p",
  size = "base",
  weight = "normal",
  className = "",
}: TextProps) {
  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`${getTextSize(size)} ${getTextWeight(weight)} ${className}`}
    >
      {children}
    </Tag>
  );
}

function getTextSize(size: string) {
  switch (size) {
    case "sm":
      return "text-sm";
    case "base":
      return "text-base";
    case "lg":
      return "text-lg";
    case "xl":
      return "text-xl";
    default:
      return "text-base";
  }
}

function getTextWeight(weight: string) {
  switch (weight) {
    case "normal":
      return "font-normal";
    case "medium":
      return "font-medium";
    case "bold":
      return "font-bold";
    default:
      return "font-normal";
  }
}
