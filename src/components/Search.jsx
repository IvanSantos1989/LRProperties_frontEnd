import React from 'react'
import searchImg from '../assets/image6.jpg'

const Search = () => {
  return (
    <div>
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
              <label >Tipologia</label>
              {/* <input type="text" placeholder='T0' className='outline-0 text-xs'/> */}
              <select   name="property" id="" placeholder="T0">
                <option value="T0">T0</option>
                <option value="T1">T1</option>
                <option value="T2">T2</option>
                <option value="T3">T3</option>
              </select>
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