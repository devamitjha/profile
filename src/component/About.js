import React from 'react';
import { MdMailOutline,MdPhonelinkRing } from "react-icons/md";
import { IoLogoGithub,IoLogoYoutube } from "react-icons/io5";
import { IconContext } from "react-icons";

const About = () => {
  return (
    <div className='about_container'>
      <h6>lorem</h6>
        <div className='details'>
           <div className='card'>
              <IconContext.Provider value={{ color: "blue", className: "icon" }}>
                  <MdMailOutline />
              </IconContext.Provider>
              <div className='icon_info'>test@gmail.com</div>
           </div>
           <div className='card'>
              <IconContext.Provider value={{ color: "blue", className: "icon" }}>
                  <MdMailOutline />
              </IconContext.Provider>
              <div className='icon_info'>test@gmail.com</div>
           </div>
           <div className='card'>
              <IconContext.Provider value={{ color: "blue", className: "icon" }}>
                  <MdMailOutline />
              </IconContext.Provider>
              <div className='icon_info'>test@gmail.com</div>
           </div>
           <div className='card'>
              <IconContext.Provider value={{ color: "blue", className: "icon" }}>
                  <MdMailOutline />
              </IconContext.Provider>
              <div className='icon_info'>test@gmail.com</div>
           </div>
           <div className='card'>
              <IconContext.Provider value={{ color: "blue", className: "icon" }}>
                  <MdMailOutline />
              </IconContext.Provider>
              <div className='icon_info'>test@gmail.com</div>
           </div>
           <div className='card'>
              <IconContext.Provider value={{ color: "blue", className: "icon" }}>
                  <MdMailOutline />
              </IconContext.Provider>
              <div className='icon_info'>test@gmail.com</div>
           </div>
        </div>
    </div>
  )
}

export default About
