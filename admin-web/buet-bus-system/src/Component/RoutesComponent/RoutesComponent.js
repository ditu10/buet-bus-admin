import React from 'react'

const RoutesComponent = () => {
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
  const icon = './Images/Route.png';
  return (
    <>
        <div class="p-4 sm:ml-64">
        <div className="mx-20">
                    <div>
                        <div className="p-10">
                            <h1 className="text-3xl text-center text-red-900 font-bold">Routes</h1>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {allRoutes.map((ele) => {
                                return (
                                    <>
                                        <div className="bg-gray-200 shadow-lg text-red-800 text-center py-4 rounded-lg">
                                            <div className="bg-black-200">
                                                <p className='text-center py-2 '>{ele.routeName}</p>
                                                
                                                <img className='mx-auto' src={icon} alt="" width={50} />
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

export default RoutesComponent
