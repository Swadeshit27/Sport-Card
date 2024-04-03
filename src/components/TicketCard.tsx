"use client"

import ticketDetails from "../data/ticketDetails.json"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import Image from "next/image";

interface ticketType {
    id: number,
    imgSrc: string,
    title: string,
    place: string,
    buttonText: string
}

const TicketCard: React.FC = () => {
    const swiperRef = useRef<any>(null);
    return (
        <>
            <div className="w-full flex items-center ">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="text-[#2C9CF0] min-w-9 w-9 h-12 border border-[#2C9CF0] flex justify-center items-center me-2 xs:me-4 max-xxs:hidden "
                >
                    <FaLessThan size={20} />
                </button>
                <div className='w-full xxs:max-w-[70%] md:max-w-[85%] xxs:w-auto lg:w-[850px]  mx-auto lg:h-[625px] mt-10 '>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        breakpoints={{
                            950: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            680: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        style={{ padding: "0 1rem" }}
                    >
                        {
                            ticketDetails.ticketDetails.map((ticket: ticketType) => (
                                <SwiperSlide key={ticket.id}>
                                    <div
                                        className=' h-full max-w-[257px] mx-auto bg-white shadow-lg  p-[15px] dark:bg-[#3B3E47] relative my-10'
                                    >
                                        <div className='pb-5 border-b border-dashed border-[#A9ACB2] dark:border-[#818A97]'>
                                            <Image src={ticket.imgSrc} alt="" className='w-full h-[400px] object-cover shadow-lg' />
                                        </div>
                                        <div className='curve -left-2.5 border-r'></div>
                                        <div className='curve -right-2.5  border-l'></div>
                                        <div className='pt-5 px-2 space-y-3 text-center font-poppins'>
                                            <h2 className='  font-poppins font-medium text-[17px] leading-[26px]'>{ticket.title}</h2>
                                            <p className=' text-sm font-[400]'>OCT 15 | SUN | 4:30 PM</p>
                                            <p className=' font-inter font-[400] text-sm text-[#525965] dark:text-[#DFDFDF]'>{ticket.place}</p>
                                            <button className='w-48 max-w-[213px] mx-auto h-9 flex justify-center items-center bg-[#1D1D1F] dark:bg-black text-sm font-inter text-white'>{ticket.buttonText}</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="text-[#2C9CF0] min-w-9 w-9 h-12 border border-[#2C9CF0] flex justify-center items-center ms-2 xs:ms-4 max-xxs:hidden"
                >
                    <FaGreaterThan />
                </button>
            </div>
        </>
    )
}

export default TicketCard