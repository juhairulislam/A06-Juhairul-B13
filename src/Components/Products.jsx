import React, { use } from 'react';
import { HiH1 } from 'react-icons/hi2';

const Products = ({promise}) => {

    const allData = use(promise) ;
    
    return (
        <div>

            {
                allData.map((data) => <div>

                    <div>
                        <img src={data.icon} alt="Card Icon" />
                        <button className={`px-2 py-1.5 rounded-2xl ${data.tag === 'Best Seller' ? 'bg-[#FEF3C6] text-[#BB4D00]' : data.tag === 'New' ? 'bg-[#DBFCE7] text-[#0A883E]' : 'bg-[#E1E7FF] text-[#9514FA]'
    }`}>
        {data.tag}
    </button>
                    </div>
                </div> )
            }
            
        </div>
    );
};

export default Products;