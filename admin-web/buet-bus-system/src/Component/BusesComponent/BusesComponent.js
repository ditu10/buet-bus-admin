import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const BusesComponent = () => {
    const [buses, setBuses] = useState([]);
    const [reload, setReload] = useState(false);
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
    },[reload])

    const handleUpdateBus = (e, id) =>{
        e.preventDefault();
        const url = '/BusDetails/' + id;
        window.location.href = url;
    }


    const handleDeleteBus = (e, id) =>{
        e.preventDefault();
        const sure = window.confirm("press yes to confirm delete the bus");
        if(!sure){
            return ;
        }
        const url = 'http://localhost:5000/bus/' + id;
        fetch(url,{
            method: "DELETE",
            headers : {'Content-Type': 'application/json' },
            body: JSON.stringify({})
        }).then(res => res.json)
        .then(data => {
            console.log(data);
            window.alert("Successfully deleted the bus");
            setReload(!reload);
        })
    }

    
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
                                        <div className='text-right '>
                                                <Link to={`/EditBus/${ele._id}`}>
                                                <button className='mx-2'>
                                                    <img width="20px" src='./Images/update.png' alt='update'/>
                                                </button>
                                                </Link>
                                                <button className='mx-2'>
                                                    <img  onClick={(e, id)=> handleDeleteBus(e, ele._id)} width="20px" alt='delete' src='./Images/delete.png' />
                                                </button>
                                                </div>
                                            <div className="bg-black-200">
                                                <Link to={`/BusDetails/${ele._id}`}>
                                                <img className='mx-auto pb-2' src={icon} alt="" width={50} />
                                                </Link>
                                                {/* <p className='text-center '> <span className='text-gray-800'>Bus Name</span> : {ele?.busName}</p> */}
                                                <p className=''><span className='text-gray-800'>Bus No : </span> {ele?.busName}</p>
                                                <p className='text-center'><span className='text-gray-800'>Route : </span> {ele?.route?.routeName}</p>
                                                {/* <div>
                                                <button onClick={(e) => handleUnavailable(e)} className='border-1 rounded-full bg-gray-700 text-gray-100 px-2 py-1 mx-1'>Unavailable</button>
                                                <button onClick={(e) => handleUnavailable(e)}className='border-1 rounded-full bg-gray-700 text-gray-100 mx-1 px-2 py-1'>Available</button>
                                                </div> */}
                                                
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
