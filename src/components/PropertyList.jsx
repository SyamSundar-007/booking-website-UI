import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import hotel from '../assets/hotel.jpeg';
import villa from '../assets/villa.jpeg';
import resort from '../assets/resort.jpeg';
import cottage from '../assets/cottage.jpeg';
import apart from '../assets/apart.jpeg';

export function PropertyList() {
  
    return (
        <div className='w-full max-w-[1024px] '>
            <div className='mt-8 mb-4'>
                <h1 className='text-3xl font-bold my-8'>Browse by property type</h1>
            </div>
            <div className='w-full max-w-[1024px] flex justify-between items-center gap-4  '>
                <div className='cursor-pointer'>
                    <img src={hotel} alt="" className='rounded-t-xl h-40 w-80' />
                    <div>
                        <h1 className='font-bold text-md'>Hotels</h1>
                        
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <img src={villa} alt="" className='rounded-t-xl h-40 w-80' />
                    <div>
                        <h1 className='font-bold text-md'>Villa</h1>
                        
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <img src={resort} alt="" className='rounded-t-xl h-40 w-80 ' />
                    <div>
                        <h1 className='font-bold text-md'>Resort</h1>

                    </div>
                </div>
                <div className='cursor-pointer'>
                    <img src={cottage} alt="" className='rounded-t-xl h-40 w-80 ' />
                    <div>
                        <h1 className='font-bold text-md'>Cottage</h1>
                        
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <img src={apart} alt="" className='rounded-t-xl h-40 w-80 ' />
                    <div>
                        <h1 className='font-bold text-md'>Apartments</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}