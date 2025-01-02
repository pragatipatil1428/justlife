import React from "react";
import { FaStar } from "react-icons/fa";

const CustomerReviews = () => {
    return (
        <div className="bg-zinc-200 w-full">
            <div className="mr-56 ml-56 mt-12 mb-14">
                <h3 className="text-3xl md:text-3xl font-bold text-black text-center mt-14">
                    What customers say about Justlife
                </h3>
                <p className="text-black text-center mt-4">
                    Justlife has been rated 4.8 out of 5 based on 1626 reviews as of March 2024.
                </p>

                <div className="bg-white p-10 rounded-lg mt-14 mr-36 ml-36 relative">
                    {/* Top Center Stars */}
                    <div className="bg-white p-3 rounded-3xl absolute top-[-25px] left-1/2 transform -translate-x-1/2 flex ">
                        <FaStar className="text-yellow-400 text-2xl" />
                        <FaStar className="text-yellow-400 text-2xl" />
                        <FaStar className="text-yellow-400 text-2xl" />
                        <FaStar className="text-yellow-400 text-2xl" />
                        <FaStar className="text-yellow-400 text-2xl" />
                    </div>

                    {/* Main Content */}
                    <p className="text-gray-500 text-3xl md:text-3xl text-center">
                        It's my first time booking with Justlife, and it exceeded my expectations. The professional cleaned our house thoroughly; she was very friendly and made sure that everything was clean before she left. It was a great experience indeed, and I will surely book another service with Justlife. ❤️
                    </p>

                    {/* Customer Name */}
                    <p className="text-sky-500 text-3xl md:text-3xl text-center mt-10">
                        Nadia
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews;
