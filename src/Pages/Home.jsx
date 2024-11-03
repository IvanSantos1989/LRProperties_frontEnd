import React from 'react'
import NewestDeals from '@/_Components/NewestDeals'
import Search from '@/_Components/Search'
import { Button } from '@/Components/ui/button'


const Home = () => {
    return (
        <div>
            <Search />
            <NewestDeals />
        </div>
    )
}

export default Home