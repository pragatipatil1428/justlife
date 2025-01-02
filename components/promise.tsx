import React from "react";
import { AiOutlineInsurance } from "react-icons/ai";

const Promise = () => {
    return (
        <div className="bg-sky-500 w-full">
            <div className="mr-80 ml-80 p-8 flex items-center rounded-lg">
                <div className="bg-white p-6 rounded-full inline-block">
                    <AiOutlineInsurance className="text-sky-500 text-5xl" /> {/* Increased icon size */}
                </div>
                <div className="ml-6"> {/* Added margin to separate text from icon */}
                    <h3 className="text-3xl md:text-3xl font-bold text-white">
                        The Justlife Promise – Excellence in Every Home
                    </h3>
                    <p className="text-white text-xl md:text-xl">
                        At Justlife, we commit to the highest standards of home care. Our trained professionals deliver a superior service experience, ensuring your home is in expert hands. Your peace of mind is our promise.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Promise;
