import React from 'react'
import searchImg from "../assets/image6.jpg"
import SearchBar from './SearchBar'

const Search = () => {
    return (
        <div className='h-[500px] relative  mt-4 mb-9'>
            <img src={searchImg} alt=""
                className='w-full h-full object-cover rounded-xl' />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <SearchBar />
            </div>
        </div>
    )
}

export default Search