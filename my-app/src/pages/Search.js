import React, { useState } from 'react'
import axios from "axios"
function Search() {
  let [searchkey, setsearchkey] = useState()
  let [val, setval] = useState()

  let searchUser = (key) => {
    axios.get("http://localhost:3000/Student?name=" + key).then((res) => {
      // console.log(res.data);
      setval(res.data)
    })
  }
  return (
    <>
      <br /> <br /><br />
      <div className='mx-auto col-7 m-5 data p-3' style={{ boxShadow: " 0px 0px 8px tomato", borderRadius: " 10px", background: "#f1f2f6" }}>

      <div className="input-group mb-3 mt-4">
        <input type="text" className="form-control" placeholder="Search Data"
          onChange={(e) => { setsearchkey(e.target.value) }} />
        <span className="input-group-text" ><button className='btn btn-outline-danger'
          onClick={() => { searchUser(searchkey) }} >Search</button></span>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Roll</th>
          </tr>
        </thead>
        {val ? <tbody>
          {val.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.roll}</td>
              </tr>
            )
          })}
        </tbody> : <p>No Data</p>}
      </table>
      </div>
      <br/> <br/> <br/>
    </>
  )
}

export default Search
