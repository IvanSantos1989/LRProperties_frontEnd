import React from 'react'
import { FiTwitter,FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram,AiOutlineYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='mt-20'>
      <footer className='w-full py-10 bg-neutral-800 text-white'>
        <div className='w-11/12 md:w-1/3 m-auto flex flex-col items-center text-center space-y-5'>
          <h1 className='text-2xl font-bold'>LR Properties</h1>
          <ul className='flex items-center space-x-5 text-sm'>
            <li>Facilidades</li>
            <li>Alojamentos</li>
            <li>Contactos</li>
          </ul>
          <div className='flex items-center space-x-5'>
            <FiTwitter size={"1.5rem"}/>
            <AiOutlineInstagram size={"2rem"}/>
            <AiOutlineYoutube size={"2rem"}/>
            <FiFacebook size={"2rem"}/>
          </div>
          <p className='p-5 text-sm text-gray-400'>© 2024 LR Properties | Todos os Direitos Reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer