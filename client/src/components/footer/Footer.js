import React from 'react'
import './footer.css'
import IconFacebook from "../../svg/IconFacebook.svg.js";
import IconInstagram from "../../svg/IconInstagram.svg.js";
import IconTwitter from "../../svg/IconTwitter.svg.js";

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <div className="footer">
      <div className='footerContent'>
        <div className='footerContentInfo'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto commodi culpa dignissimos dolor dolores eius eum fugiat,
            harum in ipsa minima molestias odit quasi reprehenderit sint tempora. Quia, tempore?
          </p>
        </div>
        <div className='footerContentAddress'>
          <p>999 Canada Pl, Vancouver, BC V6C 3T4</p>
          <p>+16046659000</p>
        </div>
        <div className="footerMenu">
          <div className='footerMenuFollowUs'>
            <h3>Follow <span>us</span></h3>
          </div>
          <div className='footerMenuFollowUsSocialIcons'>
            <a href="#Facebook"><IconFacebook iconFill='#ffffff'iconWidth='25' iconHeight='25'/></a>
            <a href="#Istagram"><IconInstagram iconFill='#ffffff'iconWidth='25' iconHeight='25'/></a>
            <a href="#Twitter"><IconTwitter iconFill='#ffffff' iconWidth='25' iconHeight='25'/></a>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <p>© Copyright {currentYear} NewFactory Inc. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
