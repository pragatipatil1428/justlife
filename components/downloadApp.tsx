import React from "react";
import { AiOutlineInsurance } from "react-icons/ai";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DownloadApp = () => {
    return (
        <div className="bg-zinc-100 w-full">
            <div className="mr-56 ml-56 mt-12 mb-14">
                <p className="text-gray-600">
                    Download our Super app!
                </p>
                <h3 className="text-3xl md:text-3xl font-bold text-black mt-4">
                    Manage all to-dos with a single tap!
                </h3>
                <p className="text-black mt-4">
                    Book and manage your appointments, view your professional’s profile and ratings, get the latest offers, and much more.
                </p>

                <div className="flex mt-8">
                    <div className="bg-black w-48 h-16 text-white mr-9 rounded-md p-3 flex items-center justify-start">
                        <FaApple className="text-white text-3xl mr-3" />
                        <div>
                            <p className="text-sm">Download on</p>
                            <p className="text-sm">App Store</p>
                        </div>
                    </div>

                    <div className="bg-black w-48 h-16 text-white mr-9 rounded-md p-3 flex items-center justify-start">
                        <FaGooglePlay className="text-white text-3xl mr-3" />
                        <div>
                            <p className="text-sm">Download on</p>
                            <p className="text-sm">Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp;
