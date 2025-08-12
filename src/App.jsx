import './output.css'
import React, { useState,useEffect, useRef } from "react";
import Carousel from './components/carousel'
import Navbar from './components/navbar'
import Hero from './section/hero'
import Section1 from './section/section1'
import Footer from './section/footer'

  export default function App() {
  const [isInSection1, setIsInSection1] = useState(false);
  const section1Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInSection1(entry.isIntersecting);
      },
      { threshold: 0.9 } // 0.3 berarti minimal 30% section terlihat
    );

    if (section1Ref.current) {
      observer.observe(section1Ref.current);
    }

    return () => {
      if (section1Ref.current) {
        observer.unobserve(section1Ref.current);
      }
    };
  }, []);

  return (
    <>
    <div className='overflow-x-hidden'>
      <Navbar isWhite={isInSection1} />
      <Hero />
      <div ref={section1Ref}>
        <Section1/>
      </div>
    </div>
    </>
  )
}

