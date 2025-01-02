import React from "react";
import Image from "next/image";
import { BiMap } from "react-icons/bi";
import { TbCurrentLocation } from "react-icons/tb";

const MainSection = () => {
    return (
        <div className="relative w-full flex-1">
            {/* Background Image */}
            <div className="relative w-full" style={{ height: "700px" }}>
                <Image
                    src="/jpg/img-1.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-black text-center mt-12">
                    #1 Super app for all home services
                </h1>


                {/* Search Bar */}
                <div className="w-full max-w-xl mt-6 bg-white shadow-lg p-5 rounded-2xl">
                    <p className="text-black font-sans mb-3 fw-bold">
                        <strong>Where would you like to receive your service?</strong>
                    </p>

                    <div className="flex items-center border border-gray-300 rounded-3xl p-2">
                        <div className="flex items-center px-4  text-gray-600">
                            <BiMap size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for area, street name, landmark..."
                            className="flex-1 text-gray-600 focus:outline-none mr-2"
                        />
                        <div className="flex items-center justify-center px-4 py-1 bg-sky-200 text-sky-500 rounded-3xl mr-1">
                            <span className="mr-2">Set my location</span>
                            <TbCurrentLocation size={20} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MainSection;
