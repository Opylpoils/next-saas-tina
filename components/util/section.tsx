import React from "react";
import { useTheme } from "../layout";
import { sectionColor } from "./color";

export const Section = ({ children, color = "", className = "" }) => {
  const theme = useTheme();
  const sectionColorCss =
    color === "primary"
      ? sectionColor.primary[theme.color]
      : sectionColor[color]
      ? sectionColor[color]
      : sectionColor.default;

  return (
    <section
      className={`overflow-hidden relative flex-1 transition duration-150 ease-out body-font ${sectionColorCss} ${className}`}
    >
      {children}
    </section>
  );
};
