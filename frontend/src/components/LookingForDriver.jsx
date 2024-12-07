import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center absolute top-0 w-[93%]' onClick={() => {
        props.setVehicleFound(false)
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold'>Looking for a Driver</h3>

        <div className='flex flex-col justify-between items-center'>
            <img className='h-32' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
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
        </div>
    </div>
  )
}

export default LookingForDriver;