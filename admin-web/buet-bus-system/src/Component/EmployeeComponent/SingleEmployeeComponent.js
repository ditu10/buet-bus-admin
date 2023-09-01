import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const SingleEmployeeComponent = () => {
  const [staff, setStaff] = useState({})
  const {id} = useParams();
  console.log(id);
  const url = 'http://localhost:5000/Staff/'+id ;
  console.log(url);
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setStaff(data))
  },[])
  
  return (
    <>
      <div class="p-4 sm:ml-64">
        <div className="mx-20">
            <h1>Name : {staff.name}</h1>
            <p>Staff ID : {staff.staffId}</p>
            <p>Role : {staff.role}</p>
            <p>Date of Birth : {staff.dob}</p>
            <p>Licence : {staff.licence? staff.licence : "Not Given"}</p>
            <p>Mobile No : {staff.mobileNo? staff.mobileNo : "Not Given"}</p>
        </div>
        
      </div>
    </>
  )
}
