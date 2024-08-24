import React, { useState } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-between align-items-center py-3 border-bottom'>
        <h2 className='cursor-pointer'><strong>LR</strong> Properties</h2>

        <div className='d-flex align-items-center gap-4'>
          <p
            onClick={() => handleItemClick('Home')}
            className={`p-1 cursor-pointer ${activeItem === 'Home' ? 'border-bottom border-dark' : 'hover:border-bottom hover:border-dark'}`}
          >
            Home
          </p>
          <p
            onClick={() => handleItemClick('Alojamentos')}
            className={`p-1 cursor-pointer ${activeItem === 'Alojamentos' ? 'border-bottom border-dark' : 'hover:border-bottom hover:border-dark'}`}
          >
            Alojamentos
          </p>
          <p
            onClick={() => handleItemClick('Contatos')}
            className={`p-1 cursor-pointer ${activeItem === 'Contatos' ? 'border-bottom border-dark' : 'hover:border-bottom hover:border-dark'}`}
          >
            Contatos
          </p>
        </div>

        <div className='d-flex align-items-center gap-2'>
          <button className='btn btn-outline-dark'>Login</button>
          <button className='btn btn-outline-dark'>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;