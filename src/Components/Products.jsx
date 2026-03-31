import React, { use } from 'react';

import PremiumCard from './PremiumCard';

const Products = ({promise,carts, setCarts }) => {

    const allData = use(promise);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-8'>

            {
                allData.map((data) => <PremiumCard key={data.id} data={data} carts={carts} setCarts={setCarts}></PremiumCard>)
            }

        </div>
    );
};

export default Products;