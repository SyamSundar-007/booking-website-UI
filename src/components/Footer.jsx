import { Contributor } from "./Contributor";

export function Footer() {
    return (
        <div className="w-full max-w-[1024px]">
            <div className="flex gap-28 my-10 text-[#0071c2]">
                <div className="flex flex-col gap-2 text-xs">
                    <span className=" hover:text-orange-600 cursor-pointer">Countries</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Regions</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Cities</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Districts</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Airports</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Hotels</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Places of interest</span>
                </div>

                <div className="flex flex-col gap-2 text-xs">
                    <span className=" hover:text-orange-600 cursor-pointer">Homes</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Apartments</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Resorts</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Villas</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Hostels</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Hotels</span>
                    <span className=" hover:text-orange-600 cursor-pointer">B&Bs</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Guest houses&Bs</span>
                </div>

                <div className="flex flex-col gap-2 text-xs">
                    <span className=" hover:text-orange-600 cursor-pointer">Unique places to stay</span>
                    <span className=" hover:text-orange-600 cursor-pointer">All destinations</span>
                    <span className=" hover:text-orange-600 cursor-pointer">All flight destinations</span>
                    <span className=" hover:text-orange-600 cursor-pointer">All car hire locations</span>
                    <span className=" hover:text-orange-600 cursor-pointer">All holiday destinations</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Discover</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Discover monthly stays</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Unpacked: Travel articles</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Seasonal and holiday deals</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Traveller Review Awards</span>
                </div>

                <div className="flex flex-col gap-2 text-xs">
                    <span className=" hover:text-orange-600 cursor-pointer">Car hire</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Flight finder</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Restaurant reservations</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Vacation.com for Travel Agents</span>
                </div>

                <div className="flex flex-col gap-2 text-xs">
                    <span className=" hover:text-orange-600 cursor-pointer">Coronavirus (COVID-19) FAQs</span>
                    <span className=" hover:text-orange-600 cursor-pointer">About Vacation.com</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Customer Service help</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Partner help</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Careers</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Sustainability</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Press centre</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Safety resource centre</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Investor relations</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Terms & Conditions</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Partner dispute</span>
                    <span className=" hover:text-orange-600 cursor-pointer">How we work</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Privacy & Cookie Statement</span>
                    <span className=" hover:text-orange-600 cursor-pointer">MSA Statement</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Corporate contact</span>
                    <span className=" hover:text-orange-600 cursor-pointer">Content guidelines and reporting</span>
                    <span className=" hover:text-orange-600 cursor-pointer">We Price Match</span>
                </div>


            </div>
            <div className="flex items-center justify-center my-20 text-base ">
                <span className="text-sm text-[#0071c2]  hover:text-orange-600 cursor-pointer">Extranet login</span>
            </div>

            <div className="flex justify-center items-center my-20 text-xs text-gray-600">
                <span>Copyright © 1996–2024 Vacation.com™. All rights reserved.</span>
            </div>

            <div className="flex justify-center items-center my-20 text-gray-500 text-xs ">
                <span>Vacation.com is part of Vacation Holdings Inc., the world leader in online travel and related services.

                </span>
            </div>

            <Contributor/>
        </div>
    )
}