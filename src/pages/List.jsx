import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Navbar } from "../components/NavBar";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { SearchItem } from "../components/SearchItem";

export function List() {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);

    return (
        <div>
            <Navbar />
            <Header type="list" />

            <div className="flex justify-center mt-5">
                <div className="w-full max-w-[1024px] flex gap-5">
                    <div className="flex-col  bg-[#febb02] p-2 h-80 rounded-lg sticky top-3">
                        <h1 className="text-xl text-[#555] mb-2">Search</h1>
                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-lg">Destination</label>
                            <input className=" h-8 border-none p-1" type="text"
                                placeholder={destination} />
                        </div>
                        <div className="flex flex-col gap-1 mb-2">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)} className="flex items-center cursor-pointer h-8 bg-white p-1">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                            {openDate && (<DateRange
                                onChange={(item) => setDate([item.selection])} minDate={new Date()}
                                ranges={date}
                            ></DateRange>)}
                        </div>
                        <div className="flex flex-col gap-1 mb-2">

                        </div>
                    </div>
                    <div className="flex-3">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>

            </div>
        </div>
    )
}