import React, { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import './Header.css'

export default function Header({residenciesId}) {
  const [menuOpened,setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && '-100%'}
    }
  }
  return (
   <section className='h-wrapper'>
        <div className="h-container  flexCenter innerWidth paddings">
            <img src="./logo.png" alt="logo" width={100}/>

           <OutsideClickHandler onOutsideClick={()=> {
            setMenuOpened(false)
           }}>
             <div className="h-menu flexCenter"
              style={getMenuStyles(menuOpened)}
            >
                <a href="#residencies">Residence</a>
                <a href="#ourValue">Our Value</a>
                <a href="#contact">Contact Us</a>
                <a href="#getStarted">Get Started</a>
                <button className='button'><a href="">Contact</a></button>
            </div>
           </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
        </div>
        </div>
   </section>
  )
}
