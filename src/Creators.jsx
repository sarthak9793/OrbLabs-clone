export default function Creators(){
    return(
        <div className="text-white mt-20">
            <h1 className="lg:text-[56px] text-[28px] md:text-[42px] text-center mb-6">Creators of</h1>
            <div className="flex flex-col xl:flex-row items-center justify-center gap-x-8 gap-y-7 xl:gap-y-0">
                <a href="https://www.earlybird.xyz/">
                    <div className="bg-gradient-to-r from-[#f14885] to-[#f14885]/10 h-[193px] max-w-[531px] p-[1px] rounded-3xl cursor-pointer">
                        <div className="bg-[#1a1b2f] hover:bg-[#202230] w-full h-full rounded-3xl p-7">
                            <div className="flex justify-between">
                                <img src="https://www.orblabs.xyz/earlybird-default-logo.svg" alt="" className="pr-8" />
                                <img src="https://www.orblabs.xyz/clickable-red-corner-arrow-min.svg" alt="" className="md:w-[28px] md:h-[28px] h-[20px] w-[20px]" />
                            </div>
                            <p className="mt-4">Earlybird is a cross-chain messaging protocol for sending data between blockchains.</p>
                        </div>
                    </div>
                </a>
                <a href="https://magiclane.xyz/">
                    <div className="bg-gradient-to-r from-[#f14885] to-[#f14885]/10 h-[193px] max-w-[531px] p-[1px] rounded-3xl cursor-pointer">
                        <div className="bg-[#1a1b2f] hover:bg-[#202230] w-full h-full rounded-3xl p-7">
                            <div className="flex justify-between">
                                <img src="https://www.orblabs.xyz/magiclane-default-logo.svg" alt="" className="pr-8" />
                                <img src="https://www.orblabs.xyz/clickable-red-corner-arrow-min.svg" alt="" className="md:w-[28px] md:h-[28px] h-[20px] w-[20px]" />
                            </div>
                            <p className="mt-4">Earlybird is a cross-chain messaging protocol for sending data between blockchains.</p>
                        </div>
                    </div>
                </a>
            </div>

            
            
        </div>
    )
}