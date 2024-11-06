import React from 'react';
import { MdHomeRepairService } from 'react-icons/md';

const AboutUs = () => {
    return (
        <div className='container mx-auto mt-20'>
            <div className='flex flex-col gap-10 md:flex-row items-center justify-center md:space-x-10 space-y-10 md:space-y-0'>
                <div className='flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-10 md:space-y-0'>

                    <div className="space-y-4">
                        <div className='w-48 flex flex-col items-center bg-[#F5F5F5] text-center p-5 drop-shadow-2xl rounded-md'>
                            <MdHomeRepairService size={"1.8rem"} />
                            <h1 className='text-xl font-bold'>Services</h1>
                            <p className='text-xs'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quisquam, voluptates.
                            </p>
                        </div>

                        <div className='w-48 flex flex-col items-center bg-[#F5F5F5] text-center p-5 drop-shadow-2xl rounded-md'>
                            <MdHomeRepairService size={"1.8rem"} />
                            <h1 className='text-xl font-bold'>Services</h1>
                            <p className='text-xs'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quisquam, voluptates.
                            </p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <div className='w-48 flex flex-col items-center bg-[#F5F5F5] text-center p-5 drop-shadow-2xl rounded-md'>
                            <MdHomeRepairService size={"1.8rem"} />
                            <h1 className='text-xl font-bold'>Amenities</h1>
                            <p className='text-xs'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Quisquam, voluptates.
                            </p>
                        </div>

                        <div className='w-48 flex flex-col items-center bg-[#F5F5F5] text-center p-5 drop-shadow-2xl rounded-md'>
                            <MdHomeRepairService size={"1.8rem"} />
                            <h1 className='text-xl font-bold'>Amenities</h1>
                            <p className='text-xs'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Quisquam, voluptates.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-11/12 md:w-1/2 space-y-5'>
                    <h1 className='text-6xl font-bold'>
                        Learn <span className='text-[#FF9874]'>About Us</span>
                    </h1>
                    <p className='text-sm text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veritatis sapiente, eveniet voluptas voluptate non cumque
                        aperiam hic possimus laboriosam nihil accusantium reiciendis provident aut,
                        consequatur debitis alias vero natus iste. Facere obcaecati repellendus reiciendis voluptates?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veritatis sapiente, eveniet voluptas voluptate non cumque
                        aperiam hic possimus laboriosam nihil accusantium reiciendis provident aut,
                        consequatur debitis alias vero natus iste. Facere obcaecati repellendus reiciendis voluptates?
                    </p>
                </div>
            </div>

            <div className='w-11/12 md:w-1/2 mt-10 mx-auto'>
                <h2 className='text-3xl font-bold mb-5 text-center'>Any question or request?<br/>Get in touch.</h2>
                <form className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Name</label>
                        <input
                            type='text'
                            className='mt-1 block w-full p-2 border border-[#FFA282] rounded-md shadow-sm focus:ring-[#FFA282] focus:border-[#FFA282] focus:outline-none'
                            placeholder='Your Name'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Phone</label>
                        <input
                            type='tel'
                            className='mt-1 block w-full p-2 border border-[#FFA282] rounded-md shadow-sm focus:ring-[#FFA282] focus:border-[#FFA282] focus:outline-none'
                            placeholder='Your Phone'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Email</label>
                        <input
                            type='email'
                            className='mt-1 block w-full p-2 border border-[#FFA282] rounded-md shadow-sm focus:ring-[#FFA282] focus:border-[#FFA282] focus:outline-none'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Message</label>
                        <textarea
                            className='mt-1 block w-full p-2 border border-[#FFA282] rounded-md shadow-sm focus:ring-[#FFA282] focus:border-[#FFA282] focus:outline-none'
                            rows='4'
                            placeholder='Your Message'
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-[#FF9874] hover:bg-[#E57A5a] text-white p-3 rounded-xl font-bold'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AboutUs;