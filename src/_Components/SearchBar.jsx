import { useState, useRef, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import GuestSelector from './GuestSelector';

const SearchBar = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [showGuestSelector, setShowGuestSelector] = useState(false);
    const [adults, setAdults] = useState(1);
    const [pets, setPets] = useState(0);
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
                    <label className="text-xs outline-none">PORTO</label>
                    {/* <input
                        type="text"
                        placeholder="Adicionar localização"
                        className="outline-none"
                    /> */}
                </div>
            </div>
            <div className="flex items-center gap-3 border-r pr-3">
                <div className="flex flex-col">
                    <label className="text-xs text-gray-500">Check-in</label>
                    <DatePicker
                        selected={checkInDate}
                        onChange={(date) => setCheckInDate(date)}
                        placeholderText="Adicionar data"
                        className="outline-none"
                        dateFormat={"dd/MM/yyyy"}
                    />
                </div>
            </div>
            <div className="flex items-center gap-3 border-r pr-3">
                <div className="flex flex-col">
                    <label className="text-xs text-gray-500">Check-out</label>
                    <DatePicker
                        selected={checkOutDate}
                        onChange={(date) => setCheckOutDate(date)}
                        placeholderText="Adicionar data"
                        className="outline-none"
                        dateFormat={"dd/MM/yyyy"}
                    />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex flex-col relative">
                    <label className="text-xs text-gray-500">Quem</label>
                    <input
                        type="text"
                        value={`${adults} Hóspede, ${pets} Animal`}
                        onFocus={() => setShowGuestSelector(true)}
                        className="outline-none"
                    />
                    {showGuestSelector && (
                        <div ref={guestSelectorRef}>
                            <GuestSelector 
                                adults={adults}
                                pets={pets}
                                setAdults={setAdults}
                                setPets={setPets}
                            />
                        </div>
                    )}
                </div>
            </div>
            <button className="bg-[#FF9874] p-3 rounded-full text-white hover:bg-[#E57A5a]">
                <FiSearch />
            </button>
        </div>
    );
};

export default SearchBar;