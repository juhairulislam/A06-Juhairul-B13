import React from 'react';
import { CiTwitter } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';


const Footer = () => {
    return (
        <div className='bg-black p-10 md:pt-25 md:px-25 text-white'>

           {/* five item in footer */}
           <div className='grid md:grid-cols-1 lg:grid-cols-5 gap-10 text-center md:text-left'>

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

            {/* footer 5 */}

            <div>
                <p className='text-xl mb-4'>Social Links</p>
                <div className='flex gap-4 justify-center  md:justify-start'>
                    <p className=' rounded-full border border-white p-2'><FaInstagram></FaInstagram></p>
                   <p className='rounded-full border border-white p-2'> <FaFacebook></FaFacebook></p>
                   <p className='rounded-full border border-white p-2'> <CiTwitter></CiTwitter></p>

                </div>
            </div>


           

           </div>

            {/* footer last */}

            <div className='flex flex-col md:flex-row justify-between border-t border-[#ffffffa0] mt-10 text-center md:text-left'>
                <p className='text-[10px] md:text-[12px] text-[#ffffffa0] mt-4'>© 2026 Digitools. All rights reserved.</p>

                <div className='flex  justify-between mt-4 md:gap-6'>
                    <p className='text-[10px] md:text-[12px] text-[#ffffffa0]'>Privacy Policy</p>
                <p className='text-[10px] md:text-[12px] text-[#ffffffa0]'>Terms of Service</p>
                <p className='text-[10px] md:text-[12px] text-[#ffffffa0]'>Cookies</p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;