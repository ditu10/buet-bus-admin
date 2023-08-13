import React from 'react'
import { useLocation } from 'react-router-dom';

const RouteDetailsComponent = () => {
    // const location = useLocation();
    // console.log(location);

    // // Access the data passed from the Home component
    // const receivedData = location.state?.data || {};
    // console.log(receivedData);

    const routedetailinfo =[
        {name:'collage gate bus Stand', time:'6.15 AM'},
        {name:'Station road islami bank', time:'6.25 AM'},
        {name:'collage gate bus Stand', time:'6.35 AM'},
        {name:'collage gate bus Stand', time:'6.45 AM'},
        {name:'collage gate bus Stand', time:'6.50 AM'},
        {name:'collage gate bus Stand', time:'7.05 AM'},
        {name:'collage gate bus Stand', time:'7.25 AM'},
        {name:'BUET', time:'7.30 AM'},
    ]

  return (
    <>
        <div class="p-4 sm:ml-64">
        <div className="mx-20">
                    <div>
                        <div className="p-10">
                            <h1 className="text-3xl text-center text-red-900 font-bold">Route Details</h1>
                        </div>
                        <div></div>
                        <div className="grid grid-cols-1 gap-4">
                            {routedetailinfo.map((ele) => {
                                return (
                                    <>
                                        <div className="bg-gray-200 mx-auto w-5/6 shadow-lg  text-center  py-3 px-2 rounded-lg">
                                            <div className="grid grid-cols-2 text-sm text-gray-500">
                                                <p className='text-left py'>{ele.name}</p>
                                                <p className='text-right'>{ele.time}</p>
                                            </div>
                                            <div>
                                                <p>{ele.reqMsg}</p>
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

export default RouteDetailsComponent
