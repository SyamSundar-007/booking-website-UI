import { Navbar } from "../components/NavBar";
import { Header } from "../components/Header";
import { Featured } from "../components/Featured";
import { PropertyList } from "../components/PropertyList";
import { Mail } from "../components/Mail";
import { Footer } from "../components/Footer";

export function Home(){
    return (
       <div>
        <Navbar/>
        <Header/>
        <div className="mt-4 flex flex-col items-center gap-2">
            <PropertyList/>
            <Featured/>
            <Mail/>
            <Footer/>
        </div>
       </div>
    )
}