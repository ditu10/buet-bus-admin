import React from 'react'

const BusRequestComponent = () => {
  const requests=[
    {reqid:1 , reqMsg:'We want to hire 4 buses for a picninc to go Gazipur resort on monday 19 july 2023', date:'14 july 2023', time: '10.13AM'} ,
    {reqid:2 , reqMsg:'We want to hire 2 buses for a Study tour to go Chittagong on thursday 22 july 2023.', date:'15 july 2023', time: '9.25AM'} ,
    {reqid:2 , reqMsg:'We want to hire 2 buses for Industrial tour to go Khulna on Friday 23 july 2023', date:'16 july 2023', time: '11.27AM'} ,
  ];
  return (
    <>
        <div class="p-4 sm:ml-64">
        <div className="mx-20">
                    <div>
                        <div className="p-10">
                            <h1 className="text-3xl text-center text-red-900 font-bold">Requests</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {requests.map((ele) => {
                                return (
                                    <>
                                        <div className="bg-gray-200 shadow-lg  text-center  py-3 px-2 rounded-lg">
                                            <div className="grid grid-cols-2 text-sm text-gray-500">
                                                <p className='text-left py'>{ele.date}</p>
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

export default BusRequestComponent
