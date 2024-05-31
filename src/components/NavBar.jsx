export function Navbar(){
    return (
        <div className="h-30 bg-[#003580] flex justify-center">
            <div className=" w-full max-w-[1024px] text-white flex items-center justify-between">
                <span className="font-bold text-5xl">Vacation.com</span>
                <div className="ml-[20px] border-none
                 text-[#003580] py-4">
                    <button className="bg-white py-2 px-4 rounded-lg">Register</button>
                    <button className=" ml-[20px] py-2 px-4 bg-white rounded-lg">Login</button>
                </div>
            </div>
        </div>
    )
}