import React from 'react'

const LocationSearchPanel = (props) => {

    const locations = [
        "14 Watkins Lane, Gokul Apartment, Howrah",
        "17 Rose Mary Lane, Pritam Apartment, Howrah",
        "19 NM Lane, Gopal Apartment, Kolkata",
        "10 Oboroi Lane, Brigade Apartment, Kolkata",
        "20 Watkins Lane, Lohia Apartment, Howrah"
    ]
  return (
    <div>
        {/* sample text */}
        {
            locations.map(function(el, idx){
                return <div key={ idx } onClick={() => {
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }}className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl justify-start items-center my-4'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-line"></i></h2>
                <h4 className='font-medium'>{ el }</h4>
            </div>
            })
        }
    </div>
  )
}

export default LocationSearchPanel;