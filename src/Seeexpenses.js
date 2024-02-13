import React, { useEffect, useState } from 'react'
import './Seeexpenses.css'
import { useNavigate, useParams } from 'react-router-dom'

const Seeexpenses = () => {
    const { id }=useParams()
    const [expense,setExpense]=useState([])
    const [search,setSearch]=useState("")
    const navigate=useNavigate()
    const goToDash=()=>{
        navigate(`/dashboard/${id}`)
    }
    useEffect(()=>{
        fetch(`http://localhost:3000/profiles/${id}`).then((data)=>data.json()).then((data)=>{
            console.log(data.expense);
            setExpense(data.expense)
        })
    },[id])
    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }
    return (
        <div className='SeeexpensesCont'>
        <br />
            <div className="SeeexpensesNav">
                <button onClick={goToDash} id='backToDash'><i class="fa fa-long-arrow-left" aria-hidden="true"></i>Dashboard</button>
                <div className="searchBar">
                    <input type="text" onChange={handleSearch} placeholder='Search in Category' />
                    {/* <button className="searchButt"><i class="fa fa-search" aria-hidden="true"></i></button> */}
                </div>
            </div><br /><br />
            <div className="tableCont">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Notes</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {expense.length === 0 ? (
                            <tr>
                                <td colSpan="4">No expenses recorded</td>
                            </tr>
                        ) : (
                            expense.map((expenseItem, index) => (
                                search==="" ? (
                                <tr key={index}>
                                    <td>{expenseItem.date}</td>
                                    <td>{expenseItem.category}</td>
                                    <td>{expenseItem.notes}</td>
                                    <td>{expenseItem.amount}</td>
                                </tr>):expenseItem.category.includes(search) ? (
                                    <tr key={index}>
                                    <td>{expenseItem.date}</td>
                                    <td>{expenseItem.category}</td>
                                    <td>{expenseItem.notes}</td>
                                    <td>{expenseItem.amount}</td>
                                    </tr>
                                ):(
                                    console.log("invalid category")
                                )
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Seeexpenses
