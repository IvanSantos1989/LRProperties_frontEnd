import React from 'react'
import { Button } from '@/Components/ui/button';
import { Link } from 'react-router-dom';


const Header = () => {


    return (
        <div className=' w-full flex items-center justify-between px-10 p-5 shadow-sm bg-white '>


            <Link to="/"><p alt="logo" className='cursor-pointer text-xl font-bold'>LOGO</p></Link>


            <div className='flex items-center gap-2'>
                <Button className="rounded-xl text-white" >SignUp</Button>
                <Button className="rounded-xl text-white">Login</Button>
            </div>

        </div>
    )
}

export default Header