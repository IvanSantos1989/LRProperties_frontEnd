import React, { useState } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='w-screen flex items-center justify-between font-normal py-3 px-5 border-b border-black text-sm'>
      <h2 className='cursor-pointer'><strong>LR</strong> Properties</h2>

      <div className='flex items-center gap-4 text-black py-1 px-4 rounded'>
        <p
          onClick={() => handleItemClick('Home')}
          className={`p-1 cursor-pointer ${activeItem === 'Home' ? 'border-b border-black' : 'hover:border-b hover:border-black'}`}
        >
          Home
        </p>
        <p
          onClick={() => handleItemClick('Alojamentos')}
          className={`p-1 cursor-pointer ${activeItem === 'Alojamentos' ? 'border-b border-black' : 'hover:border-b hover:border-black'}`}
        >
          Alojamentos
        </p>
        <p
          onClick={() => handleItemClick('Contatos')}
          className={`p-1 cursor-pointer ${activeItem === 'Contatos' ? 'border-b border-black' : 'hover:border-b hover:border-black'}`}
        >
          Contatos
        </p>
      </div>

      <div className='flex items-center gap-2'>
        <button className='py-2 px-3 bg-black text-white rounded-full'>Login</button>
        <button className='py-2 px-3 bg-transparent text-black rounded-full border'>SignUp</button>
      </div>
    </div>
  );
};

export default Navbar;