import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Create() {
 

  let navigate = useNavigate()
  let [name, setname] = useState()
  let [age, setage] = useState()
  let [email, setemail] = useState()
  let [roll, setroll] = useState()

  let submitUser = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/Student", {
      name, age, email, roll
    }).then((res) => {
      // console.log(res.data);
      navigate('/read')
    })
  }


  return (
    <>
    <br/><br/><br/>
      <div className='mx-auto col-7 m-5 data p-3' style={{ boxShadow: " 0px 0px 8px blue", borderRadius: " 10px", background: "#f1f2f6" }}>
        <form onSubmit={submitUser} >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name='name' className="form-control" placeholder="Enter Name"
              onChange={(e) => { setname(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input type="number" name='age' className="form-control" placeholder="Enter age"
              onChange={(e) => { setage(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name='email' className="form-control" placeholder="Enter email"
              onChange={(e) => { setemail(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label className="form-label">Roll</label>
            <input type="number" name='roll' className="form-control" placeholder="Enter roll"
              onChange={(e) => { setroll(e.target.value) }} />
          </div>
          <div className="mb-3 ">

            <input type="Submit" name='sub' className="form-control bg-danger" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Create
