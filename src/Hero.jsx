export default function Hero(){
    return(
        <div className="text-white flex justify-between relative">
            <div className="mt-[182px]">
                <h1 className="font-semibold text-[28px] sm:text-[42px] lg:text-[68px] max-w-[655px] leading-[50px] lg:leading-[76px] text-center lg:text-left">
                    Delivering the omnichain future
                </h1>
                <p className="max-w-[538px] mt-[16px] text-[14px] sm:text-[16px] lg:text-[24px] leading-[25px] lg:leading-[32px] xl:h-[475px] h-[100px] text-center lg:text-left">Building cross-chain messaging protocols and omnichain applications for both developers and consumers.</p>
            </div>
            <img src="https://www.orblabs.xyz/home-description-image-min.svg" alt="" className="absolute right-0 hidden xl:block" />
        </div>
    )
}