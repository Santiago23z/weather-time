import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import nubes from '../components/pexels_videos_2782-(1080p).mp4';

export const Header = () => {
  return (
    <section className='relative w-full h-[40vh] flex justify-center items-center'>
      <div className='relative z-10 text-center'>
        <h1 className='text-black font-semibold text-4xl'>Novedades del clima</h1>
        <form action="" className='flex justify-evenly mt-8'>
          <input type="text" placeholder="Buscar..." id="search-input" className='w-[70%] rounded-lg p-2' />
          <button className='w-9 h-9 flex justify-center' type='submit'>
            <MagnifyingGlassCircleIcon className='text-black' />
          </button>
        </form>
      </div>
      <video src={nubes} className='absolute inset-0 w-full h-full object-cover' autoPlay loop muted></video>
    </section>
  );
};