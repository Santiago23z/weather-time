import React from 'react';
import '../components/Card.css'

export const Card = () => {
  return (
<div className=' flex gap-32 justify-center'>
  <aside className='max-w-[25rem] p-6 bg-white rounded-2xl relative h-[370px]'>
    <div className="flex justify-between items-center">
      <h1 className='font-extrabold text-[1.8rem]'>Milan</h1>
      <p className='font-semibold'>Soleado</p>
    </div>
    <div>
      <h3 className='font-semibold'>10.3xm/s SW</h3>
      <p className='font-semibold'>Feels like 13°C. Overcast clouds. Strong breeze</p>
      <h3 className='font-semibold'>Humidity: 83%</h3>
    </div>
    <div className='absolute inset-x-6 bottom-6 flex flex-col items-end'>
      <h1 className='font-extrabold text-[1.8rem]'>30°C</h1>
      <p className='font-semibold'>18 march 2024, 6:02 p.m</p>
    </div>
  </aside>
  <aside className='max-w-[25rem] p-6 bg-white rounded-2xl relative h-[370px]'>
    <div className="flex justify-between items-center">
      <h1 className='font-extrabold text-[1.8rem]'>Paris</h1>
      <p className='font-semibold'>Soleado</p>
    </div>
    <div>
      <h3 className='font-semibold'>10.3xm/s SW</h3>
      <p className='font-semibold'>Feels like 13°C. Overcast clouds. Strong breeze</p>
      <h3 className='font-semibold'>Humidity: 83%</h3>
    </div>
    <div className='absolute inset-x-6 bottom-6 flex flex-col items-end'>
      <h1 className='font-extrabold text-[1.8rem]'>28°C</h1>
      <p className='font-semibold'>18 march 2024, 6:02 p.m</p>
    </div>
  </aside>
  <aside className='max-w-[25rem] p-6 bg-white rounded-2xl relative h-[370px]'>
    <div className="flex justify-between items-center">
      <h1 className='font-extrabold text-[1.8rem]'>Medellin</h1>
      <p className='font-semibold'>Soleado</p>
    </div>
    <div>
      <h3 className='font-semibold'>10.3xm/s SW</h3>
      <p className='font-semibold'>Feels like 13°C. Overcast clouds. Strong breeze</p>
      <h3 className='font-semibold'>Humidity: 83%</h3>
    </div>
    <div className='absolute inset-x-6 bottom-6 flex flex-col items-end'>
      <h1 className='font-extrabold text-[1.8rem]'>25°C</h1>
      <p className='font-semibold'>18 march 2024, 6:02 p.m</p>
    </div>
  </aside>
</div>
  );
};
