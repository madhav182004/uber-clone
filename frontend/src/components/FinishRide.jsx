import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center absolute top-0 w-[93%]' onClick={() => {
          props.setFinishRidePanel(false)
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold'>Finish this Ride</h3>
        <div className='flex items-center justify-between p-3 bg-gray-100 rounded-lg mt-4'>
            <div className='flex items-center gap-3'>
                <img className='h-10 w-10 rounded-full object-cover' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                <h4 className='text-lg font-medium'>Secret Wanda</h4>
            </div>
            <h5 className='text-lg font-semibold'>2.2 Km</h5>
        </div>
        <div className='flex flex-col justify-between items-center'>
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className="ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>14/251-L</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Gokul Apartment, Howrah</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>14/251-L</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Gokul Apartment, Howrah</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                    <i className="ri-currency-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹193.20</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                </div>
            </div>
            <div className='mt-6 w-full'>
              <Link to='/captain-home' className='w-full mt-5 text-lg flex justify-center bg-green-500 text-white font-semibold p-2 rounded-lg'>Finish Ride</Link>
              <p className='mt-6 text-xs'>Click on Finish Ride button if you have completed the Payment.</p>
            </div>
        </div>
    </div>
  )
}

export default FinishRide;