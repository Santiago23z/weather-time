import nubes from '../components/pexels_videos_2782-(1080p).mp4';

export const Header = () => {
  return (
    <section className='relative w-full h-[50vh] -z-10 flex justify-center items-center '>
      
      <video src={nubes} className='absolute inset-0 w-full h-full object-cover bg-gradient-to-t from-blue-300 via-transparent to-white/0' autoPlay loop muted></video>
    </section>
  );
};