import React from 'react'
import { hostelData } from '../assets/hostel-data';
import HostelCard from './HotelCard';
import AboutUs from './AboutUs';



const NewestDeals = () => {
    return (

        <div className='p-8 mx-auto  flex flex-col  items-center'>

            <h1 className='text-4x1 font-medium flex justify-center mb-8'>Lista de Alojamentos Disponíveis</h1>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    {hostelData.map((hostel, index) => (
                        <HostelCard key={index} hostel={hostel} id={hostel.id} name={hostel.name} price={hostel.price} image={hostel.image} />
                    ))}
                </div>
            </div>
            <AboutUs />
        </div>

    )
}

export default NewestDeals