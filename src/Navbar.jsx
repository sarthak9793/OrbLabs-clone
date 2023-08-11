import { useState } from "react"
import {AiOutlineMenu} from "react-icons/ai"
export default function Navbar(){
    const [isNavActive, setIsNavActive] = useState(false)
    return(
        <div className="flex justify-between pt-[25px] relative">
            {/* <img src="https://www.orblabs.xyz/orb-labs-logo-min.svg" alt="" className="md:h-[68px] h-[51px]" /> */}
            <img src="./logo.svg" alt="" className="md:w-[200px] md:h-[70px] w-[170px] h-[50px] object-cover" />
            <div className="text-white md:flex gap-x-5 absolute top-0 right-0 hidden">
                <img src="https://www.orblabs.xyz/nav-line-1.svg" alt="" />
                <a href="https://jobs.ashbyhq.com/OrbLabs">
                    <div className="pt-11 hover:text-[#a4fffa]">CAREERS</div>
                </a>
                <img src="https://www.orblabs.xyz/nav-line-1.svg" alt="" />
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F0xOrbLabs%2F">
                    <div className="pt-11 hover:text-[#a4fffa]">FOLLOW</div>
                </a>
                <img src="https://www.orblabs.xyz/nav-line-1.svg" alt="" />
            </div>
            <AiOutlineMenu color="white" className="md:hidden self-center" size={30} onClick={()=>{setIsNavActive(!isNavActive)}} />
            <div className={`${isNavActive ? "absolute opacity-100 md:hidden right-0 top-20 rounded-[20px] p-3 py-6 duration-200" : "absolute opacity-0 md:hidden right-0 top-20 rounded-[20px] p-3 py-6 duration-200"}`}>
                <ul className="text-white flex flex-col gap-y-4">
                    <a href="https://jobs.ashbyhq.com/OrbLabs">
                        <li className="px-[16px] hover:text-[#a4fffa]">CAREERS</li>
                    </a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F0xOrbLabs%2F">
                        <li className="px-[16px] hover:text-[#a4fffa]">FOLLOW</li>
                    </a>
                </ul>
            </div>
            
            
        </div>
    )
}