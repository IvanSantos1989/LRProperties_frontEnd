import React from 'react'
import { MdHomeRepairService } from 'react-icons/md'

const AboutUs = () => {
    return (
        <div className='container mx-auto mt-20'>
            <div className='flex flex-col gap-10 md:flex-row items-center justify-center md:space-x-10 space-y-10 md:space-y-0'>
                <div className='flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-10 md:space-y-0'>

                    <div className="space-y-4">
                        <div className='w-48 flex flex-col items-center bg-[#F5F5F5] text-center p-5 drop-shadow-2x1 rounded-md'>
                            <MdHomeRepairService size={"1.8rem"} />
                            <h1 className='text-xl font-bold'>Serviços</h1>
                            <p className='text-xs'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quisquam, voluptates.
                            </p>
                        </div>

                        <div className='w-48 flex flex-col items-center bg-[#F5F5F5] text-center p-5 drop-shadow-2x1 rounded-md'>
                            <MdHomeRepairService size={"1.8rem"} />
                            <h1 className='text-xl font-bold'>Serviços</h1>
                            <p className='text-xs'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quisquam, voluptates.
                            </p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <div className='w-48 flex flex-col items-center bg-[#F5F5F5] text-center p-5 drop-shadow-2x1 rounded-md'>
                            <MdHomeRepairService size={"1.8rem"} />
                            <h1 className='text-xl font-bold'>Facilidades</h1>
                            <p className='text-xs'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Quisquam, voluptates.
                            </p>
                        </div>

                        <div className='w-48 flex flex-col items-center bg-[#F5F5F5] text-center p-5 drop-shadow-2x1 rounded-md'>
                            <MdHomeRepairService size={"1.8rem"} />
                            <h1 className='text-xl font-bold'>Facilidades</h1>
                            <p className='text-xs'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Quisquam, voluptates.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-11/12 md:w-1/2 space-y-5'>
                    <h1 className='text-6xl font-bold'>
                        Saiba <span className='text-[#FF9874]'>Sobre Nós</span>
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
        </div>
    )
}

export default AboutUs