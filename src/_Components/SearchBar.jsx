// src/components/SearchBar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import GuestSelector from './GuestSelector';

const SearchBar = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [showGuestSelector, setShowGuestSelector] = useState(false);
    const guestSelectorRef = useRef(null);

    const handleClickOutside = (event) => {
        if (guestSelectorRef.current && !guestSelectorRef.current.contains(event.target)) {
            setShowGuestSelector(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-full shadow-lg">
            <div className="flex items-center gap-3 border-r pr-3">
                <div className="flex flex-col">
                    <label className="text-xs text-gray-500">Onde</label>
                    <input
                        type="text"
                        placeholder="Pesquisar destinos"
                        className="outline-none"
                    />
                </div>
            </div>
            <div className="flex items-center gap-3 border-r pr-3">
                <div className="flex flex-col">
                    <label className="text-xs text-gray-500">Check in</label>
                    <DatePicker
                        selected={checkInDate}
                        onChange={(date) => setCheckInDate(date)}
                        placeholderText="Adicionar data"
                        className="outline-none"
                    />
                </div>
            </div>
            <div className="flex items-center gap-3 border-r pr-3">
                <div className="flex flex-col">
                    <label className="text-xs text-gray-500">Checkout</label>
                    <DatePicker
                        selected={checkOutDate}
                        onChange={(date) => setCheckOutDate(date)}
                        placeholderText="Adicionar data"
                        className="outline-none"
                    />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex flex-col relative">
                    <label className="text-xs text-gray-500">Quem</label>
                    <input
                        type="text"
                        placeholder="Adicionar hóspedes"
                        className="outline-none"
                        onFocus={() => setShowGuestSelector(true)}
                    />
                    {showGuestSelector && (
                        <div ref={guestSelectorRef}>
                            <GuestSelector />
                        </div>
                    )}
                </div>
            </div>
            <button className="bg-[#FF9874] p-3 rounded-full text-white">
                <FiSearch />
            </button>
        </div>
    );
};

export default SearchBar;