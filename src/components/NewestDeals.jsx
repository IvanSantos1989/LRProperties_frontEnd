import React from 'react'
import { BsSuitHeart } from 'react-icons/bs'
import { IoBedOutline, IoLocationOutline } from 'react-icons/io5'
import { GiBathtub, GiHomeGarage } from 'react-icons/gi'

import house1 from '../assets/house1.jpg'
import house2 from '../assets/house2.jpg'
import house3 from '../assets/house3.jpg'
import house4 from '../assets/house4.jpg'
import house5 from '../assets/house5.jpg'
import house6 from '../assets/house6.jpg'
import house7 from '../assets/house12.jpg'
import house8 from '../assets/house13.jpg'
import house9 from '../assets/house14.jpg'
import '/src/index.css';

const NewestDeals = () => {
  return (
    <div className='py-10'>
      <h1 className='text-4x1 font-bold flex justify-center'>Lista de Alojamentos Disponíveis</h1>
      <div className="deals grid 2x1:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-10">
        
        <div className="deal h-[470px] bg-white drop-shadow-2x1 rounded-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
          <div className='relative h-[60%]'>
            <img src={house1} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            <div className="absolute top-0 right-0 p-4">
              <BsSuitHeart size={"1.5rem"} className='text-white'/>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 items-center">
              <div className='flex items-center space-x-1'>
                <IoBedOutline/>
                <p className='text-sm text-gray-400'>5 bed</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiBathtub/>
                <p className='text-sm text-gray-400'>3 bat</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiHomeGarage/>
                <p className='text-sm text-gray-400'>1 gar</p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold flex items-center space-x-2">$100,00</h1>
            <div className="  items-center space-x-2">
              <div className='flex items-center mb-2'>
              <IoLocationOutline/>
              <p className='text-sm text-gray-600 m-1'>Porto, Portugal</p>
              </div>
              
              <div className='flex justify-between m-0'>
              <button className="btn btn-outline-dark">Reservar</button>
              <button className="btn btn-outline-dark">Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="deal h-[470px] bg-white drop-shadow-2x1 rounded-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
          <div className='relative h-[60%]'>
            <img src={house2} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            <div className="absolute top-0 right-0 p-4">
              <BsSuitHeart size={"1.5rem"} className='text-white'/>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 items-center">
              <div className='flex items-center space-x-1'>
                <IoBedOutline/>
                <p className='text-sm text-gray-400'>5 bed</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiBathtub/>
                <p className='text-sm text-gray-400'>3 bat</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiHomeGarage/>
                <p className='text-sm text-gray-400'>1 gar</p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold flex items-center space-x-2">$100,00</h1>
            <div className="  items-center space-x-2">
              <div className='flex items-center mb-2'>
              <IoLocationOutline/>
              <p className='text-sm text-gray-600 m-1'>Porto, Portugal</p>
              </div>
              
              <div className='flex justify-between m-0'>
              <button className="btn btn-outline-dark">Reservar</button>
              <button className="btn btn-outline-dark">Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>

        <div className="deal h-[470px] bg-white drop-shadow-2x1 rounded-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
          <div className='relative h-[60%]'>
            <img src={house3} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            <div className="absolute top-0 right-0 p-4">
              <BsSuitHeart size={"1.5rem"} className='text-white'/>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 items-center">
              <div className='flex items-center space-x-1'>
                <IoBedOutline/>
                <p className='text-sm text-gray-400'>5 bed</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiBathtub/>
                <p className='text-sm text-gray-400'>3 bat</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiHomeGarage/>
                <p className='text-sm text-gray-400'>1 gar</p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold flex items-center space-x-2">$100,00</h1>
            <div className="  items-center space-x-2">
              <div className='flex items-center mb-2'>
              <IoLocationOutline/>
              <p className='text-sm text-gray-600 m-1'>Porto, Portugal</p>
              </div>
              
              <div className='flex justify-between m-0'>
              <button className="btn btn-outline-dark">Reservar</button>
              <button className="btn btn-outline-dark">Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>

        <div className="deal h-[470px] bg-white drop-shadow-2x1 rounded-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
          <div className='relative h-[60%]'>
            <img src={house4} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            <div className="absolute top-0 right-0 p-4">
              <BsSuitHeart size={"1.5rem"} className='text-white'/>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 items-center">
              <div className='flex items-center space-x-1'>
                <IoBedOutline/>
                <p className='text-sm text-gray-400'>5 bed</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiBathtub/>
                <p className='text-sm text-gray-400'>3 bat</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiHomeGarage/>
                <p className='text-sm text-gray-400'>1 gar</p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold flex items-center space-x-2">$100,00</h1>
            <div className="  items-center space-x-2">
              <div className='flex items-center mb-2'>
              <IoLocationOutline/>
              <p className='text-sm text-gray-600 m-1'>Porto, Portugal</p>
              </div>
              
              <div className='flex justify-between m-0'>
              <button className="btn btn-outline-dark">Reservar</button>
              <button className="btn btn-outline-dark">Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>

        <div className="deal h-[470px] bg-white drop-shadow-2x1 rounded-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
          <div className='relative h-[60%]'>
            <img src={house5} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            <div className="absolute top-0 right-0 p-4">
              <BsSuitHeart size={"1.5rem"} className='text-white'/>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 items-center">
              <div className='flex items-center space-x-1'>
                <IoBedOutline/>
                <p className='text-sm text-gray-400'>5 bed</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiBathtub/>
                <p className='text-sm text-gray-400'>3 bat</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiHomeGarage/>
                <p className='text-sm text-gray-400'>1 gar</p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold flex items-center space-x-2">$100,00</h1>
            <div className="  items-center space-x-2">
              <div className='flex items-center mb-2'>
              <IoLocationOutline/>
              <p className='text-sm text-gray-600 m-1'>Porto, Portugal</p>
              </div>
              
              <div className='flex justify-between m-0'>
              <button className="btn btn-outline-dark">Reservar</button>
              <button className="btn btn-outline-dark">Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>

        <div className="deal h-[470px] bg-white drop-shadow-2x1 rounded-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
          <div className='relative h-[60%]'>
            <img src={house6} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            <div className="absolute top-0 right-0 p-4">
              <BsSuitHeart size={"1.5rem"} className='text-white'/>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 items-center">
              <div className='flex items-center space-x-1'>
                <IoBedOutline/>
                <p className='text-sm text-gray-400'>5 bed</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiBathtub/>
                <p className='text-sm text-gray-400'>3 bat</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiHomeGarage/>
                <p className='text-sm text-gray-400'>1 gar</p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold flex items-center space-x-2">$100,00</h1>
            <div className="  items-center space-x-2">
              <div className='flex items-center mb-2'>
              <IoLocationOutline/>
              <p className='text-sm text-gray-600 m-1'>Porto, Portugal</p>
              </div>
              
              <div className='flex justify-between m-0'>
              <button className="btn btn-outline-dark">Reservar</button>
              <button className="btn btn-outline-dark">Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>

        <div className="deal h-[470px] bg-white drop-shadow-2x1 rounded-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
          <div className='relative h-[60%]'>
            <img src={house7} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            <div className="absolute top-0 right-0 p-4">
              <BsSuitHeart size={"1.5rem"} className='text-white'/>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 items-center">
              <div className='flex items-center space-x-1'>
                <IoBedOutline/>
                <p className='text-sm text-gray-400'>5 bed</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiBathtub/>
                <p className='text-sm text-gray-400'>3 bat</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiHomeGarage/>
                <p className='text-sm text-gray-400'>1 gar</p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold flex items-center space-x-2">$100,00</h1>
            <div className="  items-center space-x-2">
              <div className='flex items-center mb-2'>
              <IoLocationOutline/>
              <p className='text-sm text-gray-600 m-1'>Porto, Portugal</p>
              </div>
              
              <div className='flex justify-between m-0'>
              <button className="btn btn-outline-dark">Reservar</button>
              <button className="btn btn-outline-dark">Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>

        <div className="deal h-[470px] bg-white drop-shadow-2x1 rounded-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
          <div className='relative h-[60%]'>
            <img src={house8} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            <div className="absolute top-0 right-0 p-4">
              <BsSuitHeart size={"1.5rem"} className='text-white'/>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 items-center">
              <div className='flex items-center space-x-1'>
                <IoBedOutline/>
                <p className='text-sm text-gray-400'>5 bed</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiBathtub/>
                <p className='text-sm text-gray-400'>3 bat</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiHomeGarage/>
                <p className='text-sm text-gray-400'>1 gar</p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold flex items-center space-x-2">$100,00</h1>
            <div className="  items-center space-x-2">
              <div className='flex items-center mb-2'>
              <IoLocationOutline/>
              <p className='text-sm text-gray-600 m-1'>Porto, Portugal</p>
              </div>
              
              <div className='flex justify-between m-0'>
              <button className="btn btn-outline-dark">Reservar</button>
              <button className="btn btn-outline-dark">Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>

        <div className="deal h-[470px] bg-white drop-shadow-2x1 rounded-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
          <div className='relative h-[60%]'>
            <img src={house9} alt="" className='w-full h-full object-cover rounded-t-xl'/>
            <div className="absolute top-0 right-0 p-4">
              <BsSuitHeart size={"1.5rem"} className='text-white'/>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex space-x-5 items-center">
              <div className='flex items-center space-x-1'>
                <IoBedOutline/>
                <p className='text-sm text-gray-400'>5 bed</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiBathtub/>
                <p className='text-sm text-gray-400'>3 bat</p>
              </div>

              <div className='flex items-center space-x-1'>
                <GiHomeGarage/>
                <p className='text-sm text-gray-400'>1 gar</p>
              </div>
            </div>
            <h1 className="text-2xl font-semibold flex items-center space-x-2">$100,00</h1>
            <div className="  items-center space-x-2">
              <div className='flex items-center mb-2'>
              <IoLocationOutline/>
              <p className='text-sm text-gray-600 m-1'>Porto, Portugal</p>
              </div>
              
              <div className='flex justify-between m-0'>
              <button className="btn btn-outline-dark">Reservar</button>
              <button className="btn btn-outline-dark">Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NewestDeals