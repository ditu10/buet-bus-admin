import React from 'react'

const Services = (props) => {
  const serviceElement = [
    {name: 'Buses', icon:'./Images/bus2.png'},
    {name: 'Add New Bus', icon:'./Images/bus2.png'},
    {name: 'Edit Bus', icon:'./Images/bus2.png'},
    {name: 'Map', icon:'./Images/map.png'},
    {name: 'Routes', icon:'./Images/Route.png'},
    {name: 'Add Route', icon:'./Images/Route.png'},
    {name: 'Edit Route', icon:'./Images/Route.png'},
    {name: 'Bus Request', icon:'./Images/BusReq.png'},
    
  ];

  
  return (
    <>
      <div class="p-4 sm:ml-64">
      <div className="mx-20">
                    <div>
                        <div className="p-10">
                            <h1 className="text-3xl text-center text-red-900 font-bold">All Services</h1>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {serviceElement.map((ele) => {
                                return (
                                    <>
                                        <div className="bg-gray-200 shadow-lg text-red-800 text-center py-4 rounded-lg">
                                            <div className="bg-black-200">
                                                <p className='text-center py-2'>{ele.name}</p>
                                                <img className='mx-auto' src={ele.icon} alt="" width={50} />
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

export default Services
