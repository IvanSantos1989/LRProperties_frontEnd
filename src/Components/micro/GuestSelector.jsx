import React from 'react';
import PropTypes from 'prop-types';

const GuestSelector = ({ adults, pets, setAdults, setPets }) => {
    return (
        <div className="absolute mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
                <span>Guest</span>
                <div className="flex items-center">
                    <button onClick={() => setAdults(adults > 0 ? adults - 1 : 0)}>-</button>
                    <span className="mx-2">{adults}</span>
                    <button onClick={() => setAdults(adults + 1)}>+</button>
                </div>
            </div>
            
            <div className="flex justify-between items-center">
                <span>Animal</span>
                <div className="flex items-center">
                    <button onClick={() => setPets(pets > 0 ? pets - 1 : 0)}>-</button>
                    <span className="mx-2">{pets}</span>
                    <button onClick={() => setPets(pets + 1)}>+</button>
                </div>
            </div>
        </div>
    );
};

GuestSelector.propTypes = {
    adults: PropTypes.number.isRequired,
    pets: PropTypes.number.isRequired,
    setAdults: PropTypes.func.isRequired,
    setPets: PropTypes.func.isRequired,
};

export default GuestSelector;