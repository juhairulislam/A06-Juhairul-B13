import React, { use } from 'react';

import PremiumCard from './PremiumCard';

const Products = ({carts,setCarts , clickBuy,setClickBuy, promise}) => {

    const allData = use(promise);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-8'>

            {
                allData.map((data) => <PremiumCard carts={carts} setCarts={setCarts} clickBuy={clickBuy} setClickBuy={setClickBuy} key={data.id} data={data} ></PremiumCard>)
            }

        </div>
    );
};

export default Products;