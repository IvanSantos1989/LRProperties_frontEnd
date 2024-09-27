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

    if (!product) {
        return <h2>Produto não encontrado</h2>;
    }

    const [guests, setGuests] = useState(2);

    return (
        <div className="max-w-6xl mx-auto px-4 py-9">
            <div className="grid grid-cols-3 gap-4 ">
                <div className="col-span-2 mr-3">
                    <div className="grid grid-cols-2 gap-4">
                        <img src={product.image} alt={product.name} className="col-span-2 w-full h-64 object-cover rounded-xl" />
                        <img src={product.image2} alt="Kitchen" className="w-full h-48 object-cover rounded-xl" />
                        <img src={product.image3} alt="Another Kitchen" className="w-full h-48 object-cover rounded-xl" />
                        <img src={product.image4} alt="Bedroom" className="w-full h-48 object-cover rounded-xl" />
                        <img src={product.image5} alt="Another Bedroom" className="w-full h-48 object-cover rounded-xl" />
                    </div>
                </div>
                <div className=' h-min shadow-md rounded-xl p-5'>
                    <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                    <p className="mb-2 text-sm">{product.hóspedes} hóspedes • {product.quartos} quartos • {product.camas} camas • {product.casa_banho} casas de banho</p>
                    <p className="font-bold text-2xl mb-4">{product.price} Noite</p>
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
                        />
                    </div>
                    <div className="border rounded p-4 mb-4">
                        <h2 className="font-bold mb-2">HÓSPEDES</h2>
                        <select
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full border p-2 rounded"
                        >
                            <option value="1">1 Hóspede</option>
                            <option value="2">2 Hóspedes</option>
                            <option value="3">3 Hóspedes</option>
                            <option value="4">4 Hóspedes</option>
                            <option value="5">5 Hóspedes</option>
                            <option value="6">6 Hóspedes</option>
                        </select>
                    </div>
                    <button className="w-full bg-[#FFA282] hover:bg-[#E57A5a] text-white p-3 rounded-xl font-bold">RESERVAR</button>
                </div>
            </div>
            <div className="mt-8 border-b-2 py-4">
                <h2 className="text-xl font-bold mb-4">Descrição</h2>
                <p>{product.descrição}</p>
                <p className="mt-4">Nº Registo de Alojamento Local: {product.registrationNumber}</p>
            </div>
            <div className="mt-8 border-b-2 py-6 flex flex-col gap-5">
                <h2 className="text-xl font-bold mb-4">Comodidades</h2>
                <div className='flex items-center justify-between px-9'>
                    <span className='flex items-center gap-2'><FaWifi /> Wifi</span>
                    <span className='flex items-center gap-2'><IoMdTv /> TV</span>
                    <span className='flex items-center gap-2'><TbToolsKitchen2 /> Cozinha</span>
                    <span className='flex items-center gap-2'><PiBagSimple /> É permitido deixar as malas</span>
                </div>

            </div>
        </div>
    );
}

export default CheckoutCard