import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const RoutesComponent = () => {
  const [routes, setRoutes] = useState([])
  const linkto=`/RouteDetails`;
  const icon = './Images/Route.png';
  const url = 'http://localhost:5000/route'
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setRoutes(data))
  },[])
  
  return (
    <>
        <div class="p-4 sm:ml-64">
        <div className="mx-20">
                    <div>
                        <div className="p-10">
                            <h1 className="text-3xl text-center text-red-900 font-bold">Routes</h1>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {routes.map((ele) => {
                                // console.log(ele.routeid)
                                return (
                                    <>
                                        <Link key={ele._id} to={`/RouteDetails/${ele._id}`}>
                                        <div className="bg-gray-200 shadow-lg text-red-800 text-center py-4 rounded-lg">
                                            <div className="bg-black-200">
                                                <p className='text-center py-2 '>{ele.routeName}</p>
                                                
                                                <img className='mx-auto' src={icon} alt="" width={50} />
                                            </div>
                                        </div>
                                        </Link>
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

export default RoutesComponent
