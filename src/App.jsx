import React from "react";
import { Header } from "./components/Header";
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';

import { Card } from "./components/Card";


export const App = () => {
  return (
    <>
      <form action="" className='flex justify-evenly absolute z-30 flex-col w-full '>
        <h1 className='text-black font-semibold text-4xl'>Novedades del clima</h1>
        <div className="flex">
          <input type="text" placeholder="Buscar..." id="search-input" className='w-[20%] rounded-lg p-2 ' />
          <button className='w-9 h-9 flex justify-center' type='submit'>
            <MagnifyingGlassCircleIcon className='text-black' />
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
          {/* Agrega cualquier otro contenido que desees encima del fondo degradado */}
        </div>
      </div>
    </>

  );
};


