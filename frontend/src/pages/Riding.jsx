import React from 'react'
import { Link } from 'react-router-dom';

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-home-5-line"></i>
        </Link>
        <div className='h-3/5'>
            <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt='' />
        </div>
        <div className='h-2/5 p-4'>
            <div className='flex items-center justify-between'>
                <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                <div className='text-right'>
                    <h2 className='text-lg font-medium'>Madhav</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>KA22 ZX 3396</h4>
                    <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                </div>
            </div>

            <div className='flex flex-col justify-between items-center'>
                <div className='w-full mt-5'>
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
            </div>
            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding;