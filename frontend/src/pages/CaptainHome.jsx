import React from 'react'
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const ridePopUpPanelRef = useRef(null);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null);

  useGSAP(function () {
    if (ridePopUpPanel) 
    {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    } 
    else 
    {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ ridePopUpPanel ])

  useGSAP(function () {
    if (confirmRidePopUpPanel) 
    {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    } 
    else 
    {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ confirmRidePopUpPanel ])

  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-4/6'>
        <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt='' />
      </div>
      <div className='h-2/6 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopUpPanelRef} className='fixed w-full bg-white z-10 bottom-0 translate-y-full px-3 py-10 pt-12'>
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
      <div ref={confirmRidePopUpPanelRef} className='fixed w-full h-screen bg-white z-10 bottom-0 translate-y-full px-3 py-10 pt-12'>
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome;