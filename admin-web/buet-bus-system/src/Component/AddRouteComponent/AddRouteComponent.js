import userEvent from '@testing-library/user-event';
import React, { useEffect, useRef, useState } from 'react'
let allPickups = [];

const AddRouteComponent = () => {
    const routeName = useRef();
    const routeId = useRef();
    const departureTime = useRef();
    const pickupPlace = useRef();
    const pickupTime = useRef();
    

    const [pickUps, setpickUps] = useState([]);
    const [time, setTime] = useState("");
    const [place, setPlace] = useState("");
    const url = 'http://localhost:5000/route'
    useEffect(()=>{
        
    },[pickUps])
    
    const handleAddRoute = (e) =>{
        e.preventDefault();
        const sure = window.confirm("Press OK to confirm Adding the route");
        if(!sure){
            return ;
        }
        
        const newRoute = {
            routeName : routeName.current.value,
            routeId : routeId.current.value,
            departureTime : departureTime.current.value,
            pickupPoints : pickUps
        }
        if(newRoute.routeName === "" || newRoute.routeId === "" || newRoute.pickupPoints.length == 0){
            window.alert('Route Name, route Id and pickupPoints are Mandatory!!');
            return ;
        }
        console.log(newRoute);
        routeName.current.value = "";
        routeId.current.value = "";
        departureTime.current.value = "";
        fetch(url,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRoute)
        }).then(res => res.json())
        .then(data => console.log(data))
        window.location.href ='/Routes'
    }

    const handleDeletePickups = (e) =>{
        e.preventDefault();
    }
    

    const handleAddPickups = (e) =>{
        e.preventDefault();
        if(time == "" || place == ""){
            return ;
        }
        // console.log(time, place);
        const newPickup = {
            place : place,
            time : time
        };
        allPickups.push(newPickup);
        setpickUps(allPickups);
        console.log(pickUps);
        pickupPlace.current.value = "";
        pickupTime.current.value = "";
        setPlace("");
        setTime("");
        
        
    }

  return (
    <>
        <div class="p-4 sm:ml-64">
            <p className="text-3xl text-red-900 pb-5 mb-5 font-bold text-center">Add Route</p>
            <form className='w-5/6 '>
                <div className='w-5/6  mx-auto'>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div class="">
                            <label for="routeName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Route Name</label>
                            <input ref={routeName} type="text" id="routeName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Jatrabari" required/>
                        </div>
                        <div class="">
                            <label for="routeId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Route Id</label>
                            <input ref={routeId} type="text" id="routeId" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="R-2" required/>
                        </div>
                        <div class="">
                            <label for="departureTime" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departure Time From BUET</label>
                            <input ref={departureTime} type="text" id="departureTime" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="5.15 pm" required/>
                        </div>
                
                        
                        
                    </div>
                    <p className='text-xl text-red-800 text-center mt-5 underline '>Add Pickup Points and Time</p>
                    <div className="grid md:grid-cols-7 py-5 md:gap-6">
                    <div className=" col-span-3">
                            <label for="pickuplocation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pickup Location</label>
                            <input ref={pickupPlace} onChange={(e)=> setPlace(e.target.value)} type="text" id="pickuplocation" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Bokshibazar" required/>
                        </div>

                        <div className="col-span-3">
                            <label for="pickupTime" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estimated Time</label>
                            <input ref={pickupTime} onChange={(e) => setTime(e.target.value)} type="text" id="pickupTime" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="7.15 am" required/>
                        </div>
                        <button onClick={(e)=> handleAddPickups(e)} type="button" className='rounded-full bg-red-800  text-white mt-7  mx-3'>Add</button>

                        
                    </div>
                    <div>
                            
                            {pickUps.map((ele)=>{
                                return(
                                    <>
                                        <p className='pb-1'>pickup place : <span className='text-red-800'>{ele.place}</span> <span className='ml-10'>time : </span> <span className='text-red-800'>{ele.time}</span> 
                                        {/* <button onClick={(e) => handleDeletePickups(e)} className='rounded-full bg-red-800  text-white px-1  mx-3'> delete</button>  */}
                                        </p>
                                    </>
                                )
                            })}
                    </div>
                    
                    <div className='flex'>
                    <button onClick={(e) => handleAddRoute(e)} type="submit" class="text-white mx-auto mt-4 bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Route</button>
                    </div>
                </div>
            </form>

        </div>
    </>
  )
}

export default AddRouteComponent
