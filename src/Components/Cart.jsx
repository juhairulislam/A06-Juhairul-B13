import React, { use } from 'react';

const Cart = ({ promise }) => {

    const allData = use(promise);
    console.log(allData)
    return (
        <div className='bg-zinc-300 p-30 text-center '>
            Your Cart Is impty
            
        </div>
    );
};

export default Cart;