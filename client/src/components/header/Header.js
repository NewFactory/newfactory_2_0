import React from 'react'
import './header.css'
import IconFacebook from '../../svg/IconFacebook.svg.js'
import IconInstagram from '../../svg/IconInstagram.svg.js'
import IconTwitter from '../../svg/IconTwitter.svg.js'


function Header() {
  return (
    <div className="header">
      <div className="headerMenu">
        <div className="headerMenuLogo">
          <h3><span>New</span> Factory</h3>
        </div>
        <div className="headerMenuItems">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#technologies">Technologies</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="headerMenuSocialIcons">
          <div className="iconFacebook">
            <IconFacebook iconWidth='20' iconHeight='20'/>
          </div>
          <div className="iconInstagram">
            <IconInstagram iconWidth='20' iconHeight='20'/>
          </div>
          <div className="iconTwitter">
            <IconTwitter iconWidth='20' iconHeight='20'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
