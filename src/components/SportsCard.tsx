import React from "react";
import sportCardDetails from "../data/sportDetails.json"
import Image from "next/image";

interface cardType {
    id: number,
    imgSrc: string,
    title: string,
    events: string,
    sport: string
}

const SportsCard:React.FC = () => {
    return (
        <div className=" w-full h-full grid  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 max-xl:gap-y-6">
            {sportCardDetails.cardDetails.map((card: cardType) => (
                <div
                    key={card.id}
                    className="max-w-[237px] mx-auto h-[511px] shadow-3xl bg-white dark:bg-[#3B3E47] p-2.5 font-inter"
                >
                        <Image src={card.imgSrc} alt="card" className="w-full h-[385px]" />
                        <p className=" text-[17px] font-medium py-3">{card.title}</p>
                        <div className=" h-[54px] bg-[#F7F7F8] dark:bg-[#292B32] rounded-[2px] p-3 flex items-center gap-10">
                            <div>
                                <p className="text-xs font-[400] text-[#525965] dark:text-[#DFDFDF]">Total Events</p>
                                <p className=" text-sm font-medium">{card.events}</p>
                            </div>
                            <div>
                                <p className="text-xs font-[400] text-[#525965]  dark:text-[#DFDFDF]">Sport</p>
                                <p className=" text-sm font-medium">{card.sport}</p>
                            </div>
                        </div>
                </div>
            ))}
            <div className="max-w-[237px] mx-auto h-[511px] shadow-3xl bg-[#FFFFFF] dark:bg-[#3B3E47] p-2.5 font-inter order-4">
                <Image src="assets/add_img.png" alt="ad" className=" w-full h-[218px] mb-3" />
                <p className=" text-[17px] font-medium py-2">Advertisement title</p>
                <p className=" text-xs font-[400] leading-5 text-[#525965] dark:text-[#DFDFDF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    );
};

export default SportsCard;
