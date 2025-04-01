import React from 'react';
import AboutUs from './AboutUs';
import HostelList from '../micro/HostelList';

const NewestDeals = () => {
    return (
        <div className="p-8 mx-auto flex flex-col items-center">
            <h1 className="text-2xl font-bold flex justify-center mt-5">
                Available Accommodation List
            </h1>
            <HostelList />
            <AboutUs />
        </div>
    );
};

export default NewestDeals;