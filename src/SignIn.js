import React, { useState } from "react";
import './SignIn.css'
import About from "./About";
import { useNavigate } from 'react-router-dom';


const SignIn=()=>{
    const navigate=useNavigate()
    const [arrData,setArrData]=useState([])
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    let id=0
    let user_ctr=0
    let pass_ctr=0
    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const signInSubmit=(e)=>{
        e.preventDefault()
        fetch("http://localhost:3000/profiles").then((data)=>data.json()).then((data)=>setArrData(data))
        arrData.map((data,index)=>{
            console.log(data);
            let apiUsername=data.username
            let apiPassword=data.password
            let apiId=data.id
            if(username===apiUsername && password===apiPassword){
                id=apiId
                console.log(id);
                pass_ctr=1
                user_ctr=1
                navigate(`/dashboard/${id}`)
            }
            else{
                let passwordErr=document.getElementById("passwordErr")
                if(user_ctr===0){
                    passwordErr.innerHTML="Username does not exist"
                    passwordErr.style.color="red"
                    passwordErr.style.fontSize="2vh"
                }
                else if(pass_ctr===0){
                    passwordErr.innerHTML="Password is incorrect"
                    passwordErr.style.color="red"
                    passwordErr.style.fontSize="2vh"
                }
            }
        })
    }
    const goToSignUp=()=>{
        navigate('/signIn')
    }
    return(
        <div className="signInCont">
            <h3>Log in to your account</h3>
            <form action="" id="details">
                <div className="usernme">
                    <label htmlFor="">Username</label><br />
                    <input type="text" name="" id="" onChange={handleUsername} placeholder="Enter your username"/>
                </div><br /><br />
                <div className="passwrd">
                    <label htmlFor="">Password</label><br />
                    <input type="text" name="" id="" onChange={handlePassword} placeholder="Enter your password"/><br />
                    <p id="passwordErr"></p>
                </div><br /><br />
                <button className="btn" onClick={signInSubmit}>Login</button>
            </form>
            <p onClick={goToSignUp}>Dont have an account yet? Sign Up</p>
        </div>
    )
}

export default SignIn