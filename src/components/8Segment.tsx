import { memo } from "react";
import { segment } from "../libs/segment";
import Node, { VertNode } from "./Node";

const SevenSegment = memo(({ value }: { value: number | string }) => {
  if (typeof value === "string") {
    value = parseInt(value);
  }
  const digit =
    segment(value)
      ?.split("")
      .map((char) => !!parseInt(char)) ?? [];

  return (
    <div className="seven-segment">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          gap: 8,
        }}
      >
        <Node state={digit[0]} />
        <Node state={digit[6]} />
        <Node state={digit[3]} />
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <VertNode state={digit[5]} />
        <VertNode state={digit[1]} />
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <VertNode state={digit[4]} />
        <VertNode state={digit[2]} />
      </div>
    </div>
  );
});

export default SevenSegment;
