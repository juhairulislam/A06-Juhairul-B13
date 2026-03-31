import React, { use } from 'react';

const Cart = ({ promise,carts }) => {

    const allData = use(promise);
    console.log(allData)
    return (
        <div className='shadow p-4 md:p-15 border border-zinc-200 mx-8'>

            <h1 className='text-2xl font-bold'>Your Cart</h1>

            {
                carts.map((cart) => <div key={cart.id} className='p-2 md:p-10'>

                    

                    <div className='bg-zinc-50 p-1 md:p-4 rounded-xl flex justify-between'>
                        <div className='flex gap-4'>

                       <div className='rounded-full border border-zinc-300 p-3 md:p-4'>
                         <img className='h-8 md:w-8' src={cart.icon} alt="cart icon" />

                       </div>
                        <div >
                            <h1 className='text-[15px] md:text-xl font-semibold mb-2'>{cart.name}</h1>
                            <p className='text-[14px] text-[#627382]'>{cart.price}</p>
                        </div>

                    </div>

                    <div className='flex items-center'>
                        <h2 className='text-red-400 font-semibold'>Remove</h2>
                    </div>
                    </div>


                </div>)
            }
           
            
        </div>
    );
};

export default Cart;