import React from 'react'
import './Contact.css'
import contactImg1 from './Assets/contactImg1.png'
import contactGmail from './Assets/contactGmail.png'
import contactWA from './Assets/contactWA.png'
import contactLocation from './Assets/contactLocation.png'

const Contact = () => {
  return (
    <div className='contactCont'>
      <h2>We are here to listen <img src={contactImg1} alt="" /></h2>
      <div className="contactSec1">
        <br />
        <h4>Contact Form</h4>
        <form action="https://formspree.io/f/xkndnlpr" method="post">
            <input type="text"  name='Name'placeholder='Name' required/><br /><br />
            <input type="email" name="Email" id="" placeholder='Email Address' required/><br /><br />
            <input type="text" name='Subject' placeholder='Subject'/><br /><br />
            <textarea name="message" id="" cols="30" rows="10">Enter Message</textarea><br /><br />
            <button type='submit'>Submit</button><br /><br />
        </form>
      </div>
      <div className="contactSec2">
        <h5>Reach Out To Us</h5>
        <div className="contactCards">
            <div className="contactCard" id="contactCard1">
                <img src={contactGmail} alt="" />
                <p><a href="mailto:ishamulani1@gmail.com?subject=Query from Money Checker">ishamulani1@gmail.com</a></p>
            </div>
            <div className="contactCard" id="contactCard2">
                <img src={contactWA} alt="" />
                <p>+91 91377 78487</p>
            </div>
            <div className="contactCard" id="contactCard3">
                <img src={contactLocation} alt="" />
                <p>11/2, Ground floor, Anand Niwas, Andheri West, Mumbai.</p>
            </div>
        </div>
      </div>
    </div>
 
  )
}

export default Contact
