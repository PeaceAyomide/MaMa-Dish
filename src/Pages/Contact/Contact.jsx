import React, { useState } from 'react'
import './Contact.css'
import { CiMail } from "react-icons/ci";
import { MdPhone } from "react-icons/md";
const Contact = () => {

  
  return (
    <div className='contactus'>
      
      <div className="contactwords">
        <h2>Contact <span>Us</span></h2>
        <p> Not sure what food you need? our chefs will be happy to listen to you and suggest food delicacy you hadnt considered</p>
        <div className='email'>
        <CiMail />mamadish@gmail.com
        </div>
        <div className="call">
        <MdPhone />Call +2348102608378
        </div>
      </div>
      <div className="contactbox">
        <h3>We'd love to hear from you! Let's get in touch</h3>
        <div className="input">
        <input className='name' type="text"  id="name" placeholder="NAME" name="name" value="" required/>
          <input className='email1' type="email" id='email' placeholder='EMAIL' />
          <textarea className='message' rows="10" placeholder="MESSAGE" name="message" required></textarea>
          <button className='contactbtn'>Send Message</button>
        </div>
        </div>
    </div>
  )
}

export default Contact