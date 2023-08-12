import React from 'react'

const Mapshow = (props) => {
  return (
    <>
        <div class="p-4 sm:ml-64">
          <div className=''>
          <p className='text-2xl font-bold text-center text-red-900 py-3'>BUS LIVE LOCATION</p>
          <div className='flex justify-center'>
            
          
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58427.7723745279!2d90.37086719999999!3d23.7568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1691851886377!5m2!1sen!2sbd" width="700" height="500" className="myClass" style={{float : 'left', paddingRight : '5px'}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          </div>
        </div>
    </>
  )
}

export default Mapshow
