import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
        <div className="iconFooter">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
        </div>
        <ul>
          <NavLink>
              Home
          </NavLink>
          <NavLink>
           Help/FAQ
          </NavLink>
          <NavLink>
            Services
          </NavLink>
          <NavLink>
           privacy
          </NavLink>
          <NavLink>
           Contact
          </NavLink>
        </ul>
        <hr />
          <p style={{marginTop: 'auto'}}>copyright &copy; 2024|<b>The JerryJakes Shopping Moore</b>. All right reserved.</p>
        </div>
    </div>
  )
}
