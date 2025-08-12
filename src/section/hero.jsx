import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, scale } from "framer-motion";
import Title from "../components/title";

import Web1 from "../assets/images/WebPict1.png"
import Web2 from "../assets/images/WebPict2.png"
import Web3 from "../assets/images/WebPict3.png"
import Web4 from "../assets/images/WebPict4.png"
import Web5 from "../assets/images/WebPict5.png"
import Web6 from "../assets/images/WebPict6.png"
import Web7 from "../assets/images/artikel-desktop.webp"
import Web8 from  "../assets/images/e-report-desktop.webp"
import Web9 from  "../assets/images/idn-desktop.webp"
import Web10 from  "../assets/images/rama-desktop.webp"
import Web11 from  "../assets/images/technova-desktop.webp"

export default function Hero() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [setContentVisible] = useState(false);
  const [cursor, setCursor] = useState({ x: 0.5, y: 0.5 }); // default tengah

  useEffect(() => {
    const totalDuration = 0.2 + 0.6; // delay + durasi animasi overlay

    const timer = setTimeout(() => {
      setShowOverlay(false);
      setContentVisible(true);
    }, totalDuration * 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle mouse move untuk efek offset gambar/element
  const handleMouseMove = (e) => {
    const { innerWidth: w, innerHeight: h } = window;
    setCursor({ x: e.clientX / w, y: e.clientY / h });
  };

  // Hitung offset buat efek gerak konten (skalanya bisa kamu sesuaikan)
  const offsetX = -(cursor.x - 0.5) * 1000;
  const offsetY = -(cursor.y - 0.5) * 1000;

  const overlayVariants = {
    initial: { y: 0 },
    animate: {
      y: "-100vh",
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black z-50"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        )}
      </AnimatePresence>

      <motion.section
        className="h-screen w-full relative z-0 overflow-hidden"
        onMouseMove={handleMouseMove}
        variants={contentVariants}
        >
        <motion.div
          className="absolute"
          style={{
            width: "200vw",
            height: "200vh",
            transform: `translate(${offsetX}px, ${offsetY}px)`,
            transition: "transform 0.05s ease-out",
          }}
        >
          <motion.img 
            src={Web1} 
            alt="Web1" 
            className="absolute top-14 left-4/12 max-w-xs shadow-2xl transition-all duration-300 hover:max-w-sm"
            initial={{ opacity:0, scale:0 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1.4, ease:"easeInOut" }}
          />
          <motion.img 
            src={Web2} 
            alt="Web1" 
            className="absolute top-14 left-4/12 max-w-xs shadow-2xl transition-all duration-300 hover:max-w-sm"
            initial={{ opacity:0, scale:0 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1.4, ease:"easeInOut" }}
          />
          <motion.img 
            src={Web3} 
            alt="Web1" 
            className="absolute top-14 left-4/12 max-w-xs shadow-2xl transition-all duration-300 hover:max-w-sm"
            initial={{ opacity:0, scale:0 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1.4, ease:"easeInOut" }}
          />
          <motion.img 
            src={Web4} 
            alt="Web1" 
            className="absolute top-14 left-4/12 max-w-xs shadow-2xl transition-all duration-300 hover:max-w-sm"
            initial={{ opacity:0, scale:0 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1.4, ease:"easeInOut" }}
          />
          <motion.img 
            src={Web5} 
            alt="Web1" 
            className="absolute top-14 left-4/12 max-w-xs shadow-2xl transition-all duration-300 hover:max-w-sm"
            initial={{ opacity:0, scale:0 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1.4, ease:"easeInOut" }}
          />
          <motion.img 
            src={Web6} 
            alt="Web1" 
            className="absolute top-14 left-4/12 max-w-xs shadow-2xl transition-all duration-300 hover:max-w-sm"
            initial={{ opacity:0, scale:0 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1.4, ease:"easeInOut" }}
          />
          <motion.img 
            src={Web7} 
            alt="Web1" 
            className="absolute top-14 left-4/12 max-w-xs shadow-2xl transition-all duration-300 hover:max-w-sm"
            initial={{ opacity:0, scale:0 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1.4, ease:"easeInOut" }}
          />
          <motion.img 
            src={Web8} 
            alt="Web1" 
            className="absolute top-14 left-4/12 max-w-xs shadow-2xl transition-all duration-300 hover:max-w-sm"
            initial={{ opacity:0, scale:0 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1.4, ease:"easeInOut" }}
          />
          <motion.img 
            src={Web9} 
            alt="Web1" 
            className="absolute top-14 left-4/12 max-w-xs shadow-2xl transition-all duration-300 hover:max-w-sm"
            initial={{ opacity:0, scale:0 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1.4, ease:"easeInOut" }}
          />
          <motion.img 
            src={Web10} 
            alt="Web1" 
            className="absolute top-14 left-4/12 max-w-xs shadow-2xl transition-all duration-300 hover:max-w-sm"
            initial={{ opacity:0, scale:0 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1.4, ease:"easeInOut" }}
          />
          <motion.img 
            src={Web11} 
            alt="Web1" 
            className="absolute top-14 left-4/12 max-w-xs shadow-2xl transition-all duration-300 hover:max-w-sm"
            initial={{ opacity:0, scale:0 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1.4, ease:"easeInOut" }}
          />
          
        </motion.div>

        <Title />
      </motion.section>
    </>
  );
}
