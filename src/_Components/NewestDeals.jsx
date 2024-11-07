import React, { useEffect, useState } from 'react'
import HostelCard from './HotelCard';
import AboutUs from './AboutUs';
import { fetchHostels } from '@/api/house';

const NewestDeals = () => {

    const [hostels, setHostels] = useState([]);

    useEffect(() => {
      (async () => {
        const hostels = await fetchHostels();
        setHostels(hostels)
      })();
    }, []);

    return (

        <div className='p-8 mx-auto  flex flex-col  items-center'>

            <h1 className='text-6x1 font-bold flex justify-center mb-8'>Available Accommodation List</h1>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                     {
                        hostels 
                        ?                    
                            hostels.map(hostel => (
                                <HostelCard key={hostel.id} hostel={hostel} />
                            ))
                        : 
                        <p>Loading...</p>
                    }
                </div>
            </div>
            <AboutUs />
        </div>

    )
}

export default NewestDeals