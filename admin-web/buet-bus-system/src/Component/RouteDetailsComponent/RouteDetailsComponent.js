import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const RouteDetailsComponent = () => {
  const [route,setRoute] = useState({})
  const {id} = useParams();
  const [bus, setBus] = useState([])
//   console.log(id);
  const url = 'http://localhost:5000/route/'+id ;
  console.log(url);

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setRoute(data);
        
    })
    // fetch('http://localhost:5000/bus/'+route.bus)
    // .then(res => res.json())
    // .then(data =>{
    //     setBus(data)
    // })
    console.log(route);
    
  },[])

  return (
    <>
        <div class="p-4 sm:ml-64">
        <div className="mx-20">
                    <div>
                        <div className="p-10">
                            <h1 className="text-3xl text-center text-red-900 font-bold">Route Details</h1>
                        </div>
                        <div className='text-center mb-5'>
                            <p>Route Name : <span className='text-red-800'>{route.routeName}</span></p>
                            <p>Route ID : <span className='text-red-800'>{route.routeId}</span></p>
                            <p>Departure Time from BUET : <span className='text-red-800'>{route.departureTime}</span></p>
                        </div>
                        <p className='text-center'>Available Bus in this route</p>
                        <ul className='text-center pb-8'>
                            {route?.bus?.map((ele)=>{
                                return(
                                    <Link to={`/BusDetails/${ele._id}`}><li >{ele.busName}</li></Link>
                                )
                            })}
                        </ul>
                        <div className="grid grid-cols-1 gap-4">
                            <p className='text-center'>Pickup Points And Times in this Route </p>
                            {route.pickupPoints?.map((ele) => {
                                return (
                                    <>
                                        <div className="bg-gray-200 mx-auto sm:w-full md:w-5/6 lg:w-1/2 shadow-lg  text-center  py-3 px-5 rounded-lg">
                                            <div className="grid grid-cols-2 text-sm text-gray-500">
                                                <p className='text-left py'>{ele.place}</p>
                                                <p className='text-right'>{ele.time}</p>
                                            </div>
                                            <div>
                                                <p>{ele.reqMsg}</p>
                                            </div>
                                        </div>
                                        
                                    </>
                                );
                            })}
                        </div>
                    </div>
          </div>
        </div>
    </>
  )
}

export default RouteDetailsComponent
