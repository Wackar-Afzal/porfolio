"use client"
import React from 'react'
import './MovingText.css'
import {useCursorStore,} from '@/store/store'

const MovingText = ({text, span, h1,h2, h3, h4, h5, color,boxWidth="60px", type}) => {
      // Call all hooks at the top level
  const setMenuHoverTrue = useCursorStore((state) => state.setMenuHoverTrue)
  const setMenuHoverFalse = useCursorStore((state) => state.setMenuHoverFalse)
  const setIsScrollToExploreHoverTrue = useCursorStore((state) => state.setIsScrollToExploreHoverTrue)
  const setIsScrollToExploreHoverFalse = useCursorStore((state) => state.setIsScrollToExploreHoverFalse)

  let mouseEnterFunction;
  let mouseLeaveFunction;

  // Use the results of the hooks conditionally
  if (type === "menu") {
    mouseEnterFunction = setMenuHoverTrue;
    mouseLeaveFunction = setMenuHoverFalse;
  } else if (type === "scrollToExplore") {
    mouseEnterFunction = setIsScrollToExploreHoverTrue;
    mouseLeaveFunction = setIsScrollToExploreHoverFalse;
  } else {
    mouseEnterFunction = () => {};
    mouseLeaveFunction = () => {};
  }
  return (
    <div className='menu flex_column' onMouseEnter={()=>mouseEnterFunction()} onMouseLeave={()=>mouseLeaveFunction()} style={{width:boxWidth}}>
        {span?
        <>
            <span className='menuItem1' style={{color:color}}>{text}</span>
            <span className='menuItem2' style={{color:color}}>{text}</span>
        </>
        :
        h1?
        <>
        <h1 className='menuItem1' style={{color:color}} >{text}</h1>
        <h1 className='menuItem2' style={{color:color}} >{text}</h1>
        </>:
        h2?
        <>
        <h2 className='menuItem1' style={{color:color}}>{text}</h2>
        <h2 className='menuItem2' style={{color:color}}>{text}</h2>
        </>:
         h3?
         <>
         <h3 className='menuItem1' style={{color:color}}>{text}</h3>
         <h3 className='menuItem2' style={{color:color}}>{text}</h3>
         </>:
          h4?
          <>
          <h4 className='menuItem1'style={{color:color}}>{text}</h4>
          <h4 className='menuItem2'style={{color:color}}>{text}</h4>
          </>:
            h5?
            <>
            <h5 className='menuItem1'style={{color:color}}>{text}</h5>
            <h5 className='menuItem2'style={{color:color}}>{text}</h5>
            </>:
        null
        }
    </div>
  )
}

export default MovingText