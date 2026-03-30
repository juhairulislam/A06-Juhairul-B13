import React from 'react';

const Rating = () => {
    return (
        <div className='flex gap-8 p-2 justify-center items-center md:p-8  my-4 bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-center md:justify-between text-white px-2 md:px-50'>

            <div className='border-r border-[#ffffffd8] pr-10 lg:pr-30'>
                <p className='text-2xl md:text-3xl font-bold'>50K+</p>
                <p className='text-[10px] md:text-[11px] text-[#ffffffd8]'>Active Users</p>
            </div>

            <div className='border-r border-[#ffffffd8] pr-10 lg:pr-40'>
                <p className='text-2xl md:text-3xl font-bold'>200+</p>
                <p className='text-[10px] md:text-[11px] text-[#ffffffd8]'>Premium Tools</p>
            </div>
            
            <div className=''>
                <p className='text-2xl md:text-3xl font-bold'>4.9</p>
                <p className='text-[10px] md:text-[11px] text-[#ffffffd8]'>Rating</p>
            </div>
            
            
        </div>
    );
};

export default Rating;