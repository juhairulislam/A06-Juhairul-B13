import React from 'react';
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-6'>

            <div className='w-[10px'>

                <p className='text-3xl font-extrabold bg-linear-to-r from-[#4F39F6]  via-[#9514FA] bg-clip-text text-transparent'>DigiTools</p>
            </div>




            <div className='flex items-center text-[13px] font-medium text gap-4 '>
                <p className='hover:bg-zinc-300'>Products</p>
                <p className='hover:bg-zinc-300'>Features</p>
                <p className='hover:bg-zinc-300'>Pricing</p>
                <p className='hover:bg-zinc-300'>Testimonials</p>
                <p className='hover:bg-zinc-300'>FAQ</p>




            </div>

            <div className='flex items-center'>
                < IoCartOutline />
               
                <p className=''> Login</p>
                <button className='rounded-3xl text-white bg-linear-to-r from-[#4F39F6]  to-[#9514FA] p-1.5 font-semibold'>Get Started</button>
            </div>






        </div>
    );
};

export default Navbar;