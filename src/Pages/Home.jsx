import React, { useState } from 'react';
import NewestDeals from '@/Components/Home/NewestDeals';
import Search from '@/Components/Home/Search';
import Reviews from '@/Components/Reviews';
import { Button } from '@/Components/micro/Buttons/Button';

const Home = () => {
    const [filters, setFilters] = useState()
    
    return (
        <div>
            <Search setFilters={setFilters}/>
            <NewestDeals filters={filters}/>
            <Reviews />
        </div>
    );
};

export default Home;