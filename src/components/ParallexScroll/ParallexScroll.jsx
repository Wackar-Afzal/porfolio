import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ParallexScroll.css";
gsap.registerPlugin(ScrollTrigger);

const data = [
  { name: "White Liners", year:"2024", type:"Photography",  class: "medium_size_class", img:"/01hero.jpg" },
  { name: "box2", year:"2024", type:"Photography",  class: "small_size_class", img:"/02hero.jpg" },
  { name: "box3", year:"2024", type:"Photography",  class: "large_size_class" ,img:"/03hero.jpg"},
  { name: "box4", year:"2024", type:"Photography",  class: "small_size_class" ,img:"/01hero.jpg" },
  { name: "box5", year:"2024", type:"Photography",  class: "medium_size_class", img:"/02hero.jpg" },
  { name: "box6", year:"2024", type:"Photography",  class: "large_size_class" ,img:"/03hero.jpg"},
];
const ParallaxEffect = () => {

  

  useEffect(() => {
    gsap.utils.toArray(".parallax_box").forEach((box, i) => {
      gsap.fromTo(
        box,
        { y: 0 },
        {
          y: (i * 1.75) * 30, // Adjust the multiplier for different speeds
          scrollTrigger: {
            trigger: box,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="parallax_container width100">
    {data.map((obj,i)=>{
      return  <div key={i} className={`parallax_box ${obj.class}`} >
        <div className="parallax_box_image width100">
          <small className="obj_year">{obj.year}</small>

        <img src={obj.img}/>
        </div>

        <div className="flex_row_spaced_between parralex_effect_text"> 
        <h3 className="obj_name black_text bold">{obj.name}</h3>
        <span className="obj_type black_text">{obj.type}</span> 
        </div>
     
      </div>

    })}
    {/* Add more boxes as needed */}
  </div>
  );
};

export default ParallaxEffect;
