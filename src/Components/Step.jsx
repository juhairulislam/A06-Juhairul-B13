import React from 'react';
import user from '../assets/user.png'
import card2 from '../assets/package.png'
import rocket from '../assets/rocket.png'

const Step = () => {
    return (
        <div className='bg-zinc-100 mt-15 rounded p-10 md:p-25'>
            <div className='text-center  '>
                <h1 className='text-3xl font-extrabold my-4 text-[#101727]'>Get Started in 3 Steps</h1>
                <p className='text-[13px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4  mt-10 w-full'>

                {/* single card-1 */}
                <div className='shadow rounded-xl bg-white p-4'>

                    <div className='flex justify-end'>
                        <p className='rounded-full w-6 h-6 bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white text-[15px] text-center font-light'>01</p>
                    </div>

                    <div className='mx-auto rounded-full w-20 h-20 p-2 bg-[#9614fa19]'>
                        <img className='rounded-full mx-auto' src={user} alt="User icon" />
                       
                    </div>

                    <div className='text-center my-10'>
                        <h2 className='text-2xl font-bold my-6'>Create Account</h2>
                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                </div>

                {/* single card-2 */}
                <div className='shadow rounded-xl bg-white p-4'>

                    <div className='flex justify-end'>
                        <p className='rounded-full w-6 h-6 bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white text-[15px] text-center font-light'>02</p>
                    </div>

                    <div className='mx-auto rounded-full w-20 h-20 p-2 bg-[#9614fa19]'>
                        <img className='rounded-full mx-auto' src={card2} alt="card 2 icon" />
                       
                    </div>

                    <div className='text-center my-10'>
                        <h2 className='text-2xl font-bold my-6'>Choose Products</h2>
                        <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                </div>

                {/* single card-3 */}
                <div className='shadow rounded-xl bg-white p-4'>

                    <div className='flex justify-end'>
                        <p className='rounded-full w-6 h-6 bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white text-[15px] text-center font-light'>03</p>
                    </div>

                    <div className='mx-auto rounded-full w-21 h-21 p-3 bg-[#9614fa19]'>
                        <img className=' mx-auto' src={rocket} alt="rocket icon" />
                       
                    </div>

                    <div className='text-center my-9'>
                        <h2 className='text-2xl font-bold my-6'>Start Creating</h2>
                        <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Step;