import React from 'react'
import { Link } from 'react-router-dom';

const CaptainRiding = () => {
  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-5/6'>
        <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt='' />
      </div>
      <div className='h-1/6 p-6 flex items-center justify-between relative bg-gray-400'>
        <h5 className='p-1 text-center absolute top-0 w-[93%]' onClick={() => {
          props.setConfirmRidePopUpPanel(false)
        }}><i className="text-3xl text-black ri-arrow-up-wide-line"></i></h5>
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className='bg-green-500 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
      </div>
    </div>
  )
}

export default CaptainRiding;