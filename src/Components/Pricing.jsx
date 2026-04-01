import React from 'react';
import rightTick from '../assets/Vector.png'

const Pricing = () => {
    return (
        <div>
            <div className='mt-5 p-10 md:p-20'>

                <div className='text-center'>
                    <h1 className='text-xl md:text-3xl font-extrabold my-3 text-[#101727]'>Simple, Transparent Pricing</h1>
                    <p className='text-[11px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* all card */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-1 md:p-8'>

                    {/* single card 1 */}
                    <div className='shadow rounded-xl p-4'>

                        <div>
                            <h1 className='text-xl font-bold'>Starter</h1>
                            <p className='text-[12px] text-[#627382]'>Perfect for getting started</p>
                        </div>

                        <div className='flex items-center my-4'>
                            <h1 className='text-2xl font-bold'>
                                $0
                            </h1>
                            <p className='text-[#627382]'>
                                /Month
                            </p>
                        </div>

                        <div className=''>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  Access to 10 free tools</p>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  Basic templates</p>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  Community support</p>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  1 project per month</p>
                        </div>

                        <div>

                            <button className='cursor-pointer rounded-4xl w-full bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white p-2 mt-10 font-semibold'>
                                Get Started Free
                            </button>

                        </div>


                    </div>


                    {/* single card 2 */}
                    <div className='shadow rounded-xl p-4 bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white'>

                        <div className='flex justify-center -mt-8'>
                            <button className='bg-[#FEF3C6] text-[#BB4D00] rounded-3xl px-2 py-1 font-medium'>Most Popular</button>
                        </div>

                        <div>
                            <h1 className='text-xl font-bold'>Pro</h1>
                            <p className='text-[12px] '>Best for professionals</p>
                        </div>

                        <div className='flex items-center my-4'>
                            <h1 className='text-2xl font-bold'>
                               $29
                            </h1>
                            <p className=''>
                                /Month
                            </p>
                        </div>

                        <div className=''>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  Access to all premium tools</p>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  Unlimited templates</p>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  Priority support</p>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  Unlimited projects</p>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  Cloud sync</p>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" /> Advanced analytics</p>
                        </div>

                        <div>

                            <button className='cursor-pointer rounded-4xl w-full bg-white mt-8 p-2 font-semibold'>
                               <span className='bg-linear-to-r from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent'>Start Pro Trial</span> 
                            </button>

                        </div>


                    </div>


                    {/* single card 3 */}
                    <div className='shadow rounded-xl p-4'>

                        <div>
                            <h1 className='text-xl font-bold'>Enterprise</h1>
                            <p className='text-[12px] text-[#627382]'>For teams and businesses</p>
                        </div>

                        <div className='flex items-center my-4'>
                            <h1 className='text-2xl font-bold'>
                                $99
                            </h1>
                            <p className='text-[#627382]'>
                                /Month
                            </p>
                        </div>

                        <div className=''>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  Everything in Pro</p>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  Team collaboration</p>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  Custom integrations</p>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  Dedicated support</p>
                            <p className='flex items-center gap-1 text-[14px]'><img src={rightTick} alt="right tick" />  Custom branding</p>
                        </div>

                        <div>

                            <button className='cursor-pointer rounded-4xl w-full bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white p-2 mt-4 font-semibold'>
                                Contact Sales
                            </button>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default Pricing;