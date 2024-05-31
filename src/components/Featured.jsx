import img from '../assets/delhi.jpg';
import img1 from '../assets/mum.jpg';
import img2 from '../assets/jai.jpg';
import img3 from '../assets/chn.jpg';
import img4 from '../assets/blr.jpg';

export function Featured() {
    return (
        <div className='w-full max-w-[1024px] '>
            <div className='mt-8 mb-4'>
                <h1 className='text-3xl font-bold my-2'>Explore India</h1>
                <h2 className='text-lg font-normal text-gray-500'>These popular destinations have a lot to offer</h2>
            </div>
            <div className='w-full max-w-[1024px] flex justify-between items-center gap-5 '>
                <div className=''>
                    <img src={img} alt="" className='rounded-xl ' />
                    <div>
                        <h1 className='font-bold text-md'>Delhi</h1>
                        <h1 className='text-gray-500'>123 properties</h1>
                    </div>
                </div>
                <div className=''>
                    <img src={img1} alt="" className='rounded-xl ' />
                    <div>
                        <h1 className='font-bold text-md'>Mumbai</h1>
                        <h1 className='text-gray-500'>123 properties</h1>
                    </div>
                </div>
                <div className=''>
                    <img src={img2} alt="" className='rounded-xl ' />
                    <div>
                        <h1 className='font-bold text-md'>Jaipur</h1>
                        <h1 className='text-gray-500'>123 properties</h1>
                    </div>
                </div>
                <div className=''>
                    <img src={img3} alt="" className='rounded-xl ' />
                    <div>
                        <h1 className='font-bold text-md'>Chennai</h1>
                        <h1 className='text-gray-500'>123 properties</h1>
                    </div>
                </div>
                <div className=''>
                    <img src={img4} alt="" className='rounded-xl ' />
                    <div>
                        <h1 className='font-bold text-md'>Banglore</h1>
                        <h1 className='text-gray-500'>123 properties</h1>
                    </div>
                </div>
            </div>

            <div className='my-8'>
                <h1 className='text-3xl text-black font-bold'>Trending destinations</h1>
                <h1 className='text-lg text-gray-500 font-normal'>Most popular choices for travellers from India</h1>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between gap-4'>
                    <div className='relative'>
                        <div className='w-[500px] '>
                            <img src={img} alt="" className=' bg-gradient-to-t from-black h-[250px] w-[500px] object-cover rounded-lg' />
                            <h1 className='absolute top-6 text-3xl font-semibold text-white font-mono left-10'>New Delhi</h1>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className=''>
                            <img src={img1} alt="" className='bg-gradient-to-t from-black h-[250px] w-[500px] object-cover rounded-lg' />
                            <h1 className='absolute top-6 text-3xl font-semibold text-white font-mono left-10'>Mumbai</h1>
                        </div>
                    </div>

                </div>
                <div className='flex gap-x-4'>
                    <div className='relative'>
                        <div className=' '>
                            <img src={img2} alt="" className='h-[300px] w-[400px] object-cover rounded-lg' />
                            <h1 className='absolute top-6 text-3xl font-semibold text-white font-mono left-10'>Jaipur</h1>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className=''>
                            <img src={img3} alt="" className='h-[300px] w-[400px] object-cover rounded-lg' />
                            <h1 className='absolute top-6 text-3xl font-semibold text-white font-mono left-10'>Chennai</h1>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className=''>
                            <img src={img4} alt="" className='h-[300px] w-[400px] object-cover rounded-lg' />
                            <h1 className='absolute top-6 text-3xl font-semibold text-white font-mono left-10'>Banglore</h1>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}