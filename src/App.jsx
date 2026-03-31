
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Rating from './Components/Rating'
import Premium from './Components/Premium'
import Products from './Components/Products'
import { Suspense } from 'react';

import './App.css'
import Step from './Components/Step'


const fetchingData = async() => {
  const res = await fetch('/data.json') ;
  return res.json() ;
}

function App() {

  const promise = fetchingData() ;

  return (
    <>
     <Navbar></Navbar>
   <Banner></Banner>
   <Rating></Rating>
   <Premium></Premium>

   <Suspense fallback={<div className='flex justify-center items-center w-full '>
    <span className="loading loading-ring loading-xl"></span>
   </div> } 
   >
    <Products promise={promise}></Products>
   </Suspense>

   <Step></Step>

    </>
  )
}

export default App
