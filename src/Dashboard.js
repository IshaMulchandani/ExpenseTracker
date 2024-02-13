import React, { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Dasboard.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const Dashboard = () => {
  const { id }=useParams()
  const [userData,setUserData]=useState([])
  let isOpen=false
  useEffect(()=>{
    const fetchUserdata=async ()=>{
      try{
        const response= await axios.get(`http://localhost:3000/profiles/${id}`).then(response=>setUserData(response.data))
      }
      catch (error){
        console.log('error fetching data: ',error)
        console.log('Error response:', error.response);
        console.log('Error request config:', error.config);
      }
    }
    fetchUserdata()
  },[id])
  const navigate=useNavigate()
  const goToChangepassword=()=>{
    navigate(`/changepassword/${userData.id}`)
  }
  const logout=()=>{
    navigate('/')
    alert('You have been logged out')
  }
  const goToAddexpense=()=>{
    navigate(`/addexpense/${id}`)
  }
  const goToSeeexpenses=()=>{
    navigate(`/seeexpense/${id}`)
  }
  const drop_down=()=>{
    if(isOpen===false){
      isOpen=true
      document.getElementById('setCont').style.display="block"
    }
    else{
      isOpen=false
      document.getElementById('setCont').style.display="none"
    }
  }
  return (
    <div className="dashboardMainCont">
    <br /><br />
      <div className="settButton">
      <button className='setIcon' onClick={drop_down}>
        <i class="fa fa-cog" aria-hidden="true"></i>
        <ul id="setCont">
          <li><button onClick={goToChangepassword}>Change Password</button></li>
          <li><button onClick={logout}>Logout</button></li>
        </ul>
      </button>
      </div>
      <div className='dashboardCont'>
        <div className="dashSec1">
          <div className="addExp">
            <button onClick={goToAddexpense}>+</button>
            <h3>Add expense</h3>
          </div><br />
          <div className="expReport">
            <button onClick={goToSeeexpenses}><i class="fa fa-eye" aria-hidden="true"></i></button>
            <h3>See all expenses</h3>
          </div>
        </div>
        <div className="dashSec2"></div>
        <div className="dashSec3">
        <div className="profileCircle">
          <i class="fa fa-user" aria-hidden="true"></i>
        </div>
        {userData && (
        <h1>Hello, {userData.name} !</h1>
        )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
