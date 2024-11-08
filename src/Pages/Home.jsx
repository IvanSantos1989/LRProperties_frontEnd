import React from 'react'
import NewestDeals from '@/Components/Home/NewestDeals'
import Search from '@/Components/Home/Search'
import { Button } from '@/Components/micro/Button'


const Home = () => {
    return (
        <div>
            <Search />
            <NewestDeals />
        </div>
    )
}

export default Home