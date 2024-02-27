import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Update() {
  let {id}=useParams()
  let navigate=useNavigate()
  let [name,setname]=useState()
  let [age,setage]=useState()
  let [email,setemail]=useState()
  let [roll,setroll]=useState()

  useEffect(()=>{
    axios.get("http://localhost:3000/Student/"+id).then((res)=>{
      // console.log(res.data);
      setname(res.data.name)
      setage(res.data.age)
      setemail(res.data.email)
      setroll(res.data.roll)
    })
  },[id])

  let updateUser=(e)=>{
    e.preventDefault()
    axios.put("http://localhost:3000/Student/"+id,{
      name,age,email,roll
    }).then((res)=>{
      navigate('/read')
    })
  }
  return (
    <>
      <br /><br/><br/><br/>
      <div className='mx-auto col-7 m-5 data p-3' style={{ boxShadow: " 0px 0px 8px tomato", borderRadius: " 10px", background: "#f1f2f6" }}>
      <form onSubmit={updateUser}>
        <div className="mb-3 mt-2">
          <label className="form-label">Name</label>
          <input type="text" name='name' className="form-control" placeholder="Enter Name" 
          value={name} onChange={(e)=>{setname(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" name='age' className="form-control" placeholder="Enter age" 
           value={age} onChange={(e)=>{setage(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name='email' className="form-control" placeholder="Enter email" 
           value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Roll</label>
          <input type="number" name='roll' className="form-control" placeholder="Enter roll" 
           value={roll} onChange={(e)=>{setroll(e.target.value)}}/>
        </div>
        <div className="mb-3 col-3">
          <input type="Submit" name='sub' className="form-control bg-danger" value="Update" 
           onClick={updateUser}/>
        </div>
      </form>
      </div>
    </>
  )
}

export default Update
