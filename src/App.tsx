import { useEffect, useState } from "react";
import SevenSegment from "./components/8Segment";

function App() {
  const [time, settime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      settime(new Date());
    }, 250);
    return () => clearInterval(interval);
  }, []);

  const h = time.getHours().toString().padStart(2, "0").split("");
  const m = time.getMinutes().toString().padStart(2, "0").split("");
  const s = time.getSeconds().toString().padStart(2, "0").split("");

  const UTS = time.getTime().toString().split("");

  return (
    <div className="center">
      <div
        style={{
          display: "flex",
          gap: 80,
          filter: "drop-shadow(8px 8px 16px #fffa)",
        }}
      >
        <SevenSegment value={h[0]} />
        <SevenSegment value={h[1]} />
        <div className="colon">
          <div />
          <div />
        </div>
        <SevenSegment value={m[0]} />
        <SevenSegment value={m[1]} />
        <div className="colon">
          <div />
          <div />
        </div>
        <SevenSegment value={s[0]} />
        <SevenSegment value={s[1]} />
      </div>
      <div style={{ display: "flex", gap: 80, scale: "0.5" }}>
        {UTS.map((v) => (
          <SevenSegment value={v} />
        ))}
      </div>
    </div>
  );
}

export default App;
