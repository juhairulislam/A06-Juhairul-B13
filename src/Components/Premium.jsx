import React from 'react';

const Premium = () => {
    return (
        <div className='my-20 text-center'>
            <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
            <p className='text-[11px] text-[#627382] my-4'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

            <div className='rounded-3xl py-1 px-2  mx-auto w-38 border-1 border-gray-200 flex gap-2'>
                <button className='px-2 py-1.5 mx-0 bg-linear-to-r from-[#4F39F6]  to-[#9514FA] rounded-4xl text-white'>Products</button>
                <button className='px-2 py-1.5'>Cart</button>
            </div>
            
        </div>

        
    );
};

export default Premium;