import React, { useState } from 'react';
import NewestDeals from '@/Components/Home/NewestDeals';
import Search from '@/Components/Home/Search';
import { Button } from '@/Components/micro/Buttons/Button';
import { HomePageForms } from '@/Components/HomePageForms';
import CurrentReviews from '@/Components/CurrentReviews';
import AboutUs from '@/Components/Home/AboutUs';

const Home = () => {
    const [filters, setFilters] = useState()
    
    return (
        <div>
            <Search setFilters={setFilters}/>
            <NewestDeals filters={filters}/>
            <AboutUs />
            <div className='flex flex-col items-center justify-center m-10'>
                <HomePageForms />
                <CurrentReviews />
            </div>
        </div>
    );
};

export default Home;