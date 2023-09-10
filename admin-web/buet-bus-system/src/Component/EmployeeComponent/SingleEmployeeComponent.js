import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

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
      <p className='text-center mt-10 text-3xl text-red-800'>User Profile</p>
      <div className='flex items-center justify-center mt-6'>
        
      <table className="table-fixed border-collapse	text-left border-2">
        <tbody>
          <tr >
            <th className='border-2 p-4'>Name</th>
            <td  className='border-2 p-4'>{staff.name}</td>
          </tr>
          <tr>
            <th className='border-2 p-4'>Staff ID</th>
            <td className='border-2 p-4'>{staff.staffId}</td>
          </tr>
          <tr>
            <th className='border-2 p-4'>Role</th>
            <td className='border-2 p-4'>{staff.role}</td>
          </tr>
          <tr>
            <th className='border-2 p-4'>Date Of Birth</th>
            <td className='border-2 p-4'>{staff.dob?.slice(0,10)}</td>
          </tr>
          <tr>
            <th className='border-2 p-4'>NID</th>
            <td className='border-2 p-4'>{staff.NID}</td>
          </tr>
          <tr>
            <th className='border-2 p-4'>License</th>
            <td className='border-2 p-4'>{staff.license}</td>
          </tr>
          <tr>
            <th className='border-2 p-4'>Mobile</th>
            <td className='border-2 p-4'>{staff.mobile}</td>
          </tr>
          <tr>
            <th className='border-2 p-4'>Status</th>
            <td className='border-2 p-4'>{staff.status}</td>
          </tr>
          <tr>
            <th className='border-2 p-4'>Bus</th>
            <td className='border-2 p-4 text-red-800'>
              <Link to={'/BusDetails/' + staff?.bus?._id}>
                {staff?.bus?.busName}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      </div>

        
      </div>
    </>
  )
}
