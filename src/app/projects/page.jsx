"use client"
import React ,{useEffect} from 'react'
import { gsap } from 'gsap';
import Navbar from '@/components/Navbar/Navbar'
import {useCursorStore} from '@/store/store'
import styles from '@/app/page.module.css'
import StrechtText from '@/components/StrechtText/StrechtText'
import DownStretchText from '@/components/DownStrechText/DownStrechTExt'
import MovingText from '@/components/MovingText/MovingText'
import ParallexScroll from '@/components/ParallexScroll/ParallexScroll'

import {scrollToTop} from  '@/utils/scrollToTop'
const Projects = () => {
  
  let mouseLeaveFunction = useCursorStore((state) => state.setIsStudioHoverFalse)
  let mouseEnterFunction = useCursorStore((state) => state.setIsStudioHoverTrue)

  useEffect(() => {
    // Select all span elements within .hero-title and animate them
    // Get all span elements
    const spans = document.querySelectorAll(".hero-title span");
    // Animate each span with irregular timing
    spans.forEach((span, index) => {
      // Apply a unique delay for each span
      gsap.fromTo(
        span, 
        { scaleY: 0 }, // Initial state: collapsed
        { 
          scaleY: 1, // Final state: expanded
          duration:3, // Random duration between 2s and 5s
          ease: "power4.out", // Easing function
          delay: Math.random() * 1.2, // Random delay before starting animation
          transformOrigin: "bottom center" // Ensure scaling from the bottom
        }
      );
    });
   
  }, []);





  useEffect(()=>{
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();

    t1.fromTo(
      ".banner_bottom_bar", 
      { y: '100vh', opacity: 0 }, // Initial state: below the viewport
      { 
        y: '0vh', // Final state: in the viewport
        opacity: 1,
        duration: 3, // Duration of the animation
        ease: "power4.out" // Easing function
      }
    );
    
    // Add a delay of 5 seconds before starting the animation
    t2.fromTo(
      ".para_text", 
      { y: '100vh', opacity: 0 }, // Initial state: below the viewport
      { 
        y: '0vh', // Final state: in the viewport
        opacity: 0.4,
        duration: 3, // Duration of the animation
        ease: "power4.out" // Easing function
      }
    );

    t1.delay(0.45);
    t2.delay(0.85);


    gsap.fromTo(
      ".test",
      {
        opacity: 0.3,
      },
      {
          opacity: 1,
          duration: 1,
          ease: "linear.none",
        scrollTrigger: {
          trigger: ".test",
          start: "top bottom-=100",
          end: "bottom top+=250",
          scrub: true,
          pin: false,
          // markers: true, // Show markers for debugging

        },
      }
    );


    
    // Add a delay of 5 seconds before starting the animation
  },[])



  return (
    <div className='white_background site_padding' >
       <Navbar type="black"/>
       <main className={"flex_column"} style={{height:"90vh"}} >
        <div className={`${styles.Hero_container} flex_row`} >
          <StrechtText text="PROJECTS" color={"black"}/>
        </div>
        <div className="flex_row">

        <p className={`${styles.hero_subtitle} para_text`} style={{color:"black"}}>WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING</p>
        </div>
        <div className="flex_row_spaced_between width100 banner_bottom_bar">
          <a href="#Projects_section" className="flex_row gap1rem ">
        <MovingText color={"black"} text="Scroll to Explore" h4={true} boxWidth="120px" type="scrollToExplore"/>
        <div className="svg_icon" >
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="black">
          <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="black"/>
          </svg>
          
          </div>
        </a>
        <a href="#Projects_section">

        <MovingText color={"black"}  text="Featued Products" h4={true} boxWidth="130px" type="none"/>
        </a>
        </div>

    </main>
       <div style={{height:"1.4px", backgroundColor:"rgba(128,128,128,0.2)",backdropFilter:"blur(5px)", margin:"0rem -4rem"}}></div>






       <div id="Projects_section"className='Projects_section'>
        <ParallexScroll />
       </div>





       <div className={`test flex_column ${styles.downTextMainContainer}`}>
      <p className={`${styles.DownText_heading, styles.hero_subtitle_skill_section}`}>EXPLORING OUR WORLD OF VISUAL AND INTERACTIVE DESIGN</p>
      <div className={`flex_row gap2rem `} onMouseEnter={mouseEnterFunction} onMouseLeave={mouseLeaveFunction}>
      <DownStretchText text="THE"  color="black"/>
      <DownStretchText text="ARCHIVE"  color="black"/>
      </div>
    </div>

    <div className={`flex_row_spaced_between ${styles.footer}`}>
      <div className="flex_row" onClick={scrollToTop}>
      <div className="svg_icon">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill="black"/>
        </svg>
          </div>
          <MovingText color={"black"} text="Back Top" h4={true} boxWidth="130px" type="none"/>
      </div>

      <div>
        <h4 style={{color:"black"}} >2024 &copy; Zeeshan. All rights reserved.</h4>
      </div>

      <div className="flex_row">
      <MovingText color={"black"} text="Follow Us" h4={true} boxWidth="130px" type="none"/>
        <div className="svg_icon">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6C22 8.20914 20.2091 10 18 10C16.7961 10 15.7164 9.46813 14.9831 8.62655L9.91209 11.1621C9.96969 11.4323 10 11.7126 10 12C10 12.2874 9.96969 12.5678 9.91208 12.838L14.9831 15.3735C14.9831 15.3735 16.7961 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18C14 17.7126 14.0303 17.4322 14.0879 17.162L9.01694 14.6265C8.28363 15.4681 7.20393 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.20395 8 8.28367 8.53191 9.01698 9.37354L14.0879 6.83807C14.0303 6.56781 14 6.28744 14 6Z" fill="black"/>
        </svg>
        </div>
      </div>
    </div>
      </div>
  )
}

export default Projects