// Title.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Title() {
  const letters = "Welcome.".split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.010, // jarak waktu antar huruf
      },
    },
  };

  const item = {
    hidden: { y: "150%", opacity: 0, rotate: -45 },
    visible: { y: "-10%", opacity: 1, rotate: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className="absolute flex justify-center items-center w-full h-screen z-10 pointer-events-none"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-9xl uppercase font-bold flex overflow-hidden">
        {letters.map((char, index) => (
          <motion.span key={index} variants={item} className="inline-block">
            {char}
          </motion.span>
        ))}
      </h1>
    </motion.div>
  );
}
