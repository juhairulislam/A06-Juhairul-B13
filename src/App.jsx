
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Rating from './Components/Rating'
import Premium from './Components/Premium'
import Products from './Components/Products'
import { Suspense } from 'react';
import React, { useState } from 'react';


import './App.css'
import Step from './Components/Step'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import BlankCart from './Components/BlankCart'


const fetchingData = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {

  const promise = fetchingData();
  const [activeTab, setActiveTab] = useState(true);

  const [carts, setCarts] = useState([]) ;
   console.log(carts)


  return (
    <>
      <Navbar  carts={carts}></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <Premium activeTab={activeTab} setActiveTab={setActiveTab} carts={carts}></Premium>

      <Suspense fallback={<div className='flex justify-center items-center w-full '>
        <span className="loading loading-ring loading-xl"></span>
      </div>}
      >

        {activeTab === true ? <Products promise={promise} carts={carts} setCarts={setCarts}></Products> : carts.length === 0? <BlankCart></BlankCart>:<Cart carts={carts} setCarts={setCarts} promise={promise}></Cart>}


      </Suspense>

      <Step></Step>
      <Pricing></Pricing>
      <Footer></Footer>

    </>
  )
}

export default App
