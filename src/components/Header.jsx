import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { DateRange, DateRangePicker } from 'react-date-range';
import { useState } from "react";
import { format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export function Header({ type }) {
    const [destination, setDestination] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adults: 1,
        children: 0,
        room: 1,
    })

    function handleOption(name, operation) {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const navigate = useNavigate();


    function handleSearch(){
        navigate('/hotels',{ state:{destination,date,options}})
    }

    return (
        <div className="bg-[#003580] text-white flex justify-center">
            <div className={`${type==='list' ? 'w-full max-w-[1024px] mx-20 my-8'  :'w-full max-w-[1024px] mx-20 my-16' }`}>
                <div className="flex gap-20 items-center p-2">
                    <div className="flex gap-2 items-center border-2 border-white p-2 rounded-2xl cursor-pointer">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="flex gap-2 
                    hover:border-2 items-center hover:border-white hover:bg-opacity-25 cursor-pointer hover:rounded-2xl p-2  hover:bg-gray-400">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="flex gap-2 
                    hover:border-2 items-center hover:border-white hover:bg-opacity-25 cursor-pointer hover:rounded-2xl p-2  hover:bg-gray-400">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="flex gap-2 
                    hover:border-2 items-center hover:border-white hover:bg-opacity-25 cursor-pointer hover:rounded-2xl p-2  hover:bg-gray-400">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="flex gap-2 
                    hover:border-2 items-center hover:border-white cursor-pointer hover:bg-opacity-25 hover:rounded-2xl p-2  hover:bg-gray-400">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>

                {type !== 'list' &&
                    <div> <h1 className="mt-10 mx-0 text-5xl font-bold">Find your next stay</h1>
                        <p className="my-4 mx-0 text-2xl font-normal">Search low prices on hotels, homes and much more...</p>

                        <div className=" relative">
                            <div className="h-8 bg-white border-4 border-[#febb02] flex items-center justify-between pl-4  text-gray-400  py-6 w-full max-w-[1024px] absolute bottom-[-90px] rounded-lg">
                                <div className="flex items-center gap-3">
                                    <FontAwesomeIcon icon={faBed} />
                                    <input type="text" placeholder="Where are you going?" className="border-none outline-none" 
                                    onChange={ e=>setDestination(e.target.value)}/>
                                </div>
                                <div className="text-gray-400 flex items-center gap-3  cursor-pointer">
                                    <FontAwesomeIcon icon={faCalendarDays} />
                                    <span onClick={() => setOpenDate(!openDate)}>{`Check-in Date to Check-out Date` ? `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}` : null}</span>
                                    {openDate ? <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="absolute top-[48px] left-[300px]"
                                    /> : null}
                                </div>
                                <div className="text-gray-400 flex items-center gap-3  cursor-pointer">
                                    <FontAwesomeIcon icon={faPerson} />
                                    <span className="cursor-pointer" onClick={() => setOpenOptions(!openOptions)}>{`${options.adults} adults . ${options.children} children . ${options.room} rooms`}</span>


                                    {openOptions && <div className="absolute top-[50px] bg-white text-black rounded-md shadow-md p-4">
                                        <div className=" w-52 flex justify-between items-center">
                                            <span>Adults</span>
                                            <div className="border-2 border-gray flex justify-between w-20 items-center px-2 rounded-md ">
                                                <button disabled={options.adults <= 1} onClick={() => handleOption("adults", "d")} className="text-[#003580] cursor-pointer">-</button>
                                                <span>{options.adults}</span>
                                                <button onClick={() => handleOption("adults", "i")} className="text-[#003580] cursor-pointer">+</button>
                                            </div>
                                        </div>
                                        <div className=" w-52 flex justify-between items-center py-2">
                                            <span>Children</span>
                                            <div className="border-2 border-gray flex justify-between w-20 items-center px-2 rounded-md ">
                                                <button disabled={options.children <= 0} onClick={() => handleOption("children", "d")}
                                                    className="text-[#003580] cursor-pointer">-</button>
                                                <span>{options.children}</span>
                                                <button onClick={() => handleOption("children", "i")} className="text-[#003580] cursor-pointer">+</button>
                                            </div>
                                        </div>
                                        <div className=" w-52 flex justify-between items-center">
                                            <span>Room</span>
                                            <div className="border-2 border-gray flex justify-between w-20 items-center px-2 rounded-md ">
                                                <button disabled={options.room <= 1} onClick={() => handleOption("room", "d")} className="text-[#003580] cursor-pointer">-</button>
                                                <span>{options.room}</span>
                                                <button onClick={() => handleOption("room", "i")} className="text-[#003580] cursor-pointer">+</button>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                                <div className="">
                                    <button className="bg-[#003580] font-medium text-white  border-none py-3 px-4 cursor-pointer" onClick={handleSearch}>Search</button>
                                </div>
                            </div>

                        </div>
                    </div>}
            </div>
        </div>
    )
}