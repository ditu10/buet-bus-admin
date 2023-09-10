import React, { useEffect, useRef, useState } from 'react'

const AddBusForm = () => {
    const busName = useRef();
    const busType = useRef();
    const busNo = useRef();
    const dateOfActivation = useRef();
    const driver = useRef();
    const helper = useRef();
    const route = useRef();
    const capacity = useRef();
    const regNo = useRef();

    const [routes, setRoutes] = useState([]);
    const [staffs, setStaffs] = useState([]);

    const routesUrl = 'http://localhost:5000/route';
    const staffUrl = 'http://localhost:5000/staff';

    useEffect(()=>{
        fetch(routesUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setRoutes(data)
        })

        fetch(staffUrl)
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            setStaffs(data);
        })
    },[])

    const url = 'http://localhost:5000/bus'

      const handleSubmit =(e)=>{
        e.preventDefault();
        const newBus = {
            busName : busName.current.value,
            busNo : busNo.current.value,
            regNo : regNo.current.value,
            busType : busType.current.value,
            dateOfActivation : dateOfActivation.current.value.slice(0,10),
            capacity : capacity.current.value,
            driver : driver.current.value,
            helper : helper.current.value,
            route : route.current.value
        }
        if(newBus.helper ===""){delete newBus.helper}
        if(newBus.driver === ""){delete newBus.driver}
        if(newBus.route ===""){delete newBus.route}
        console.log(newBus);
        if(newBus.busName ==="" || newBus.busNo === "" || newBus.regNo === ""){
            window.alert("busName, BusType & regNo are mandatory!");
            return ;
        }

        fetch(url,{
            method : "POST",
            headers : { 'Content-Type': 'application/json' },
            body : JSON.stringify(newBus)
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            if(data?._id){
                window.alert("New Bus Added Successfully");
                window.location.href = '/buses';
            }
        })
        
      }
  return (
    <>
        <div class="p-4 sm:ml-64">
        <p className='text-3xl font-bold text-red-900 text-center'>Add New Bus</p>
        <img src='./Images/buetbus.png' alt='busPic' className='w-1/3 flex items-center mx-auto justify-center'></img>
        <form>
            <div className='w-5/6 mx-auto'>
            
                <div class="grid  md:grid-cols-2 md:gap-6">
                <div class="relative z-0  mb-4 group">
                <label for="busName" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Bus Name</label>
                            <input ref={busName} type="text" id="busName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
                </div>
                <div class="relative z-0  mb-4 group">
                <label for="busNo" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Bus No</label>
                            <input ref={busNo} type="text" id="busNo" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
                </div>
                <div class="relative z-0  mb-4 group">
                <label for="capacity" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Reg No</label>
                            <input ref={regNo} type="text" id="regNo" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
                </div>
                <div class="relative z-0  mb-4 group">
                <label for="capacity" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">capacity</label>
                            <input ref={capacity} type="number" id="capacity" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
                </div>
                <div class="relative z-0  mb-6 group">
                    
                    <label for="bus_type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Bus Type</label>
                    <select ref={busType} id="bus_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Student's Bus</option>
                    <option>Teacher's Bus</option>
                    <option>Staff Bus</option>
                    </select>

                </div>
                
                <div class="relative z-0 w-full mb-6 group">
                    
                    <label for="bus_route" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Route</label>
                    <select ref={route} id="bus_route" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {routes?.map((ele)=>{
                        return(
                        <option value={ele._id}>{ele.routeName}</option>
                        );
                    })}
                    <option value="">Not Assigned</option>
                    </select>
                    
                </div>

                <div class="relative z-0 w-full mb-6 group">
                    
                    <label for="driver" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Driver</label>
                    <select ref={driver} id="driver" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {staffs?.map((ele)=>{
                        if(ele.role === "Driver" && ele.status === "Inactive"){
                            return(
                                <option value={ele._id}>{ele.name} ({ele.staffId})</option>
                                );
                        }
                        return (
                            <></>
                        )
                        
                    })}
                    <option value="">Not Assigned</option>
                    </select>
                    
                </div>

                <div class="relative z-0 w-full mb-6 group">
                    
                    <label for="helper" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Helper</label>
                    <select ref={helper} id="helper" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {staffs?.map((ele)=>{
                        if(ele.role ==='Helper' && ele.status ==="Inactive"){
                            return(
                                <option value={ele._id}>{ele.name} ({ele.staffId})</option>
                                );
                        }   
                        return(
                            <></>
                        )
                        
                        
                        
                    })}
                    <option value="">Not Assigned</option>
                    </select>
                    
                </div>

                <div class="relative z-0  mb-4 group">
                <label for="dataOfActivation" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Extimated Date Of Activation</label>
                            <input ref={dateOfActivation} type="date" id="dateOfActivation" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
                </div>

                
                
                
                
            </div>

          

            
            
            <div className='text-center'> 
            <button onClick={(e)=> handleSubmit(e)} type="submit" class="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
            </div>
        </form>

        </div>
    </>
  )
}

export default AddBusForm
