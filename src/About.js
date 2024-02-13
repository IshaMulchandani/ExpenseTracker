import React from 'react'
import abtImg1 from './Assets/abtImg1.jpg'
import './About.css'
import abtInvoice from './Assets/abtInvoice.jpg'
import abtEntries from './Assets/abtEntries.png'
import abtReports from './Assets/abtReports.png'
import abtTeam1 from './Assets/abtTeam1.jpg'
import abtTeam2 from './Assets/abtTeam2.jpg'
import abtTeam3 from './Assets/abtTeam3.jpg'
import abtTeam4 from './Assets/abtTeam4.jpg'

const About = () => {
  return( 
    <div className='aboutCont'>
      <div className="abtSec1">
        <div className="abtSec1txt">
          <h4>Our History</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa voluptatibus commodi praesentium vitae eligendi, iure blanditiis fuga, animi rem modi iusto rerum? Quasi esse aperiam quibusdam deleniti inventore sequi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ullam at cupiditate corporis expedita placeat in hic itaque! Aliquam animi ut velit veritatis laboriosam laudantium vero ipsum numquam commodi facere?</p>
        </div>
        <img src={abtImg1} alt="" className="abtSec1img" />
      </div>
      <div className="abtSec2">
        <h4>Unique Features</h4>
        <div className="abtSec2cards">
          <div className="abtSec2card" id="abtSec2card1">
            <h5>Invoice Upload</h5>
            <img src={abtInvoice} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem, necessitatibus atque, pariatur, soluta culpa provident quaerat maxime suscipit cupiditate deleniti fugit. Voluptatem minima aliquam tempora, laboriosam esse culpa quaerat.</p>
          </div>
          <div className="abtSec2card" id="abtSec2card2">
            <h5>Quick Entries</h5>
            <img src={abtEntries} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem, necessitatibus atque, pariatur, soluta culpa provident quaerat maxime suscipit cupiditate deleniti fugit. Voluptatem minima aliquam tempora, laboriosam esse culpa quaerat.</p>
          </div>
          <div className="abtSec2card" id="abtSec2card3">
            <h5>Reports</h5>
            <img src={abtReports} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem, necessitatibus atque, pariatur, soluta culpa provident quaerat maxime suscipit cupiditate deleniti fugit. Voluptatem minima aliquam tempora, laboriosam esse culpa quaerat.</p>
          </div>
        </div>
      </div>
      <div className="abtSec3">
        <h4>Our Team</h4>
        <div className="abtSec3cards">
          <div className="abtSec3card" id="abtSec3card1">
            <img src={abtTeam1} alt="" />
            <div className="abtSec3cardtxt">
              <h5>Mr. Mayank Yadav</h5>
              <p>Chief Executive Officer</p>
            </div>
          </div>
          <div className="abtSec3card" id="abtSec3card2">
            <img src={abtTeam2} alt="" />
            <div className="abtSec3cardtxt">
              <h5>Ms. Yashaswini Thakkar</h5>
              <p>Chief Financial Ofiicer</p>
            </div>
          </div>
          <div className="abtSec3card" id="abtSec3card3">
            <img src={abtTeam3} alt="" />
            <div className="abtSec3cardtxt">
              <h5>Mr. Surya Roy</h5>
              <p>Chief Operating Officer</p>
            </div>
          </div>
          <div className="abtSec3card" id="abtSec3card4">
            <img src={abtTeam4} alt="" />
            <div className="abtSec3cardtxt">
              <h5>Ms. Natasha Garg</h5>
              <p>Chief Technical Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
