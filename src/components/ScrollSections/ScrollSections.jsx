import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollSections.css";
gsap.registerPlugin(ScrollTrigger);

const ScrollSections = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        },
        {
          filter: "blur(10px)",
            position:"sticky",
            top:"40px",
            scale: 0.8,
            opacity: 1,
            duration: 1,
            ease: "linear.none",
          scrollTrigger: {
            trigger: section,
            start: "top top+=70",
            end: "bottom+=48 top",
            scrub: true,
            pin: false,
            // markers: true, // Show markers for debugging

          },
        }
      );
    });




   
    // Refresh ScrollTrigger after setting up animations
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="">
    <div className="flex_column width100" >
      <div className="section width100" id="section1"> </div>
      <div className="section width100"   id="section2"></div>
      <div className="section width100"   id="section3"></div>
      <div className="section width100"   id="section4"></div>
    <div className="LastSection" style={{backgroundColor:"red", height:"80vh", width:"100%", marginTop:"14rem"}}></div>

    </div>

    </div>
  );
};

export default ScrollSections;
