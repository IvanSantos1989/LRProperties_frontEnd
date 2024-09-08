import React from 'react';
import { useParams } from 'react-router-dom';
import { IoBedOutline, IoLocationOutline } from 'react-icons/io5';
import { GiBathtub, GiHomeGarage } from 'react-icons/gi';

const houses = [
  { id: 1, img: '/assets/house1.jpg', title: 'Casa 1', location: 'Porto, Portugal', price: '$100,00', beds: 5, baths: 3, garage: 1, description: 'Descrição detalhada da Casa 1.' },
  { id: 2, img: '/assets/house2.jpg', title: 'Casa 2', location: 'Lisboa, Portugal', price: '$200,00', beds: 4, baths: 2, garage: 1, description: 'Descrição detalhada da Casa 2.' },
];

const HouseDetails = () => {
  const { id } = useParams();
  const house = houses.find(h => h.id === parseInt(id));

  if (!house) {
    return <div>Casa não encontrada</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{house.title}</h1>
      <img src={house.img} alt={house.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-xl mb-4">{house.description}</p>
      <div className="flex space-x-5 items-center mb-4">
        <div className='flex items-center space-x-1'>
          <IoBedOutline />
          <p className='text-sm text-gray-400'>{house.beds} bed</p>
        </div>
        <div className='flex items-center space-x-1'>
          <GiBathtub />
          <p className='text-sm text-gray-400'>{house.baths} bat</p>
        </div>
        <div className='flex items-center space-x-1'>
          <GiHomeGarage />
          <p className='text-sm text-gray-400'>{house.garage} gar</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <IoLocationOutline />
        <p className='text-sm text-gray-600'>{house.location}</p>
      </div>
      <h2 className="text-2xl font-semibold mb-4">{house.price}</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Reservar</button>
    </div>
  );
};

export default HouseDetails;