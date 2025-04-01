import React from 'react'
import NewestDeals from '@/Components/Home/NewestDeals'
import Search from '@/Components/Home/Search'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

const Home = () => {
    return (
        <div>
            <Search />
            <NewestDeals />
        </div>
    )
}

export default Home