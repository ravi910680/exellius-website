import React, { useEffect, useState } from "react";
import "./AnimationVerify.css";

import frame1 from "../../animations/phone/frame-1.png";
import frame2 from "../../animations/phone/frame-2.png";
import frame3 from "../../animations/phone/frame-3.png";
import frame4 from "../../animations/phone/frame-4.png";

const frames = [frame1, frame2, frame3, frame4];
const delays = [1000, 1000, 1000, 3000];

export default function SmartFrameAnimation() {
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let timeout;
    if (index === 3 && !exiting) {
      timeout = setTimeout(() => setExiting(true), 1800);
    } else if (exiting) {
      timeout = setTimeout(() => {
        setExiting(false);
        setIndex(0);
      }, 1500);
    } else {
      timeout = setTimeout(() => setIndex((prev) => (prev + 1) % frames.length), delays[index]);
    }
    return () => clearTimeout(timeout);
  }, [index, exiting]);

  return (
    <div className="smart-frame-container">
      {frames.map((img, i) => (
        <img
          key={i}
          src={typeof img === "string" ? img : img.src}
          alt={`smart-frame-${i + 1}`}
          className={[
            "smart-frame-image",
            i === index && !exiting ? "smart-frame-active" : "",
            i === 3 && !exiting && i === index ? "smart-frame-last" : "",
            i === 3 && exiting ? "smart-frame-exit" : ""
          ].join(" ")}
        />
      ))}
    </div>
  );
}
