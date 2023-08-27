import React, { useRef } from 'react'

const AddBusForm = () => {
    const busName = useRef();
    const busType = useRef();
    const busNo = useRef();
    const dateOfActivation = useRef();
    const driverName = useRef();
    const helperName = useRef();
    const routeName = useRef();

    const allRoutes = [
        {routeName:'Uttara', routeid:1},
        {routeName:'Mirpur', routeid:2},
        {routeName:'Badda', routeid:3},
        {routeName:'SadarGhat', routeid:4},
        {routeName:'Gabtoli', routeid:5},
        {routeName:'Tongi', routeid:6},
        {routeName:'Gazipur', routeid:7},
        {routeName:'Banani', routeid:8},
        {routeName:'Mohammadpur', routeid:9},
      ];

      const handleSubmit =(e)=>{
        e.preventDefault();
        const newbusName = busName.current.value;
        const newbusNo = busNo.current.value;
        const newbusType = busType.current.value;
        const newdate = dateOfActivation.current.value;
        const newdriverName = driverName.current.value;
        const newhelperName = helperName.current.value;
        const newrouteName = routeName.current.value;

        const busData = {
            newbusName,
            newbusNo,
            newbusType,
            newdate,
            newdriverName,
            newhelperName,
            newrouteName
            
        }
        console.log(busData);
        fetch('http://localhost:5000/bus',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(busData)
        }).then(res => res.json())
        .then(data => console.log(data))
      }
  return (
    <>
        <div class="p-4 sm:ml-64">
        <p className='text-3xl font-bold text-red-900 text-center'>Add New Bus</p>
        <img src='./Images/buetbus.png' alt='busPic' className='w-1/3 flex items-center mx-auto justify-center'></img>
        <form>
            <div className='w-5/6 mx-auto'>
            
                <div class="grid  md:grid-cols-2 md:gap-6">
                <div class="relative z-0  mb-6 group">
                    <input ref={busName} type="text" name="bus_name" id="bus_name" class="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label for="bus_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Bus Name</label>
                </div>
                <div class="relative z-0  mb-6 group">
                <input ref={busNo} type="text" name="bus_number" id="bus_number" class="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label for="bus_number" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Bus Number</label>
                </div>
                <div class="relative z-0  mb-6 group">
                    <input ref={dateOfActivation} type="date" name="activating_date" id="activating_date" class="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label for="activating_date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date for Activating</label>
                </div>
                <div class="relative z-0  mb-6 group">
                <input ref={driverName} type="text" name="driver" id="driver" class="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label for="driver" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Driver Name</label>
                </div>

                <div class="relative z-0  mb-6 group">
                <input ref={helperName} type="text" name="helper" id="helper" class="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label for="helper" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Helper Name</label>
                </div>
                
                
                
            </div>

            <div class="grid  md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                    
                    <label for="bus_route" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Route</label>
                    <select ref={routeName} id="bus_route" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {allRoutes.map((ele)=>{
                        return(
                        <option>{ele.routeName}</option>
                        );
                    })}
                    </select>
                    
                </div>

                <div class="relative z-0  mb-6 group">
                    
                    <label for="bus_type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Bus Type</label>
                    <select ref={busType} id="bus_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Student's Bus</option>
                    <option>Teacher's Bus</option>
                    <option>Staff Bus</option>
                    </select>

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
