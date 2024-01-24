import React from 'react';
import '../components/Card.css'

export const Card = () => {
  return (
    <aside className='max-w-[23rem] p-6 bg-white rounded-2xl relative h-[370px]'>
      <div className="flex justify-between items-center">
        <h1 className='font-extrabold text-[1.8rem]'>Milan</h1>
        <p className='font-semibold'>Soleado</p>
      </div>
      <div>
        <h3 className='font-semibold'>10.3xm/s SW</h3>
        <p className='font-semibold'>Feels like 13°C. Overcast clouds. Strong breeze</p>
        <h3 className='font-semibold'>Humidity: 83%</h3>
      </div>
      <div className='flex flex-col items-end'>
        <h1 className='order-1 font-extrabold text-[1.8rem]'>14°C</h1>
        <p className='order-2 font-semibold'>18 march 2024, 6:02 p.m</p>
      </div>
    </aside>
  );
};
