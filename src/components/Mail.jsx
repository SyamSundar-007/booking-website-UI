export function Mail(){
    return (
        <div className="w-full mt-12 bg-[#003580] text-white flex flex-col items-center gap-4 p-8">
           <h1 className="text-3xl font-semibold">Save time, save money!</h1> 
           <span className="text-gray-300 text-lg font-normal">Sign up and we'll send the best deals to you</span>
           <div>
            <input type="text" className="w-[300px] px-4 py-2 text-black outline-none border-none mr-2 rounded-md"  placeholder="Your Email"/>
            <button className="px-4 py-2 bg-[#0071c2] text-white font-medium border-none rounded-md cursor-pointer">Subscribe</button>
           </div>
        </div>
    )
}