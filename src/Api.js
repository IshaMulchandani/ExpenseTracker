import React, { useEffect } from 'react'

const Api = () => {

  const handleClick=()=>{
    //delete
    // fetch("http://localhost:3000/profiles/1",{method:"DELETE",headers:{"Content-Type":"application/json"}})


    //Post: adding data to server
  //   fetch("http://localhost:3000/profiles", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: "Sachin",
  //       age: 28
  //     })
  //   })
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! Status: ${response.status}`);
  //   }
  //   return response.json();
  // })

  //Put: updating existing data
  fetch("http://localhost:3000/profiles/8f46",{
    method:"PUT",
    headers:{
      'Content-Type': "application/json"
    },
    body:JSON.stringify({age:24,name:"Yahya"})
  }).then((res)=>alert("Updated")).catch((err)=>console.log(err))
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Api
