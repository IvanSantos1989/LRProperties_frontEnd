// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { hostelData } from '../assets/hostel-data';
import { FaWifi } from "react-icons/fa";
import { IoMdTv } from "react-icons/io";
import { TbToolsKitchen2 } from "react-icons/tb";
import { PiBagSimple } from "react-icons/pi";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CheckoutCard = () => {

    const { CheckoutCardId } = useParams()

    const product = hostelData.find(item => item.id === parseInt(CheckoutCardId));
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [pets, setPets] = useState(0);
    const [adults, setAdults] = useState(1);

    return (
        
      <div className="max-w-6xl mx-auto px-4 py-9">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-2 mr-3">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="col-span-2 w-full h-64 object-cover rounded-xl"
              />
              <img
                src={product.image2}
                alt="Kitchen"
                className="w-full h-48 object-cover rounded-xl"
              />
              <img
                src={product.image3}
                alt="Another Kitchen"
                className="w-full h-48 object-cover rounded-xl"
              />
              <img
                src={product.image4}
                alt="Bedroom"
                className="w-full h-48 object-cover rounded-xl"
              />
              <img
                src={product.image5}
                alt="Another Bedroom"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
          <div className=" h-min shadow-md rounded-xl p-5">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="mb-2 text-sm">
              {product.hóspedes} hóspedes • {product.quartos} quartos •{" "}
              {product.camas} camas • {product.casa_banho} casas de banho
            </p>
            <p className="font-bold text-2xl mb-4">{product.price} Por Noite</p>
            <div className="border rounded p-4 mb-4">
              <h2 className="font-bold mb-2">DATAS</h2>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Data de Início"
                className="w-full border p-2 rounded mb-2"
                dateFormat={"dd/MM/yyyy"}
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="Data de Término"
                className="w-full border p-2 rounded"
                dateFormat={"dd/MM/yyyy"}
              />
            </div>

            <div className="border rounded p-4 mb-4">
            <div className="flex justify-between items-center">
                <span>Hóspedes</span>
                <div className="flex items-center">
                    <button onClick={() => setAdults(adults > 0 ? adults - 1 : 0)}>-</button>
                    <span className="mx-2">{adults}</span>
                    <button onClick={() => setAdults(adults + 1)}>+</button>
                </div>
            </div>
            </div>
                
            <div className="border rounded p-4 mb-4">
              <div className="flex justify-between items-center">
                <span>Animais de Estimação</span>
                <div className="flex items-center">
                  <button onClick={() => setPets(pets > 0 ? pets - 1 : 0)}>-</button>
                  <span className="mx-2">{pets}</span>
                  <button onClick={() => setPets(pets + 1)}>+</button>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#FFA282] hover:bg-[#E57A5a] text-white p-3 rounded-xl font-bold">
              RESERVAR
            </button>
          </div>
        </div>
        <div className="mt-8 border-b-2 py-4">
          <h2 className="text-xl font-bold mb-4">Descrição</h2>
          <p>{product.descrição}</p>
          <p className="mt-4">
            Nº Registo de Alojamento Local: {product.registrationNumber}
          </p>
        </div>
        <div className="mt-8 border-b-2 py-6 flex flex-col gap-5">
          <h2 className="text-xl font-bold mb-4">Comodidades</h2>
          <div className="flex items-center justify-between px-9">
            <span className="flex items-center gap-2">
              <FaWifi /> Wifi
            </span>
            <span className="flex items-center gap-2">
              <IoMdTv /> TV
            </span>
            <span className="flex items-center gap-2">
              <TbToolsKitchen2 /> Cozinha
            </span>
            <span className="flex items-center gap-2">
              <PiBagSimple /> É permitido deixar as malas
            </span>
          </div>
        </div>
      </div>
    );
}

export default CheckoutCard