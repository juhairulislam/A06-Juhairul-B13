import React, { use } from 'react';
import {  toast } from 'react-toastify';

const Cart = ({carts,setCarts }) => {


    const totalPrice = carts.reduce((sum,item) => sum +Number(item.price),0) ;
    // console.log(totalPrice)

    // const allData = use(promise);

    const blankCart=()=>{

        setCarts([])
        toast.success("Proceed Successful!")
    }

    const deleteCart = (cart) =>{

        const removeCart = carts.filter(car => car.id !== cart.id);

        setCarts(removeCart) ;
        toast.success(`${cart.name} Remove Successfully`)

       
    }



    // console.log(allData)
    return (
        <div className='shadow rounded-md p-4 md:p-10 border border-zinc-200 mx-8'>

            <h1 className='text-2xl font-bold mb-6'>Your Cart</h1>

            {
                carts.map((cart) => <div key={cart.id} className='p-2 md:p-2'>



                    <div className='bg-zinc-50 p-1 md:p-4 rounded-xl flex justify-between'>
                        <div className='flex gap-4'>

                            <div className='rounded-full border border-zinc-300 p-3 md:p-4'>
                                <img className='h-8 md:w-8' src={cart.icon} alt="cart icon" />

                            </div>
                            <div className='pt-2'>
                                <h1 className='text-[13px] md:text-xl font-semibold mb-1'>{cart.name}</h1>
                                <p className='text-[14px] text-[#627382]'>$ {cart.price}</p>
                            </div>

                        </div>

                        <div className='flex items-center'>
                            <h2 onClick={() => deleteCart(cart)} className='text-[12px] md:text-[14px] text-red-400 font-semibold cursor-pointer'>Remove</h2>
                        </div>
                    </div>




                </div>

                )
            }

            <div className='flex justify-between p-4'>
                <h1 className='text-xl font-medium'>Total</h1>
                <p className='text-xl font-bold'>$ {totalPrice}</p>
            </div>

            <div className='p-4'>
                <button onClick={blankCart} className='w-full bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white font-semibold p-2 rounded-4xl'>Proceed to Checkout</button>
            </div>

        </div>
    );
};

export default Cart;