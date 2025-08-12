import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Section1() {

    const ref = useRef(null);

  // Ambil progress scroll khusus elemen ini
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.2"], 
    // "start end" → saat bagian atas section muncul di bawah layar
    // "start start" → saat bagian atas section sampai di atas layar
  });

  // Scale dari 0.8 → 1
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    return (
        <>
        <motion.section
            ref={ref}
            style={{ scale }}
            className="relative h-screen bg-amber-300 z-20 rounded-xl"
        >
            <motion.div
                className="w-full flex justify-center items-center"
            >
                <h1>Testing</h1>
            </motion.div>
        </motion.section>
        </>    
    )
}