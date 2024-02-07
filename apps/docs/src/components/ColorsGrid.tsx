import { colors } from "@neuro-ui/tokens";
import { getContrast } from "polished";

export default function ColorsGrid() {
  return Object.entries(colors).map(([name, color]) => {
    const colorText = getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF";

    return (
      <div
        key={name}
        style={{
          backgroundColor: color,
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: colorText,
          }}
        >
          <strong>${name}</strong>

          <span>{color}</span>
        </div>
      </div>
    );
  });
}
