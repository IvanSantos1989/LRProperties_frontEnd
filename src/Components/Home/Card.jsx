import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';

const HostelCard = ({ hostel }) => {

    return (
        <Link to={`/hostel/${hostel.id}`}>
            <div className="cursor-pointer hover:shadow-md p-2 rounded-xl hover:bg-[#F7F7F7] ">
                <img src={`/images/${hostel.images[0]}`} alt={hostel.title} className="w-60' h-60 object-cover rounded-2xl" />
                <div className="p-4 ">
                    <h3 className="text-lg font-medium text-gray-900">{hostel.title}</h3>

                    <div className='flex items-center'>
                        <CiLocationOn />
                        <p className='text-sm text-gray-600 m-1 '>Porto, Portugal</p>
                    </div>
                    <div className="flex items-center gap-3  ">
                        <p className="text-gray-600 text-md">{hostel.price_per_night}€</p>
                        <p className='text-gray-600'>Per night</p>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="bg-[#FFA282] hover:bg-[#E57A5a] text-white py-2 px-4 rounded-xl font-bold">
                            Book
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default HostelCard;