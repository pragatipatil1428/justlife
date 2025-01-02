import React from "react";
import { MdOutlineFlagCircle } from "react-icons/md";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center w-full px-6 py-4 shadow-md bg-white">
            {/* Logo */}
            <div className="text-sky-500 text-5xl font-bold ml-44">justlife</div>

            {/* Language and Account */}
            <div className="flex items-center space-x-4 mr-44">
                <div className="flex items-center justify-center bg-white w-24 h-12 rounded-3xl hover:border hover:border-gray-400 transition-all duration-200">
                    <button className="text-gray-600">العربية</button>
                </div>

                <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full hover:border hover:border-gray-400 transition-all duration-200">
                    <MdOutlineFlagCircle className="text-black" size={20} />
                </div>

                <div className="flex items-center justify-center w-24 h-12 bg-white border border-gray-300 rounded-3xl hover:bg-gray-200">
                    <FaUserCircle className="text-black mr-3" size={20} />
                    <FaBars className="text-black" size={20} />
                </div>
            </div>
        </header>
    );
};

export default Header;
