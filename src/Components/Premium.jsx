import React, { useState } from 'react';

const Premium = () => {

    const [activeTab, setActiveTab] = useState(true) ;
    return (
        <div className='my-20 text-center'>
            <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
            <p className='text-[10px] md:text-[11px] text-[#627382] my-4'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

 <div className='rounded-3xl py-1  px-2 mx-auto w-44 border-1 border-gray-100 flex gap-2 mt-5 shadow'>
                <button onClick={() => setActiveTab(true)} className={`px-2 py-1.5 mx-0 font-medium ${activeTab===true?'bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white' : ''} rounded-4xl `}>Products</button>
                <button  onClick={() => setActiveTab(false)} className={`px-4 py-1.5 mx-0 font-medium ${activeTab===false?'bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white' : ''} rounded-4xl `}>Cart</button>
            </div>
        </div>

        
    );
};

export default Premium;