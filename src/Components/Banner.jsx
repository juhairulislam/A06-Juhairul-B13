import React from 'react';
import img from '../../public/Group 5.png'
import img2 from '../../public/Play.png'
import banner from '../../public/banner.png'

const Banner = () => {
    return (
        <div className='p-6 flex justify-between flex-col md:flex-row'>


            {/* part-1 */}

           <div className='flex items-center justify-center md:justify-between text-center md:text-left'>
             <div className='space-y-4 my-5'>

                <button className='flex mx-auto md:mx-0  md:items-center gap-2  bg-[#E1E7FF] px-2 py-1 rounded-3xl'><img className='h-5 w-5 object-contain' src={img} /> <p className='text-[14px] bg-linear-to-r from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent'> New: AI-Powered Tools Available</p> </button>

                <h1 className='text-3xl md:text-5xl font-bold'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='text-[11px] md:text-[13px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />

                    Explore Products
                </p>

                <div className='flex gap-4 justify-center md:justify-start'>
                    <button  className='cursor-pointer rounded-4xl text-white bg-linear-to-r from-[#4F39F6]  to-[#9514FA] px-3 py-2'>Explore Products</button>
                    <button className='rounded-4xl flex items-center gap-2 border-1 border-[#9514FA] p-2 bg-linear-to-r from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent'><img src={img2}  /> Watch Demo</button>

                </div>

            </div>
           </div>


            {/* part-2 */}

            <div className='mx-auto md:mx-0'>
                <img className='object-cover h-100' src={banner} alt="Banner Image" />

            </div>



        </div>
    );
};

export default Banner;