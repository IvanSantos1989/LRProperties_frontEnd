import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';


const HostelCard = ({ hostel, id }) => {

    return (

        <Link to={`/CheckoutCard/${id}`}>
            <div className="cursor-pointer hover:shadow-md p-2 rounded-xl hover:bg-[#F7F7F7] ">
                <img src={hostel.image} alt={hostel.name} className="w-60' h-60 object-cover rounded-2xl" />
                <div className="p-4 ">
                    <h3 className="text-lg font-medium text-gray-900">{hostel.name}</h3>

                    <div className='flex items-center'>
                        <CiLocationOn />
                        <p className='text-sm text-gray-600 m-1 '>Porto, Portugal</p>
                    </div>
                    <div className="flex items-center gap-3  ">
                        <p className="text-gray-600 text-md">{hostel.price}</p>
                        <p className='text-gray-600'>noite</p>
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default HostelCard