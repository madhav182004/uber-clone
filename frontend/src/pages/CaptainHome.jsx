import React from 'react'

const CaptainHome = () => {
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt='' />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[25%] p-6 bg-white relative'>
          <h5 
            ref={panelCloseRef}
            onClick={ () => {
              setPanelOpen(false)
            }}
            className='absolute opacity-0 right-6 top-6 text-2xl'
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a Trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute h-16 w-1 top-[40%] left-10 bg-gray-700 rounded-full'></div>
            <input 
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e)=>{
                setPickup(e.target.value);
              }}            
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
              type="text" 
              placeholder='Add a pick-up location' 
            />
            <input 
              onClick={() => {
                setPanelOpen(true)
              }}            
              value={destination}
              onChange={(e)=>{
                setDestination(e.target.value);
              }}               
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
              type="text" 
              placeholder='Enter your destination'
            />
          </form>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
            <LocationSearchPanel setPanelOpen={ setPanelOpen } setVehiclePanel={ setVehiclePanel } />
        </div>
      </div>
      <div ref={ vehiclePanelRef } className='fixed w-full bg-white z-10 bottom-0 translate-y-full px-3 py-10 pt-12'>
            <VehiclePanel setConfirmRidePanel={ setConfirmRidePanel } setVehiclePanel={ setVehiclePanel } />
      </div>
      <div ref={ confirmRidePanelRef } className='fixed w-full bg-white z-10 bottom-0 translate-y-full px-3 py-6 pt-12'>
            <ConfirmRide setConfirmRidePanel={ setConfirmRidePanel } setVehicleFound={ setVehicleFound }/>
      </div>
      <div ref={ vehicleFoundRef } className='fixed w-full bg-white z-10 bottom-0 translate-y-full px-3 py-6 pt-12'>
            <LookingForDriver setVehicleFound={ setVehicleFound }/>
      </div>
      <div ref={ waitingfForDriverRef } className='fixed w-full bg-white z-10 bottom-0 translate-y-full px-3 py-6 pt-12'>
            <WaitingForDriver setWaitingForDriver={ setWaitingForDriver } />
      </div>
    </div>
  )
}

export default CaptainHome;