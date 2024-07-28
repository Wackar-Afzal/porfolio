"use client"
import React from 'react';
import './Navbar.css'
import MovingText from '../MovingText/MovingText'
const Navbar = ({type}) => {

  return (
    <div className='flex_row_spaced_between navbar'>
        <div className='Navbar_logo'>
          {
            type==="black"?
        <img src="http://clapat.ro/themes/montoya/images/logo.png" alt="" />
            :
        <img src="http://clapat-themes.com/wordpress/montoya/wp-content/themes/montoya/images/logo-white.png" alt="" />


          }
        </div>
        <div className='flex_row gap2rem'>
           <MovingText text="Menu" h4={true} type='menu' color={type==="black"?"black":"white"}/>
           <div  className={`burger flex_column`} >
            <div className='burger1' style={type==="black"?{backgroundColor:"black"}:{backgroundColor:"white"}}></div>
            <div className='burger2'style={type==="black"?{backgroundColor:"black"}:{backgroundColor:"white"}}></div>
            </div>
        </div>
       
    </div>
  )
}

export default Navbar