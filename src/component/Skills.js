import React from 'react'
import { IoLogoGithub,IoLogoYoutube } from "react-icons/io5";
import { IconContext } from "react-icons";

const Item = [
    {
        title:'lorem',
        icon:<IoLogoGithub/>
    },
    {
        title:'lorem',
        icon:<IoLogoYoutube/>
    },
    {
        title:'lorem',
        icon:<IoLogoGithub/>
    },
    {
        title:'lorem',
        icon:<IoLogoYoutube/>
    },
]

const Skills = () => {
  return (
    <div className='skills_container'>
        {
        Item.map((item)=>(
            <div className='skill_card'>
                <IconContext.Provider value={{ color: "blue", className: "icon" }}>
                    {item.icon}
                </IconContext.Provider>
                <div className='icon_info'>{item.title}</div>
            </div>
        ))
        }
      
    </div>
  )
}

export default Skills
