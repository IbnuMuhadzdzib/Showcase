import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const posX = useRef(0);
  const posY = useRef(0);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const follow = () => {
      // Jarak mengejar, semakin kecil semakin delay (0.05 = lambat, 0.2 = cepat)
      posX.current += (mouseX.current - posX.current) * 0.2;
      posY.current += (mouseY.current - posY.current) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posX.current - 12}px, ${posY.current - 12}px, 0)`;
      }

      requestAnimationFrame(follow);
    };

    follow();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  // Hover detector
  useEffect(() => {
    const targets = document.querySelectorAll(".cursor-hover-target");

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef} 
      style={{ willChange: 'transform' }}
      className={` pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference transition-all duration-150 ease-out 
        ${isHovering ? 'w-2 h-2 scale-75' : 'w-6 h-6 scale-100'} bg-indigo-500`}
    />
  );
}
