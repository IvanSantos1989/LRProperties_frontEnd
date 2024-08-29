import React from 'react'
import house1 from '../assets/house7.jpg'
import house2 from '../assets/house8.jpg'
import house3 from '../assets/house9.jpg'
import house4 from '../assets/house10.jpg'
import house5 from '../assets/house11.jpg'
import house6 from '../assets/house12.jpg'
import { IoLocationOutline } from 'react-icons/io5'
const BestDeals = () => {
  return (
    <div>
      <div className='w-11/12 md:w-1/2 xl:w-1/3 m-auto text-center py-10'>
        <h1 className='text-4xl font-bold'>Melhores Acomodações</h1>
        <p className='text-xs text-gray-400 p-5'>
          Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. 
          Quisquam, voluptates.
        </p>
      </div>
      <div className='deals w-full grid lg:grid-flow-col grid-rows-2 gap-8'>
        <div className='deal relative col-span-1 row-span-1'>
          <img src={house1} alt="" className='w-full h-full rounded-xl object-cover'/>
          <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
            <h1 className='text-3xl font-bold'>Local</h1>
            <p className='flex items-center space-x-2 text-sm'><IoLocationOutline /> Porto, Portugal</p>
          </div>
        </div>
        <div className='deal relative col-span-1 row-span-1'>
          <img src={house2} alt="" className='w-full h-full rounded-xl object-cover'/>
          <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
            <h1 className='text-3xl font-bold'>Local</h1>
            <p className='flex items-center space-x-2 text-sm'><IoLocationOutline /> Porto, Portugal</p>
          </div>
        </div>
        <div className='deal relative col-span-1 row-span-1'>
          <img src={house3} alt="" className='w-full h-full rounded-xl object-cover'/>
          <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
            <h1 className='text-3xl font-bold'>Local</h1>
            <p className='flex items-center space-x-2 text-sm'><IoLocationOutline /> Porto, Portugal</p>
          </div>
        </div>
        <div className='deal relative col-span-1 row-span-1'>
          <img src={house4} alt="" className='w-full h-full rounded-xl object-cover'/>
          <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
            <h1 className='text-3xl font-bold'>Local</h1>
            <p className='flex items-center space-x-2 text-sm'><IoLocationOutline /> Porto, Portugal</p>
          </div>
        </div>
        <div className='deal relative col-span-1 row-span-1'>
          <img src={house5} alt="" className='w-full h-full rounded-xl object-cover'/>
          <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
            <h1 className='text-3xl font-bold'>Local</h1>
            <p className='flex items-center space-x-2 text-sm'><IoLocationOutline /> Porto, Portugal</p>
          </div>
        </div>
        <div className='deal relative col-span-1 row-span-1'>
          <img src={house6} alt="" className='w-full h-full rounded-xl object-cover'/>
          <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
            <h1 className='text-3xl font-bold'>Local</h1>
            <p className='flex items-center space-x-2 text-sm'><IoLocationOutline /> Porto, Portugal</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestDeals