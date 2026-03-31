import React from 'react';

const BlankCart = () => {
    return (
        <div className='shadow rounded-md p-4 md:p-10 border border-zinc-200 mx-8'>
 <h1 className='text-3xl font-bold mb-6'>Your Cart</h1>

 <div className='md:p-2  text-center'>
    <p className='text-xl font-semibold text-[#627382] my-10'>Your Cart Is Empty</p>
    <p className='text-[15px] text-[#627382]'>Please Add Cart To Proceed</p>
 </div>
            
        </div>
    );
};

export default BlankCart;