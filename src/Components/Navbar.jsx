import React from 'react';
import { IoCartOutline } from "react-icons/io5";


const Navbar = ({carts}) => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center px-10 py-4 gap-10 md:gap-1'>

            <div className='w-[10px'>

                <p className='text-3xl font-extrabold bg-linear-to-r from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent'>DigiTools</p>
            </div>




            <div className='flex flex-col md:flex-row items-center text-[15px] font-medium text gap-4 '>
                <p className='hover:bg-zinc-300 cursor-pointer'>Products</p>
                <p className='hover:bg-zinc-300 cursor-pointer'>Features</p>
                <p className='hover:bg-zinc-300 cursor-pointer'>Pricing</p>
                <p className='hover:bg-zinc-300 cursor-pointer'>Testimonials</p>
                <p className='hover:bg-zinc-300 cursor-pointer'>FAQ</p>




            </div>

            <div className='flex  items-center gap-10 md:gap-5'>
              <div className='relative'>
{carts.length !== 0 &&                <span className='bg-red-600 rounded-full text-white text-[10px] absolute left-2 -top-2 w-4 text-center cursor-pointer'>{carts.length}</span>
}                  <span className='cursor-pointer'><IoCartOutline /></span>
              </div>
               
                <p className='cursor-pointer'> Login</p>
                <button className='cursor-pointer rounded-3xl text-white bg-linear-to-r from-[#4F39F6]  to-[#9514FA] p-2 font-semibold '>Get Started</button>
            </div>






        </div>
    );
};

export default Navbar;