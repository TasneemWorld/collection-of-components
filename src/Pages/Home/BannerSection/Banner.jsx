
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

const Banner = () => {
    return (
        <div className="">
            <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
                <Carousel
                    style={{ height: "50vh" }} 
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    renderArrowPrev={(clickHandler) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="text-sm md:text-lg" />
                        </div>
                    )}
                    renderArrowNext={(clickHandler) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                        </div>
                    )}
                >
                    <div>
                        <img
                            src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="aspect-[16/10] md:aspect-auto object-cover"
                        />
                        <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                            Shop now
                        </div>
                    </div>

                    <div>
                        <img
                            src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="aspect-[16/10] md:aspect-auto object-cover"
                        />
                        <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                            Shop now
                        </div>
                    </div>

                    <div>
                        <img
                            src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="aspect-[16/10] md:aspect-auto object-cover"
                        />
                        <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                            Shop now
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;