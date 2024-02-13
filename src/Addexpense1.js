import React, { useEffect, useState } from 'react'
import './Addexpense.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Dropzone from 'react-dropzone'

const Addexpense1 = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const[userData,setUserData]=useState({})
    const [category,setCategory]=useState("")
    const [amount,setAmount]=useState("")
    const [notes,setNotes]=useState("")
    const [file,setFile]=useState(null)
    const [date,setDate]=useState('')
    let newDate=new Date()
    let expenseArr=[]
    // console.log(category);
    const handleCategory=(e)=>{
        setCategory(e.target.value)
    }
    const handleAmount=(e)=>{
        setAmount(e.target.value)
    }
    const handleNotes=(e)=>{
        setNotes(e.target.value)
    }
    const handleFile=(e)=>{
        const fileType=['application/pdf']
        let selectedFile=e.target.files[0]
        if(selectedFile&&fileType.includes(selectedFile.type)){
            let reader=new FileReader()
            reader.readAsDataURL(selectedFile)
            reader.onload=(e)=>{
                setFile(e.target.result)
                console.log(e.target.result);
            }
        }
    }
    useEffect(()=>{
        fetch(`http://localhost:3000/profiles/${id}`).then((data)=>{
            return data.json()
        }).then((data)=>{setUserData(data)
        })
    },[])
    const addExp=(e)=>{
        alert("Expense recorded")
        e.preventDefault()
        let expenseObj={
            category:category,
            amount:amount,
            notes:notes,
            file:JSON.stringify(file),
            date:`${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()}`
        }
       
        expenseArr=userData.expense
        expenseArr=[...expenseArr,expenseObj]
        let userObj={
            id:id,
            name:userData.name,
            email:userData.email,
            phone:userData.phone,
            username:userData.username,
            password:userData.password,
            expense:expenseArr
        }
        console.log(expenseObj);
        fetch(`http://localhost:3000/profiles/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userObj)
        })
    }
    const goToDash=()=>{
        navigate(`/dashboard/${id}`)
    }

    const handleOnChange = (e) => {
        console.log(e.target.files[0]);
        const selectedFile=e.target.files[0]
        setFile(selectedFile);
      };
    console.log(file);
  return (
    <div className='addexpenseCont'>
    <button className='dashButton' onClick={goToDash}><i class="fa fa-long-arrow-left" aria-hidden="true"></i>Dashboard</button>
      <h2>Add an Expense</h2>
      <form action="">
        <label htmlFor="">Category</label><br />
        <select name="" id="" value={category} onChange={handleCategory}>
            <option value="null">Select</option>
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
            <option value="travel">Travel</option>
            <option value="entertainment">Entertainment</option>
            <option value="gifts">Gifts</option>
            <option value="misc">Miscellaneous</option>
        </select><br />
        <label htmlFor="">Amount</label><br />
        <input type="number" placeholder='Enter amount' onChange={handleAmount}/><br /><br />
        <label htmlFor="">Notes</label><br />
        <textarea name="" id="" cols="30" rows="10" placeholder='Enter notes' onChange={handleNotes}></textarea><br /><br />
        <label htmlFor="">Upload Invoice</label><br />
        <input type="file" onChange={handleOnChange} />

        <button onClick={addExp}>Submit</button>
      </form>
    </div>
  )
}

export default Addexpense1
