import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Changepassword.css'
import axios from 'axios'

const Changepassword = () => {
  const { id }=useParams()
    const navigate=useNavigate()
    const [newPw,setNewPw]=useState("")
    const [newPwAgn,setNewPwAgn]=useState("")
    const [arrData,setArrData]=useState([])
    const goToDashboard=()=>{
      navigate(`/dashboard/${id}`)
    }
    const handleNewPwAgn=(e)=>{
        setNewPwAgn(e.target.value)
    }
    const handleNewPw=(e)=>{
        setNewPw(e.target.value)
    }
    useEffect(()=>{
      const fetchUserData=async ()=>{
        try{
          const response= await axios.get(`http://localhost:3000/profiles/${id}`).then(response=>setArrData(response.data))
        }
        catch(error){
          console.log(error);
        }
      }
      fetchUserData()
    },[id])
    const handleClick=(e)=>{
      e.preventDefault()
      if(newPw===""||newPwAgn===""){
        let verErr=document.getElementById('verErr')
        verErr.innerHTML="You cant't leave any field empty"
      }
      else if(newPw!==newPwAgn){
        let verErr=document.getElementById('verErr')
        verErr.innerHTML="The passwords don't match. Try Again!"
      }
      else{
        alert("Password has been changed!")
        fetch(`http://localhost:3000/profiles/${id}`,{
          method:"PUT",
          headers:{
            "Content-Type":'application/json'
          },
          body:JSON.stringify({
            id:arrData.id,
            name:arrData.name,
            email:arrData.email,
            phone:arrData.phone,
            username:arrData.username,
            password:newPw

          })
        })
      }
    }
  return (
    <div className='changePasswordCont'>
    <br /><br />
      <form action="" className="chngPwForm">
        <label htmlFor="">Enter New Password</label><br />
        <input type="password" id='newPw' onChange={handleNewPw}/><br /><br />
        <label htmlFor="">Enter New Password Again</label><br />
        <input type="password" id='newPwAgn' onChange={handleNewPwAgn}/><br />
        <p id="verErr"></p>
        <br />
        <button onClick={handleClick}>Submit</button>
        <button id='dashButton' onClick={goToDashboard}>Go to dashboard</button>
      </form>
    </div>
  )
}

export default Changepassword
