import React, { useState } from 'react';

const GuestSelector = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [babies, setBabies] = useState(0);
    const [pets, setPets] = useState(0);

    return (
        <div className="absolute mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
                <span>Adultos</span>
                <div className="flex items-center">
                    <button onClick={() => setAdults(adults > 0 ? adults - 1 : 0)}>-</button>
                    <span className="mx-2">{adults}</span>
                    <button onClick={() => setAdults(adults + 1)}>+</button>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <span>Crianças</span>
                <div className="flex items-center">
                    <button onClick={() => setChildren(children > 0 ? children - 1 : 0)}>-</button>
                    <span className="mx-2">{children}</span>
                    <button onClick={() => setChildren(children + 1)}>+</button>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <span>Bebês</span>
                <div className="flex items-center">
                    <button onClick={() => setBabies(babies > 0 ? babies - 1 : 0)}>-</button>
                    <span className="mx-2">{babies}</span>
                    <button onClick={() => setBabies(babies + 1)}>+</button>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <span>Animais de estimação</span>
                <div className="flex items-center">
                    <button onClick={() => setPets(pets > 0 ? pets - 1 : 0)}>-</button>
                    <span className="mx-2">{pets}</span>
                    <button onClick={() => setPets(pets + 1)}>+</button>
                </div>
            </div>
        </div>
    );
};

export default GuestSelector;