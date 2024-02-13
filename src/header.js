import React, { useRef } from 'react'
import mainLogo from './Assets/mainLogo.png'
import './header.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Header = () => {
  const hamburger=useRef(null)
  const navMenu= useRef(null)
  console.log(hamburger,navMenu);
  const toggleHam=()=>{
    hamburger.current.classList.toggle("active")
    navMenu.current.classList.toggle("active")
  }
  let isOpen=false
  const drop_change=()=>{
    if(isOpen===false){
      isOpen=true
      document.getElementById('arrow').innerHTML="▴"
      document.getElementById('drop_down').style.display="block"
    }
    else{
      isOpen=false
      document.getElementById('arrow').innerHTML="▾"
      document.getElementById('drop_down').style.display="none"
    }
  }
  return (
    <div class='headerCont'>
        <img class='logo' src={mainLogo} alt="" />
        <ul className='nav-menu' ref={navMenu}>
            <li><Link to="/"><button>Home</button></Link></li>
            <li><Link to="/about"><button>About</button></Link></li> 
            <li>
              <button id='profileOption' onClick={drop_change}>Profile <span id="arrow">▾</span></button>
              <ul id="drop_down">
                <li><Link to="/signIn"><button>Sign In</button></Link></li>
                <li><Link to="/signup"><button>Sign Up</button></Link></li>
              </ul>
            </li>
            <li><Link to='/contact'><button>Contact</button></Link></li>  
        </ul>
        <div id="hamburger" ref={hamburger} onClick={toggleHam}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
    </div>
  )
}

export default Header
