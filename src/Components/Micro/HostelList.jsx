import { fetchHostels } from '@/api/house';
import React, { useEffect, useState } from 'react';
import HostelCard from '../Home/Card';
import LoadingSpinner from './Spinners/LoadingSpinner';

function HostelList({filters}) {
    const [hostels, setHostels] = useState([]);
    const [filteredHostels, setFilteredHostels] = useState([]); // to preserve the original list

    useEffect(() => {
        (async () => {
            const fetchedHostels = await fetchHostels(); 
            setHostels(fetchedHostels);
            setFilteredHostels(fetchedHostels)
        })();
    }, []);

    useEffect(() => { 
        if (!filters || !filters.checkInDate || !filters.checkOutDate) {
            setFilteredHostels(hostels); 
            return;
        }

        setFilteredHostels(hostels.filter(hostel => {
            if (!hostel.reservations || hostel.reservations.length == 0)  return true;

            const reservation = hostel.reservations[0];

            return compareDates(reservation.check_in, reservation.check_out, filters.checkInDate, filters.checkOutDate);
        }))
        
    }, [filters, hostels])
    

    const compareDates = (hostelCheckIn, hostelCheckOut, filterCheckIn, filterCheckOut) => {
        const hCheckIn = new Date(hostelCheckIn).setHours(0,0,0,0) 
        const hCheckOut = new Date(hostelCheckOut).setHours(0,0,0,0) 
        const fCheckIn = new Date(filterCheckIn).setHours(0,0,0,0) 
        const fCheckOut = new Date(filterCheckOut).setHours(0,0,0,0) 

        // [hci: 07, hco: 10] e [fci: 03, fco: 05] --> if the interval is on the right/left of the hostel res.
        return hCheckIn > fCheckOut || hCheckOut < fCheckIn;
    }

    return (
        filteredHostels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                {filteredHostels.map(hostel => (
                    <HostelCard key={hostel.id} hostel={hostel} />
                ))}
            </div>
        ) : (
            (filters && (filters.checkInDate || filters.checkOutDate)) ? (
                <p className='text-2xl text-gray-400 dark:text-white mt-10'>No hostels available for the selected filters...</p>
            ) : (
                <LoadingSpinner speed="0.3" color="#FFA282" size="50" title="Loading available hostels..." margin="3" />
            )
        )
    );
    
}

export default HostelList;