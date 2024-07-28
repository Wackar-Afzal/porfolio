"use client"
import React from 'react'
import {useCursorStore} from '@/store/store'

import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isHovered = useCursorStore((state) => state.isHovered)
  const isMenu = useCursorStore((state) => state.isMenu)
  const isScrollToExplore = useCursorStore((state) => state.isScrollToExplore)
  const isStudio = useCursorStore((state) => state.isStudio)

  const isBurger = useCursorStore((state) => state.isBurger)
  var width
  if (typeof window !== 'undefined') {
     width = window.innerWidth;
    // Use `width` as needed
    // console.log(width)
  }
  
    useEffect(() => {
        const handleMouseMove = (e) => {
          setPosition({ x: e.pageX, y: e.pageY });
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

      const circleClasses = `circle flex_row   ${isHovered ? "hovered_circle flex_row" : ''}`;
  return (
    <div
      className={circleClasses}
      style={isMenu===true ?
        {
        left: `${width-130}px`,
        top: `40px`,
        transform: 'scale(1.75)',
        border:`1.5px solid rgb(140,97,68)`,
        transition: 'left 1s ease, top 1s ease, transform 0.75s ease',

      }:isScrollToExplore===true?{
        left: `191px`,
        top: `475px`,
        transform: 'scale(1.35)',
        border:`2px solid grey`,
        transition: 'left 1s ease, top 1s ease, transform 0.75s ease',
      }:isStudio===true?{
        left: `${position.x}px`,
        top: `${position.y}px`,
        border:`none`,
        backgroundColor:"rgba(255,255,255,0.2)",
        transform: 'scale(2.75)',
        backdropFilter: "blur(12px)",
      }
      :
      {
        left: `${position.x}px`,
        top: `${position.y}px`,
        border:`2px solid grey`,
      }}
    >
      {isStudio?<h4 style={{fontSize:"0.3rem"}}>[About Us]</h4>:null}
    </div>
  )
}

export default Cursor