import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

import '../styles.css';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';


import coxbazar from "../assets/images/Rectangle 1.png"
import sajek from "../assets/images/sajek.jpg"
import sreemangal from "../assets/images/sreemangal.jpg"
import sundarban from "../assets/images/sundarban.jpg"

import { FaArrowRight } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowDropleft, IoIosArrowDropright, IoIosArrowForward } from "react-icons/io";


const HomeBanner = () => {
    const swiperRef = useRef(null);

    const handlePrev = useCallback(() => {
        swiperRef.current.swiper.slidePrev();
    }, [swiperRef]);

    const handleNext = useCallback(() => {
        swiperRef.current.swiper.slideNext();
    }, [swiperRef]);
    return (
        <div>
            <div className='absolute bottom-10 left-[48%] bg-gray-300 rounded-full p-2 flex items-center z-10'>
                <button className='text-xl' onClick={handlePrev}><IoIosArrowBack /></button>
            </div>
            <Swiper
            ref={swiperRef}
                spaceBetween={50}
                slidesPerView={1}
                cssMode={true}
                // navigation={true}
                // pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            // autoplay={{
            //     delay: 8000, 
            //     disableOnInteraction: true,
            //   }}
            // loop={true} // Keep the loop continuous
            >
                <SwiperSlide id="one">
                    <div className='text-white w-5/12 mx-20 space-y-4'>
                        <h1 className='font-bebas_neue text-6xl'>Cox's bazar</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <Link to="/booking" className='bg-[#F9A51A] text-black p-2
                         flex items-center w-1/4 gap-4 font-semibold'>Booking <FaArrowRight /></Link>
                    </div>
                    <Outlet></Outlet>
                </SwiperSlide>
                <SwiperSlide id="two">
                    <div className='text-white w-5/12 mx-20 space-y-4'>
                        <h1 className='font-bebas_neue text-6xl'>Sajek Valley</h1>
                        <p>Nestled in the hills of Rangamati, Sajek Valley is a paradise of rolling greenery, floating clouds, and stunning sunsets. Perfect for tranquility seekers and adventure lovers alike..</p>
                        <Link to="/booking" className='bg-[#F9A51A] text-black p-2
                         flex items-center w-1/4 gap-4 font-semibold'>Booking <FaArrowRight /></Link>
                    </div>
                    <Outlet></Outlet>
                </SwiperSlide>
                <SwiperSlide id="three">
                    <div className='text-white w-5/12 mx-20 space-y-4'>
                        <h1 className='font-bebas_neue text-6xl'>Sreemangal
                        </h1>
                        <p>Known as the tea capital of Bangladesh, Sreemangal enchants visitors with endless tea gardens, serene lakes, and vibrant biodiversity. A haven for nature enthusiasts.
                        </p>
                        <Link to="/booking" className='bg-[#F9A51A] text-black p-2
                         flex items-center w-1/4 gap-4 font-semibold'>Booking <FaArrowRight /></Link>
                    </div>
                    <Outlet></Outlet>
                </SwiperSlide>
                <SwiperSlide id="four">
                    <div className='text-white w-5/12 mx-20 space-y-4'>
                        <h1 className='font-bebas_neue text-6xl'>Sundarbans</h1>
                        <p>Home to the majestic Royal Bengal Tiger, the Sundarbans is the largest mangrove forest in the world. Explore its mystical waterways and rich wildlife for an unforgettable adventure.</p>
                        <Link to="/booking" className='bg-[#F9A51A] text-black p-2
                         flex items-center w-1/4 gap-4 font-semibold'>Booking <FaArrowRight /></Link>
                    </div>
                    <Outlet></Outlet>
                </SwiperSlide>
                <SwiperSlide id="one">
                    <div className='text-white w-5/12 mx-20 space-y-4'>
                        <h1 className='font-bebas_neue text-6xl'>Cox's bazar</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <Link to="/booking" className='bg-[#F9A51A] text-black p-2
                         flex items-center w-1/4 gap-4 font-semibold'>Booking <FaArrowRight /></Link>
                    </div>
                    <Outlet></Outlet>
                </SwiperSlide>
            </Swiper>
            <div className='absolute bottom-10 left-[52%]  bg-gray-300 rounded-full p-2 flex items-center z-10'>
                <button className='text-xl' onClick={handleNext}><IoIosArrowForward /></button>
            </div>
        </div>
    );
};

export default HomeBanner;