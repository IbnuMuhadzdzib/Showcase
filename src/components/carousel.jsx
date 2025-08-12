import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import wheel from "../assets/images/wheel.png";
import screen from "../assets/images/screenshot.png";

export default function Carousel() {
  const images = [wheel, screen, wheel, screen, wheel, screen];
  const allImages = [...images, ...images];

  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const xRef = useRef(0);
  const [singleWidth, setSingleWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const children = Array.from(trackRef.current.children).slice(0, images.length);
      const total = children.reduce((acc, el) => {
        const style = getComputedStyle(el);
        return acc + el.offsetWidth + parseFloat(style.marginRight || 0);
      }, 0);
      setSingleWidth(total || 0);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [images.length]);

  useEffect(() => {
    const speedPixelsPerSecond = 120;

    const step = (time) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const dt = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!paused && singleWidth > 0) {
        xRef.current -= (speedPixelsPerSecond * dt) / 1000;
        if (Math.abs(xRef.current) >= singleWidth) {
          xRef.current += singleWidth;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${xRef.current}px)`;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, singleWidth]);

  const handleMouseEnter = () => {
    setPaused(true);
    lastTimeRef.current = null;
  };
  const handleMouseLeave = () => {
    setPaused(false);
    lastTimeRef.current = null;
  };

  return (
    <motion.div
      className="w-full overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        ref={trackRef}
        className="flex items-center gap-5 will-change-transform"
        layout
      >
        {allImages.map((src, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-[300px] rounded-sm overflow-hidden bg-white shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.3)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.img
              src={src}
              alt={`carousel-${i}`}
              className="w-full h-[200px] object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
