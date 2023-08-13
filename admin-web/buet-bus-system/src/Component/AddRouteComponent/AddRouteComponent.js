import React, { useState } from 'react'

const AddRouteComponent = () => {
    const [pickUps, setpickUps] = useState([]);
    const [time, setTime] = useState("");
    const [place, setPlace] = useState("");



  return (
    <>
        <div class="p-4 sm:ml-64">
            <p className="text-3xl text-red-900 pb-5 mb-5 font-bold text-center">Add Route</p>
            <form className='w-5/6 '>
                <div className='w-5/6  mx-auto'>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div class="">
                            <label for="routeName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Route Name</label>
                            <input type="text" id="routeName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Jatrabari" required/>
                        </div>
                        <div class="">
                            <label for="bus" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Bus</label>
                            <input type="text" id="bus" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Dhaka metro Cha" required/>
                        </div>
                        <div class="">
                            <label for="driver" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Driver</label>
                            <input type="text" id="driver" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Kalam Mia" required/>
                        </div>
                        <div class="">
                            <label for="helper" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose helper</label>
                            <input type="text" id="helper" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Kolimuddin" required/>
                        </div>
                        <div class="">
                            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date for Activating</label>
                            <input type="date" id="date" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
                        </div>
                
                        
                        
                    </div>
                    <p className='text-xl text-red-800 text-center mt-5 underline '>Add Pickup Points and Time</p>
                    <div className="grid md:grid-cols-7 py-5 md:gap-6">
                    <div className=" col-span-3">
                            <label for="pickuplocation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pickup Location</label>
                            <input onChange={(e)=> setPlace(()=> e.target.value)} type="text" id="pickuplocation" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Bokshibazar" required/>
                        </div>

                        <div className="col-span-3">
                            <label for="pickupTime" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estimated Time</label>
                            <input onChange={(e)=> setTime(()=> e.target.value)} type="time" id="pickupTime" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Kolimuddin" required/>
                        </div>
                        <button onClick={(e)=> console.log(time, place)} type="button" class="text-white mt-4 text-xs bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add pickkup point</button>
                    </div>
                    <button type="submit" class="text-white mt-4 bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Route</button>
                </div>
            </form>

        </div>
    </>
  )
}

export default AddRouteComponent
