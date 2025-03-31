import { fetchHostels } from '@/api/house';
import React, { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner';
import HostelCard from '../Home/Card';

function HostelList() {

    const [hostels, setHostels] = useState([]);

    useEffect(() => {
        (async () => {
        const hostels = await fetchHostels();
        setHostels(hostels)
        })();
    }, []);

    return (
        hostels.length > 0 ? (
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
>>>>>>> Stashed changes
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
>>>>>>> Stashed changes
                {hostels.map(hostel => (
                    <HostelCard key={hostel.id} hostel={hostel} />
                ))}
            </div>
        ) : (
            <LoadingSpinner speed="0.3" color="#FFA282" size="50" title="Loading available hostels..." margin="3"/> /* TEST */
        )
    );
    
}

export default HostelList