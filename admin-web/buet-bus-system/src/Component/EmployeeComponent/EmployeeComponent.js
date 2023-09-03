import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const EmployeeComponent = () => {
  const [reload, setReload] = useState(false);
  const [staffs, setStaffs] = useState([]);
  const url = 'http://localhost:5000/staff';

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setStaffs(data))
  },[reload])

 

  const deleteStaff = async (id) =>{
    
    try{
      const decision = window.confirm("Press 'OK' to confirm delete"); 
      console.log(decision);
      if(!decision)
        return ;
      const url = `http://localhost:5000/staff/${id}`;
      const data = await fetch(url,{
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({})
      }).then(res =>{
        console.log(res);
        if(res.status === 200){
          window.alert("Deleted successfully");
        }
      })
      console.log(data)
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
                            <h1 className="text-3xl text-center text-red-900 font-bold">All Bus Staffs</h1>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {staffs.map((ele) => {
                                return (
                                    <>
                                        
                                            <div key={ele._id} className="bg-gray-200 shadow-lg text-red-800 text-center py-4 rounded-lg">
                                                <div className="bg-black-200">
                                                    <Link key={ele._id} to={`/EmployeeDetails/${ele._id}`}>
                                                    <div>
                                                    <img className='mx-auto' src='./Images/user.png' alt = "userpic" />
                                                    </div>
                                                    
                                                      <p className='text-center pt-2'>{ele.name}</p>
                                                    </Link>
                                                    <p className='pb-2'>{ele.role}</p>
                                                    

                                                    <Link key={ele._id} to={`/EditEmployee/${ele._id}`}>
                                                    <button class="hover:bg-transparent bg-red-800 text-gray-100 font-semibold hover:text-red-800 py-1 px-2 border hover:border-red-900 border-transparent rounded-full mx-1">
                                                    Update
                                                    </button> 
                                                    </Link>
                                                                                                      
                                                    <button onClick={(e)=> deleteStaff(ele._id)} class="hover:bg-transparent bg-red-800 text-gray-100 font-semibold hover:text-red-800 py-1 px-2 border hover:border-red-900 border-transparent rounded-full mx-1">
                                                      Delete
                                                    </button>
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

export default EmployeeComponent
