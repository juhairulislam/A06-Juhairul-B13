import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black p-10 md:pt-25 md:px-25 text-white'>

           {/* five item in footer */}
           <div className='grid md:grid-cols-1 lg:grid-cols-5 gap-10'>

{/* footer 1 */}
            <div className='space-y-4'>
                <h1 className='text-3xl font-bold'>DigiTools</h1>
                <p className='text-[12px] text-[#ffffffa0]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>


            {/* footer 2 */}

            <div className='space-y-4 '>
                <h2 className=''>Products</h2>
                <p className='text-[13px] text-[#ffffffa0]'>Features</p>
                <p className='text-[13px] text-[#ffffffa0]'>Pricing</p>
                <p className='text-[13px] text-[#ffffffa0]'>Templates</p>
                <p className='text-[13px] text-[#ffffffa0]'>Integrations</p>
            </div>


            {/* footer 3 */}

            <div className='space-y-4 '>
                <h2 className=''>Company</h2>
                <p className='text-[13px] text-[#ffffffa0]'>About</p>
                <p className='text-[13px] text-[#ffffffa0]'>Blog</p>
                <p className='text-[13px] text-[#ffffffa0]'>Careers</p>
                <p className='text-[13px] text-[#ffffffa0]'>Press</p>
            </div>


            {/* footer 4 */}

            <div className='space-y-4 '>
                <h2 className=''>Resources</h2>
                <p className='text-[13px] text-[#ffffffa0]'>Documentation</p>
                <p className='text-[13px] text-[#ffffffa0]'>Help Center</p>
                <p className='text-[13px] text-[#ffffffa0]'>Community</p>
                <p className='text-[13px] text-[#ffffffa0]'>Contact</p>
            </div>

           </div>
            
        </div>
    );
};

export default Footer;