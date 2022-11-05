import React from 'react';
import ProfileImage from './ProfileImage';
import { MdMailOutline,MdPhonelinkRing } from "react-icons/md";
import { IoLogoGithub,IoLogoYoutube } from "react-icons/io5";
import { IconContext } from "react-icons";



const Info = () => {
  return (
    <div className='profile_container'>
        <ProfileImage/>
        <div className='contacts'>
            <div className='contact_info'>
                <div className='info_container'>
                    <IconContext.Provider value={{ color: "blue", className: "icon" }}>
                        <MdMailOutline />
                    </IconContext.Provider>
                    <div className='icon_info'>test@gmail.com</div>
                </div>
                <div className='info_container'>
                    <IconContext.Provider value={{ color: "blue", className: "icon" }}>
                        <MdPhonelinkRing />
                    </IconContext.Provider>
                    <div className='icon_info'>+91 55555 55555</div>
                </div>
                <div className='info_container'>
                    <IconContext.Provider value={{ color: "blue", className: "icon" }}>
                        <IoLogoGithub />
                    </IconContext.Provider>
                    <div className='icon_info'>https://www.github.com/test</div>
                </div>
                <div className='info_container'>
                    <IconContext.Provider value={{ color: "blue", className: "icon" }}>
                        <IoLogoYoutube />
                    </IconContext.Provider>
                    <div className='icon_info'>https://wwww.youtube.com/test</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info
