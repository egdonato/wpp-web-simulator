import { ButtonTheme } from "../../models/common";

// Common values ----------------------
const padding = "0.6em";
const width = "10em";
const borderRadius = "90px";
const white = "#FFFFFF";

// Themes -----------------------------
export const buttonGreenTheme: ButtonTheme = {
  background: "#2a948a",
  color: white,
  border: "1.5px solid #009688",
  padding: padding,
  width: width,
  borderRadius: borderRadius,
  hoverBackground: white,
  hoverColor: "#2a948a",
};

export const buttonTransparentTheme: ButtonTheme = {
  background: "none",
  color: white,
  border: "1.5px solid white",
  padding: padding,
  width: width,
  borderRadius: borderRadius,
  hoverBackground: white,
  hoverColor: "#2a948a",
};
