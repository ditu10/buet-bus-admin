import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';

export const EditRouteComponent = () => {
    const routeName = useRef();
    const routeId = useRef();
    const departureTime = useRef();
    // const pickupPlace = useRef();
    // const pickupTime = useRef();
    const [pickups, setPickups] = useState([]);
    const [route,setRoute] = useState({})
  const {id} = useParams();
//   console.log(id);
  const url = 'http://localhost:5000/route/'+id ;
  console.log(url);

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setRoute(data);
        setPickups(route.pickupPoints);
        
    })
    console.log(route);
    
  },[])


  const handleDeleteApickup = (e,ele,key) =>{
    e.preventDefault();
    pickups?.splice(key,1);
    const sure = window.confirm("Press yes to delete this pickups");
    if(sure){
        document.getElementById(`id${key}`).className="invisible"
    }
    
    console.log(pickups);
  }


  const handleUpdateApickup = (e,ele,key) =>{
    e.preventDefault();
    const plac = window.prompt("value of new pickup location?");
    const tim = window.prompt("new pickup time?");
    console.log(plac, tim);
    // ele.time = tim;
    // ele.place = place;
    if(plac === "" || tim === ""){
        window.alert("type pickup place and time properly!");
        return ;
    }
    route.pickupPoints[key].time = tim;
    route.pickupPoints[key].place = plac;

    console.log(pickups);

  }

  const hancleAddNewPickups = (e,key) =>{
    e.preventDefault();
    const plac = window.prompt("value of new pickup location?");
    const tim = window.prompt("new pickup time?");
    console.log(plac, tim);
    // ele.time = tim;
    // ele.place = place;
    if(plac === "" || tim === ""){
        window.alert("type pickup place and time properly!");
        return ;
    }
  }

  return (
    <>
        <div class="p-4 sm:ml-64">
        <div className="mx-20">
            <p className='text-red-800 font-bold text-3xl my-5 text-center'>Edit Route</p>
        <form className='w-5/6 '>
                <div className='w-5/6  mx-auto'>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div class="">
                            <label for="routeName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Route Name</label>
                            <input ref={routeName} type="text" id="routeName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={route?.routeName} placeholder="Jatrabari" required/>
                        </div>
                        <div class="">
                            <label for="routeId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Route Id</label>
                            <input ref={routeId} type="text" id="routeId" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={route?.routeId} placeholder="R-2" required/>
                        </div>
                        <div class="">
                            <label for="departureTime" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departure Time From BUET</label>
                            <input ref={departureTime} type="text" id="departureTime" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={route?.departureTime} placeholder="5.15 pm" required/>
                        </div>
                
                        
                        
                    </div>
                    {/* <p className='text-xl text-red-800 text-center mt-5 underline '>Add Pickup Points and Time</p> */}
                    <div className="grid md:grid-cols-7 py-5 md:gap-6">
                    {/* <div className=" col-span-3">
                            <label for="pickuplocation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pickup Location</label>
                            <input ref={pickupPlace} onChange={(e)=> setPlace(e.target.value)} type="text" id="pickuplocation" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Bokshibazar" required/>
                        </div>

                        <div className="col-span-3">
                            <label for="pickupTime" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estimated Time</label>
                            <input ref={pickupTime} onChange={(e) => setTime(e.target.value)} type="text" id="pickupTime" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="7.15 am" required/>
                        </div> */}
                        {/* <button onClick={(e)=> handleAddPickups(e)} type="button" className='rounded-full bg-red-800  text-white mt-7  mx-3'>Add</button> */}

                        
                    </div>
                   
                    
                    {/* <div className='flex'>
                    <button onClick={(e) => handleAddRoute(e)} type="submit" class="text-white mx-auto mt-4 bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Route</button>
                    </div> */}
                </div>
            </form>
                    <div>
                        
                        <div className="grid grid-cols-1 gap-4">
                            <p className='text-center'>Pickup Points And Times in this Route </p>
                            {route?.pickupPoints?.map((ele,key=0) => {
                                
                                console.log(key);
                                return (
                                    <>
                                        <button onClick={(e)=> hancleAddNewPickups(e,key)} className='text-sm underline'>add a pickups here</button>
                                        <div id={"id" + key} className="bg-gray-200 mx-auto sm:w-full md:w-5/6 lg:w-1/2 shadow-lg  text-center  py-3 px-5 rounded-lg">
                                            <div className="grid grid-cols-2 text-sm text-gray-500">
                                                <p className='text-left py'>{ele.place}</p>
                                                <p className='text-right'>{ele.time}</p>
                                            </div>
                                            <button onClick={(e) => handleDeleteApickup(e,ele,key)} className='border-2 text-sm rounded-full bg-gray-400 px-2 py-1 mx-2'>delete</button>
                                            <button onClick={(e) => handleUpdateApickup(e,ele,key)} className='border-2 text-sm rounded-full bg-gray-400 px-2 py-1 mx-2'>update</button>
                                            
                                        </div>
                                        
                                    </>
                                );
                                key++;
                            })}
                        </div>
                    </div>
          </div>
        </div>
    </>
  )
}
