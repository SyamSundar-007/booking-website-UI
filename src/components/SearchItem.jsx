import hoteel from '../assets/hoteel.webp';

export function SearchItem() {
    return (
        <div>
            <div className="border-2 p-4 border-gray-300 rounded-md flex justify-between gap-5 mb-5">
                <img src={hoteel} alt="" className='w-[200px] h-[200px] object-cover'/>

                <div className="flex flex-col gap-2 flex-2">
                    <h1 className="text-lg text-[#0071c2]">Aloft New Delhi Aerocity</h1>
                    <span className="text-md">500m from center</span>
                    <span className="text-md bg-[#008009] text-white w-max p-1 rounded-md">Free airport taxi</span>
                    <span className="text-md font-bold ">
                        Studio Apartment with Air conditioning
                    </span>
                    <span className="text-md ">
                        Entire studio • 1 bathroom • 21m² 1 full bed
                    </span>
                    <span className="text-md text-[#008009] font-bold ">Free cancellation </span>
                    <span className="text-md text-[#008009]">
                        You can cancel later, so lock in this great price today!
                    </span>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <span className=' font-medium'>Excellent</span>
                        <button className='bg-[#003580] text-white p-1 font-bold border-none'>8.9</button>
                    </div>
                    <div className=" text-right flex flex-col gap-1">
                        <span className="text-md">1000</span>
                        <span className="text-sm text-gray-400">Includes taxes and fees</span>
                        <button className="bg-[#0071c2] text-white font-bold px-2 py-1 border-none cursor-pointer rounded-md">See availability</button>
                    </div>
                </div>
            </div>
        </div>
    )
}