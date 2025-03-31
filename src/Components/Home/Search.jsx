import React from 'react'
import searchImg from "../../assets/Porto.jpg"
import SearchBar from '../micro/SearchBar'

const Search = () => {
<<<<<<< Updated upstream
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
=======
  return (
    <div className="h-[500px] relative mb-9">
      <img
        src={searchImg}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <SearchBar />
      </div>
    </div>
  );
};
>>>>>>> Stashed changes

export default Search