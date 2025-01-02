import React from "react";
import { FaStar, FaCalendarAlt, FaChartBar, FaAppStore } from "react-icons/fa";

const Reasons = () => {
    return (
        <div className="bg-zinc-100 w-full">
            <div className="mr-56 ml-56 mt-12 mb-14">
                <h3 className="text-3xl md:text-3xl font-bold text-black text-center">
                    There are so many reasons to love Justlife!
                </h3>
                <p className="text-black text-center mt-4">
                    Here are the top 4!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                    {/* Card 1 */}
                    <div className="border-2 border-gray-300 p-4 rounded-lg text-center h-90">
                        <div className="p-4 rounded-full inline-block mb-4">
                            <FaStar className="text-yellow-400" size={60} />
                        </div>
                        <h3 className="text-2xl md:text-2xl font-bold text-black">
                            Top rated professionals
                        </h3>
                        <p className="mt-3 text-black">
                            Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="border-2 border-gray-300 p-4 rounded-lg text-center h-90">
                        <div className="p-4 rounded-full inline-block mb-4">
                            <FaCalendarAlt className="text-black text-3xl" size={60} />
                        </div>
                        <h3 className="text-2xl md:text-2xl font-bold text-black">
                            Same-day availability
                        </h3>
                        <p className="mt-3 text-black">
                            Book in less than 60 seconds, and even select same-day slots.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="border-2 border-gray-300 p-4 rounded-lg text-center h-90">
                        <div className="p-4 rounded-full inline-block mb-4">
                            <FaChartBar className="text-black text-3xl" size={60} />
                        </div>
                        <h3 className="text-2xl md:text-2xl font-bold text-black">
                            Top quality, value for money services
                        </h3>
                        <p className="mt-1 text-black">
                            Our professionals are equipped with the best tools and our services are always priced with you in mind.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="border-2 border-gray-300 p-4 rounded-lg text-center h-90">
                        <div className="p-4 rounded-full inline-block mb-4">
                            <FaAppStore className="text-black text-3xl" size={60} />
                        </div>
                        <h3 className="text-2xl md:text-2xl font-bold text-black">
                            Super app
                        </h3>
                        <p className="mt-3 text-black">
                            Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reasons;
