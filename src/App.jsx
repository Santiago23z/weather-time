import React from "react";
import { Header } from "./components/Header";
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import './components/App.css'
import { Card } from "./components/Card";


export const App = () => {
  return (
    <>
      <form action="" className='flex  absolute z-30 flex-col w-full h-[40vh] justify-center'>
        <h1 className='text-black font-semibold flex justify-center text-4xl m-10  '>Novedades del clima</h1>
        <div className="flex justify-center">
          <input type="text" placeholder="Buscar..." id="search-input" className='w-[20%]  outline-none focus:outline-none border border-gray-300 px-4 py-2  rounded-lg p-2 ' />
          <button className='w-9 h-9 flex justify-center ml-6 ' type='submit'>
            <MagnifyingGlassIcon className='text-black' />
          </button>
        </div>
      </form>
      <div className="relative bg-blue-300 h-[100vh] w-full z-20">


        <div className="bg-gradient-to-t from-blue-300 via-transparent to-white/0 w-full relative h-[50vh] ">
          <div className=" z-30">

          </div>

          <div className='text-center absolute inset-0 w-full'>
            <Header />
          </div>
        </div>
        <Card/>
      </div>
    </>

  );
};


