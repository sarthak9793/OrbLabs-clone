import Navbar from "./Navbar"
import Hero from "./Hero"
import Creators from "./Creators"
import Backers from "./Backers"
import Featured from "./Featured"
import Footer from "./Footer"
export default function LandingPage(){
    return(
        <div className="min-h-screen bg-[#04071d] font-custom-font  px-[24px]">
            <div className="max-w-[1392px] mx-auto">
                <Navbar />
                <Hero />
                <Creators />
                <Backers />
                <Featured />
                <Footer />

            </div>

        </div>
    )

}