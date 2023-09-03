import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const RoutesComponent = () => {
  const [reload, setReload] = useState(false);
  const [routes, setRoutes] = useState([]);
  const linkto=`/RouteDetails`;
  const icon = './Images/Route.png';
  const url = 'http://localhost:5000/route'
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setRoutes(data))
  },[reload])

  const handleDeleteRouteBtn = (id) =>{
    try{
        const sure = window.confirm("Press OK to confirm delete the route");
        if(!sure){
            return ;
        }
        const url = 'http://localhost:5000/route/'+id ;
        // console.log(url);
        fetch(url,{
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({})
        }).then(res => {
            console.log(res)
            if(res.status === 200){
                window.alert("Deleted Successfully");
            }
        })
        setReload(!reload)
        
    }catch(err){
        console.log(err)
    }
  }
  
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
                                        
                                        <div className="bg-gray-200 shadow-lg text-red-800 text-center py-4 rounded-lg">
                                        <Link key={ele._id} to={`/RouteDetails/${ele._id}`}>
                                            <div className="bg-black-200 pb-3">
                                                <p className='text-center py-2 '>{ele.routeName}</p>
                                                
                                                <img className='mx-auto' src={icon} alt="" width={50} />
                                            </div>
                                        </Link>
                                        <Link key={ele._id} to={`/EditRoute/${ele._id}`}>
                                            <button class="hover:bg-transparent bg-red-800 text-gray-100 font-semibold hover:text-red-800 py-1 px-2 border hover:border-red-900 border-transparent rounded-full mx-1">
                                                Update
                                            </button> 
                                            </Link>
                                                                                                      
                                            <button onClick={(e)=> handleDeleteRouteBtn(ele._id)} class="hover:bg-transparent bg-red-800 text-gray-100 font-semibold hover:text-red-800 py-1 px-2 border hover:border-red-900 border-transparent rounded-full mx-1">
                                                Delete                                                    </button>
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

export default RoutesComponent
