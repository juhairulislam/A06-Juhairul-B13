import React from 'react';
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center p-10 gap-10 md:gap-1'>

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
              <div >
                  < IoCartOutline />
              </div>
               
                <p className='cursor-pointer'> Login</p>
                <button className='cursor-pointer rounded-3xl text-white bg-linear-to-r from-[#4F39F6]  to-[#9514FA] p-2 font-semibold '>Get Started</button>
            </div>






        </div>
    );
};

export default Navbar;