import React, { useEffect, useState } from "react";

// Import your images
import frame1 from "../../animations/Frame1.png";
import frame2 from "../../animations/Frame2.png";
import frame3 from "../../animations/Frame3.png";
import frame4 from "../../animations/Frame4.png";
import frame5 from "../../animations/Frame5.png";
import variant3 from "../../animations/Variant3.png";
import variant4 from "../../animations/Variant4.png";
import variant6 from "../../animations/Variant6.png";

const frames = [frame1, frame2,frame3,frame4,frame5, variant3, variant4, variant6];

// Match delays: 1ms between frames, 2000ms pause before looping
const delays = [500, 500,500,500,1000, 1000, 4000, 4000]; // last = 2s delay + 1s animation

export default function FigmaSmartLoopedAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let current = 0;

    const animate = () => {
      const timeout = setTimeout(() => {
        current = (current + 1) % frames.length;
        setIndex(current);
        animate();
      }, delays[current]);

      return () => clearTimeout(timeout);
    };

    const cancel = animate();
    return cancel;
  }, []);

  return (
   <div className="frame-wrapper">
      {frames.map((src, i) => {
        const isActive = i === index;
       
        return (
          <img
            key={i}
            src={typeof src === "string" ? src : src.src}
            alt={`frame-${i}`}
          className={`frame 
  ${isActive ? "active" : ""}
  ${i === 6 && isActive ? "reveal-down" : ""}
  ${i === 6 && !isActive ? "variant4-exit" : ""}
  ${i === 7 && isActive ? "variant6-enter" : ""}
  ${i === 7 && !isActive ? "variant6-exit" : ""}
`}


          />
        );
      })}
    </div>
  );
}
