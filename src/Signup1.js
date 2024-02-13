import React, { useState } from "react";
import './SignUp.css'
import { useNavigate } from 'react-router-dom'

const Signup1=()=>{
    const navigate=useNavigate()
    let dataLength=0
    let newId=0
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState(0)
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePhone=(e)=>{
        setPhone(e.target.value)
    }
    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    const signUpSubmit=(e)=>{
        e.preventDefault()
        if(name===""){
            let nameErr=document.getElementById('nameErr')
            nameErr.innerHTML="Please enter name"
        }
        else if(email===""){
            let emailErr=document.getElementById('emailErr')
            emailErr.innerHTML='Please enter email address.'
        }
        else if(email.includes('@')!=true && email.includes('.')){
            let emailErr=document.getElementById('emailErr')
            emailErr.innerHTML='Please enter a valid email address.'
        }
        else if(phone==0){
            let phoneErr=document.getElementById('phoneErr')
            phoneErr.innerHTML='Please enter a phone number'
        }
        else if(phone.toString().length!=10){
            let phoneErr=document.getElementById('phoneErr')
            phoneErr.innerHTML='Please enter a valid phone number'
        }
        else if(username===""){
            let usernameErr=document.getElementById("usernameErr")
            usernameErr.innerHTML="Enter a username"
        }
        else if(password===''){
            let passwordErr=document.getElementById("passwordErr")
            passwordErr.innerHTML="Enter a password"
        }
        else if(password.length<8){
            let passwordErr=document.getElementById("passwordErr")
            passwordErr.innerHTML="Password must be atleast 8 characters"
        }
        else{
            alert('Account has been created!')
            fetch('http://localhost:3000/profiles')
            .then((data)=>data.json())
            .then((data)=>{
                dataLength=data.length
                newId=dataLength+1
                return newId
            })
            .then((newId)=>{
                navigate('/signIn')
                return fetch('http://localhost:3000/profiles',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        id:newId,
                        name:name,
                        email:email,
                        phone:phone,
                        username:username,
                        password:password,
                        expense:[]
                    })
                })
            })
        }
    }
    const goToSignIn=()=>{
        navigate('/signIn')
    }
    return(
        <div className="signUpCont">
            <h3>Create A New Account</h3>
            <form action="" className="signUpForm">
                <input className="inpField" type="text" onChange={handleName} placeholder="Enter Full Name*"/><br /><p id="nameErr"></p><br />
                <input className="inpField" type="email" onChange={handleEmail} placeholder="Enter email address*"/><br /><p id="emailErr"></p><br />
                <input className="inpField" type="number" onChange={handlePhone} placeholder="Enter phone number"/><br /><p id="phoneErr"></p><br />
                <input className="inpField" type="text" onChange={handleUsername} placeholder="Enter a username"/><br /><p id="usernameErr"></p><br />
                <input className="inpField" type="text" onChange={handlePassword} placeholder="Enter Password"/><br /><p id="passwordErr"></p><br />
                <button onClick={signUpSubmit}>Create Account</button>
            </form>
                <p onClick={goToSignIn}>Already have an account? Sign in</p>
        </div>
    )
}

export default Signup1