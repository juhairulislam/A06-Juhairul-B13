import React, { useState } from 'react';
import { HiH1 } from 'react-icons/hi2';
import vector from '../assets/Vector.png'
import {  toast } from 'react-toastify';

const PremiumCard = ({data,carts, setCarts}) => {


    const [isBuy, setIsBuy] = useState(true) ;

    const clickBuy=(data)=>{

        setIsBuy(false);
        
        const isDubble = carts.find(item => item.id === data.id ) ;
        
        if(isDubble){
            toast.error('Item Already Added!') ;
            return ;
        }
        setCarts([...carts,data]);
        toast.success(`${data.name} Add Successfully`)
       
    }

  
    return (
       <div className=' shadow rounded-xl  p-2 md:p-5 mb-5 hover:shadow-2xl'>

                   <div className='flex justify-end '>
                     <button className={`px-3 py-1.5 text-[11px] rounded-2xl ${data.tag === 'Best Seller' ? 'bg-[#FEF3C6] text-[#BB4D00]' : data.tag === 'New' ? 'bg-[#DBFCE7] text-[#0A883E]' : 'bg-[#E1E7FF] text-[#9514FA]'
                            }`}>
                            {data.tag}
                        </button>
                   </div>

                    <div className='mb-4'>
                        <div>
                            <img className='rounded-full p-3 border border-gray-200' src={data.icon} alt="Card Icon" />
                        </div>
                        
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-2xl font-semibold'>{data.name}</h1>
                        <p className='text-[11px] md:text-[13px] text-[#627382]'>{data.description}</p>
                        <p className='text-2xl font-bold mb-4'>{data.price}<span className='text-[15px] font-normal text-[#627382]'>/{data.period}</span></p>
                        
                    </div >

                    {
                        data.features.map((feature) => <p key={feature} className='flex items-center gap-3'> 
                            <img className='' src={vector}  /> {feature}

                        </p>)
                    }

                    <button onClick={() => clickBuy(data)}  className={`${isBuy?'bg-linear-to-r from-[#4F39F6]  to-[#9514FA]  text-white':'bg-green-400 text-white'} h-8 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-full  rounded-xl p-5 font-semibold text-[15px] my-4`}>{isBuy?"Buy Now":"Added To cart"}</button>


                </div>
    );
};

export default PremiumCard;