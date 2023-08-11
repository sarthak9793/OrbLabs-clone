export default function Footer(){
    return(
        <div className="text-white pb-[71px] mt-[70px] md:mt-[112px]">
            <img src="https://www.orblabs.xyz/footer-top-line-min.svg" alt="" className="h-[1px]" />
            <div className="flex flex-col md:flex-row justify-between mt-[42px]">
                <div className="flex flex-col items-center">
                    <div className="text-[14px] sm:text-[18px] lg:text-[28px] max-w-[424px]">
                        Stay up to date with our latest announcements
                    </div>
                    <div className="pt-[28px]">
                        <input type="text" placeholder="ENTER YOUR EMAIL" className="bg-transparent border-b-2 border-b-[#5a24cc] w-[200px] md:w-[325px] outline-none" />
                        <button className="bg-[#5a24cc] py-[6px] px-[8px] ml-[14px]">Submit</button>
                    </div>
                </div>
                <div className="flex md:flex-col text-[18px] lg:text-[32px] justify-center mt-[21px] lg:mt-0">
                    <div className="flex">
                        <a href="https://twitter.com/0xOrbLabs">
                            <div className="px-[8px] md:px-[36px] hover:text-[#a4fffa]">Twitter</div>
                        </a>
                        <a href="https://drive.google.com/drive/u/0/folders/1UqB9TdVM3X6DI5ENdZEyXgCa6yMLJOoy">
                            <div className="px-[8px] md:px-[36px] hover:text-[#a4fffa]">Media Kit</div>
                        </a>
                    </div>
                    <a href="https://www.linkedin.com/company/0xorbllabs">
                        <div className="px-[8px] md:px-[36px] hover:text-[#a4fffa]">LinkedIn</div>
                    </a>

                </div>

            </div>
            <div className="flex flex-col md:mt-[68px] mt-[48px] gap-y-3">
                <div className="flex gap-x-10 justify-center md:justify-start">
                    <div className="lg:text-[24px] text-[18px]">Media inquires for Orb Labs - Contact:</div>
                    <div className="flex">
                        <a href="mailto:media@orblabs.xyz">
                            <div className="lg:text-[24px] text-[18px] text-[#a4fffa]">media@orblabs.xyz</div>
                        </a>
                        <img src="https://www.orblabs.xyz/clickable-blue-corner-arrow-min.svg" alt="" className="h-[11px] w-[11px] self-center" />
                    </div>
                </div>
                <div className="lg:text-[16px] text-[14px] self-center md:self-start ">2023 Orb Labs. All right reserved</div>
            </div>
        </div>
    )
    
}