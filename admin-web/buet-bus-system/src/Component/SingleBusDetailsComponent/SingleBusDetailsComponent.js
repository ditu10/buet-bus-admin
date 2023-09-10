import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const SingleBusDetailsComponent = () => {
  const [enable, setEnable] = useState(true);
  const [status, setStatus] = useState("Active");
  const inactiveTime = useRef();
  
  const [bus, setBus] = useState({})
  const {id} = useParams();
  console.log(id);
  const url = 'http://localhost:5000/bus/'+id;
  console.log(url);
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setBus(data);
    })


    
  },[enable])

  const makeEnable = () =>{
    setStatus("Active");
  }
  const handleDisable = async (e) =>{
    e.preventDefault();
    const delay = inactiveTime.current.value ? inactiveTime.current.value*1000 : 5000;
    setStatus("Inactive");
    const myTimeout = await setTimeout(makeEnable, delay);
    inactiveTime.current.value = 0;
    // console.log(myTimeout);

  }
  const handleEnable = (e) =>{
    e.preventDefault();
    makeEnable();

  }
  return (
    <>
        <div class="p-4 sm:ml-64">
        <p className='text-red-800 font-bold text-3xl mb-8 text-center'>Bus Details</p>
          <div>
            
          </div>
            <div className="mx-20 ">
            <table className="table-fixed mx-auto border-collapse	text-left border-2">
        <tbody>
          <tr >
            <th className='border-2 p-4'>Bus Name</th>
            <td  className='border-2 p-4'>{bus?.busName}</td>
          </tr>
          <tr>
            <th className='border-2 p-4'>Bus No</th>
            <td className='border-2 p-4'>{bus?.busNo}</td>
          </tr>
          <tr>
            <th className='border-2 p-4'>Registration No</th>
            <td className='border-2 p-4'>{bus?.regNo}</td>
          </tr>
          <tr>
            <th className='border-2 p-4'>Bus Type </th>
            <td className='border-2 p-4'>{bus?.busType}</td>
          </tr>
          <tr></tr>
          <tr>
            <th className='border-2 p-4'>Driver</th>
            <td className='border-2 p-4'>
              <Link to={`/EmployeeDetails/${bus?.driver?._id}`}>{bus?.driver?.name}</Link>
            </td>
          </tr>
          <tr>
            <th className='border-2 p-4'>Helper</th>
            <td className='border-2 p-4'>
            <Link to={`/EmployeeDetails/${bus?.helper?._id}`}>{bus?.helper?.name}</Link>
            </td>
          </tr>
          <tr>
            <th className='border-2 p-4'>Route</th>
            <td className='border-2 p-4'>
              <Link to={`/RouteDetails/${bus?.route?._id}`}>{bus?.route?.routeName}</Link>
            </td>
          </tr>
          <tr>
            <th className='border-2 p-4'>Capacity</th>
            <td className='border-2 p-4'>{bus?.capacity}</td>
          </tr>
          
          
        </tbody>
      </table>
          <div className=''></div>
          {/* <p>Enter time in seconds</p>
          <input ref={inactiveTime} min="0" type='number'></input>
        <button onClick={(e) => handleDisable(e)} className='border-2 p-2 mx-1 rounded-full'> disable</button>
        <button onClick={(e) => handleEnable(e)} className='border-2 p-2 mx-1 rounded-full'> enable</button> */}
            </div>
        </div>
    </>
  )
}
