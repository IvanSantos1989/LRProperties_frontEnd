import React from 'react'
import searchImg from '../assets/image6.jpg'
const Search = () => {
  return (
    <div>
      <nav className='flex justify-between items-center py-5'>
        <h1 className='text-xl md:text-2x1 font-bold'>LR Properties</h1>
        <ul className='flex items-center space-x-5 text-xs md:text-base'>
          <li>Facilidades</li>
          <li>Alojamentos</li>
          <li>Sobre</li>
        </ul>
        <button className='bg-yellow-400 px-5 py-2 rounded-xl text-xs md:text-base'>Contactos</button>
      </nav>

      <div className='h-[500px] relative'>
        <img src={searchImg} alt="" 
        className='w-full h-full object-cover rounded-md'/>
        <div className='absolute bottom-5 w-full'>
          <div
          className='w-11/12 x1:w-4/5 m-auto bg-white grid grid-cols-2 lg:flex justify-between items-center p-5 drop-shadow-2x1 md:space-x-4 md:rounded-md'>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="location">Localização</label>
              <input type="text" placeholder='PT' className='outline-0 text-xs'/>
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="property">Tipologia</label>
              <input type="text" placeholder='T0' className='outline-0 text-xs'/>
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="price">Preço máximo</label>
              <input type="text" placeholder='$100,000' className='outline-0 text-xs'/>
            </div>
            <div>
              <button className='bg-yellow-400 px-5 py-2 mt-5 md:mt-0 md:rounded-full'>Buscar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search