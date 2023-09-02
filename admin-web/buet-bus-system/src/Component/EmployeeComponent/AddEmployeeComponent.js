import React, { useRef } from 'react'

export const AddEmployeeComponent = () => {
  const staffId = useRef();
  const name = useRef();
  const dob = useRef();
  const role = useRef();
  const busId = useRef();
  const license = useRef();
  const NID = useRef();
  const mobile = useRef();

  const url = 'http://localhost:5000/staff';

  const handleAddEmployee = (e) =>{
    if(name.current.value === "" || staffId.current.value === "" || NID.current.value === "" || dob.current.value === ""){
      window.alert("Name, StaffId and NID are required")
      return ;
    }
    const sure = window.confirm("Press 'OK' to confirm adding the new staff");
    if(!sure){
      return ;
    }
    e.preventDefault();
    const newStaff = {
      staffId : staffId.current.value,
      name : name.current.value,
      dob : dob.current.value,
      role : role.current.value,
      busId : busId.current.value,
      license : license.current.value,
      NID : NID.current.value,
      mobile : mobile.current.value
    }
    if(newStaff.busId == ""){
      delete newStaff.busId;
    }
    staffId.current.value = "";
    name.current.value = "";
    dob.current.value = "";
    license.current.value = "";
    mobile.current.value = "";
    NID.current.value = "";

    console.log(newStaff);

    fetch(url,{
      method : 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(newStaff)
    }).then(res => res.json())
    .then(data =>{
      
    })

  }
  

  return (
    <>
        <div class="p-4 sm:ml-64">
        <p className='text-3xl font-bold text-red-900 text-center mb-7'>Add New Staff</p>
        {/* <img src='./Images/user.png' alt='busPic' className='w-1/4 flex items-center mx-auto justify-center'></img> */}
        <form>
            <div className='w-5/6 mx-auto pt-10'>
            
                <div class="grid  md:grid-cols-2 md:gap-6">
                <div class="relative z-0  mb-4 group">
                <label for="staffName" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Staff Name</label>
                            <input ref={name} type="text" id="staffName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
                </div>
                <div class="relative z-0  mb-4 group">
                <label for="staffId" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Staff Id</label>
                            <input ref={staffId} type="text" id="staffId" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="BS-109" required/>
                </div>
                <div class="relative z-0  mb-4 group">
                <label for="license" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">license no</label>
                            <input ref={license} type="text" id="license" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
                </div>
                <div class="relative z-0  mb-4 group">
                <label for="NID" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">NID</label>
                            <input ref={NID} type="text" id="NID" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
                </div>

                <div class="relative z-0  mb-4 group">
                <label for="dob" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                            <input ref={dob} type="date" id="dob" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
                </div>
                <div class="relative z-0  mb-4 group">
                <label for="mobile" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Mobile no</label>
                            <input ref={mobile} type="text" id="mobile" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
                </div>
                <div class="relative z-0 mb-4 group">
            <label for="role" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Select role</label>
                    <select ref={role} id="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Driver</option>
                    <option>Helper</option>
                    </select>
                    
                    
                </div>
                <div class="relative z-0  mb-4 group">
                    
                    <label for="busId" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Select Bus</label>
                    <select ref={busId} id="busId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value=""></option>
                    <option>B100</option>
                    <option>B101</option>
                    <option>B102</option>
                    </select>

                </div>
                
            </div>

            
            
            <div className='text-center'> 
            <button onClick={(e)=> handleAddEmployee(e)} type="submit" class="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
            </div>
        </form>

        </div>
    </>
  )
}


