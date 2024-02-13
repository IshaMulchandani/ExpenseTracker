import React from 'react'
import home1 from './Assets/home1.jpg'
import './Home.css'
import home2 from './Assets/home2.jpg'
import home3 from './Assets/home3.jpg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/signup')
    let button=document.getElementById("homeAccCreateButt")
    button.style.width="12vw"
    button.style.height="7vh"
    button.style.backgroundColor="rgb(51,51,51)"
    button.style.color="rgb(127,195,126)"
  }
  return (
    <div class='homeCont'>
      <div className="homeSec1">
        <img  className="homeImg1" src={home1} alt="" />
        <div className="homeSec1txt">
            <h4>Save More</h4>
            <p>Saving money is vital for financial stability, offering a safety net for unexpected expenses and emergencies. It provides a foundation for long-term goals like homeownership, education, and retirement, fostering financial independence and reducing stress. By cultivating a savings habit, individuals can break free from living paycheck to paycheck, gaining the flexibility to seize opportunities such as starting a business or investing for the future. In essence, saving money is a strategic and empowering practice that ensures a resilient and prosperous financial future.</p>
        </div>
      </div>
      <div className="homeSec2">
        <div className="homeSec2txt">
            <h4>Benefits of Saving</h4>
            <p>
                <li>Financial Security</li>
                <li>Goal Achievement</li>
                <li>Reduced Stress</li>
                <li>Opportunity Seizure</li>
                <li>Financial Independence</li>
            </p>
        </div>
        <img src={home2} alt="" className="homeImg2" />
      </div>
      <div className="homeSec3">
        <img src={home3} alt="" className="homeSec3img" />
        <div className="homeSec3txt">
          <h4>Create a FREE Account Today!</h4>
          <p>Create a free account on money checker and start saving today. With a daily limit reminder and expense tracker, you will see your savings grow right in front of your eyes. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti perferendis voluptatum atque quasi veniam dolorum libero esse, cupiditate laborum dignissimos voluptates vero explicabo temporibus! Quod nihil placeat ipsum dignissimos odio!</p>
          <button id='homeAccCreateButt' onClick={handleClick}>Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default Home
