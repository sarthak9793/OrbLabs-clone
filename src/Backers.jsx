import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const handleDragStart = (e) => e.preventDefault();
const items = [
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/bcc-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto' /></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/shima-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/6mv-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/7x-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/modular-capital-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/newman-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/aves-lair-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/bcc-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/shima-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/6mv-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/7x-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/modular-capital-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/newman-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/aves-lair-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/bcc-logo.svg" onDragStart={handleDragStart} role="presentation"className='mx-auto' /></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/shima-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
    <div className='mx-10 h-[200px] flex items-center'><img src="https://www.orblabs.xyz/6mv-logo.svg" onDragStart={handleDragStart} role="presentation" className='mx-auto'/></div>,
  ];
export default function Backers(){
    return(
        <div className="text-white mt-[70px] md:mt-[135px]">
            <h1 className="lg:text-[56px] text-[28px] md:text-[42px] text-center md:mb-[28px]">Backers</h1>
            <AliceCarousel mouseTracking items={items} infinite responsive={{1300: {items: 5}, 1100: {items: 4}, 900: {items: 3}, 0: {items: 2}}} autoPlay disableButtonsControls disableDotsControls animationDuration={2000}  />
        </div>
    )
}