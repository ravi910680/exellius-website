import React, { useEffect, useState } from "react";
import "./FourFrameAnimation.css";

import frame1 from "../../animations/frame-1.png";
import frame2 from "../../animations/frame-2.png";
import frame3 from "../../animations/frame-3.png";
import frame4 from "../../animations/frame-4.png";

const frames = [frame1, frame2, frame3, frame4];
const delays = [3000, 3000, 1400, 3000];

export default function FourFrameAnimation() {
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let timeout;
    if (index === 3 && !exiting) {
      // Last image: show for most of its time, then run "exit" for last 700ms
      timeout = setTimeout(() => setExiting(true), 1800);
    } else if (exiting) {
      // Run the exit animation, then move to frame 1
      timeout = setTimeout(() => {
        setExiting(false);
        setIndex(0);
      }, 1200);
    } else {
      // Normal cycling
      timeout = setTimeout(() => setIndex((prev) => (prev + 1) % frames.length), delays[index]);
    }
    return () => clearTimeout(timeout);
  }, [index, exiting]);

  return (
    <div className="four-frame-wrapper">
      {frames.map((img, i) => (
        <img
          key={i}
          src={typeof img === "string" ? img : img.src}
          alt={`frame-${i + 1}`}
          className={[
            "four-frame",
            i === index && !exiting ? "active" : "",
            i === 3 ? "last-frame" : "",
            i === 3 && exiting ? "last-frame-exit" : ""
          ].join(" ")}
        />
      ))}
    </div>
  );
}
