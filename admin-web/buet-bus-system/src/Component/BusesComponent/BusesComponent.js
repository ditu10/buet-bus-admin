import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const BusesComponent = () => {
    const [buses, setBuses] = useState([]);
    const [singlebus, setSinglebus] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:5000/bus';
        // const dummyurl = `https://cors-anywhere.herokuapp.com${url}`;
        try{
            await fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                setBuses(data);
            })
        }catch(err){
            console.log(err); 
        }
    }
    

    useEffect(()=>{
        fetchData();
    },[])

    
    const icon = './Images/bus2.png';
    return (
        <div class="p-4 sm:ml-64">
            <div className="mx-20">
                    <div>
                        <div className="p-10">
                            <h1 className="text-3xl text-center text-red-900 font-bold">All Buses</h1>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {buses.map((ele) => {
                                return (
                                    <>
                                        <div className="bg-gray-200 text-red-800 text-center py-4 rounded-lg shadow-lg">
                                            <div className="bg-black-200">
                                                <p className='text-center '>Bus Name : {ele?.busName}</p>
                                                <p className='pb-3'>Bus NO : {ele?.busNo}</p>
                                                <img className='mx-auto' src={icon} alt="" width={50} />
                                                <p className='text-center pt-3'>Driver : {ele?.driver?.name}</p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                            {/* <div className="bg-gray-200 text-red-800 text-center py-4 rounded-lg shadow-lg">
                                            <Link to='/AddNewBus'>
                                            <div className="bg-black-200">
                                                <p className='text-center '>Add New Bus</p>
                                                <p className='pb-3'></p>
                                                <img className='mx-auto' src={icon} alt="" width={50} />
                                                
                                            </div>
                                            </Link>
                            </div> */}
                        </div>
                    </div>
          </div>
        </div>
      )
}

export default BusesComponent
