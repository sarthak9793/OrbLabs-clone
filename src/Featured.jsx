export default function Featured(){
    return(
        <div className="text-white mt-[70px] md:mt-[135px]">
            <h1 className="lg:text-[56px] text-[28px] md:text-[42px] text-center">Featured In</h1>
            <div className="flex flex-wrap gap-y-5 justify-center gap-x-14 mt-12">
                <img src="https://www.orblabs.xyz/coindesk-logo.svg" alt="" className="w-[117px] h-[21px] md:w-[238px] md:h-[45px]" />
                <img src="https://www.orblabs.xyz/blockworks-logo.svg" alt="" className="w-[117px] h-[18px] md:w-[253px] md:h-[40px]" />
                <img src="https://www.orblabs.xyz/the-block-logo.svg" alt="" className="w-[117px] h-[26px] md:w-[167px] md:h-[45px]" />

            </div>
        </div>
    )
}
// w-[117px] h-[21px] md:w-[238px] md:h-[45px]
// w-[117px] h-[18px] md:w-[253px] md:h-[40px]
// w-[240px] h-[66px] md:w-[117px] md:h-[32px]