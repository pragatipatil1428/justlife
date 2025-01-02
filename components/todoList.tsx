import React from "react";
import { FaBiohazard, FaBroom, FaBug, FaCouch, FaCut, FaFlask, FaMale, FaSnowflake, FaSpa, FaVial } from "react-icons/fa";

const ToDoList = () => {
    return (
        <div className="bg-white w-full">
            <div className="mr-56 ml-56 mt-12 mb-14">
                <h3 className="text-3xl md:text-3xl font-bold text-black text-center">
                    Leave your to-do list to us!
                </h3>
                <p className="text-black text-center mt-4">
                    Check out some of our top home services:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-8">
                    {/* Row 1 */}
                    <div>
                        <div className="border-2 border-gray-300 p-4 rounded-lg text-center hover:bg hover:bg-gray-100">
                            <div className="bg-sky-400 p-4 rounded-full inline-block">
                                <FaBroom className="text-white text-3xl" />
                            </div>
                        </div>
                        <p className="mt-2 text-black text-center">Home Cleaning</p>
                    </div>

                    <div>
                        <div className="border-2 border-gray-300 p-4 rounded-lg text-center hover:bg hover:bg-gray-100">
                            <div className="bg-sky-400 p-4 rounded-full inline-block">
                                <FaVial className="text-white text-3xl" />
                            </div>
                        </div>
                        <p className="mt-2 text-black text-center">PCR at Home</p>

                    </div>

                    <div>
                        <div className="border-2 border-gray-300 p-4 rounded-lg text-center hover:bg hover:bg-gray-100">
                            <div className="bg-sky-400 p-4 rounded-full inline-block">
                                <FaCut className="text-white text-3xl" />
                            </div>
                        </div>
                        <p className="mt-2 text-black text-center">Women’s Salon</p>
                    </div>

                    <div>
                        <div className="border-2 border-gray-300 p-4 rounded-lg text-center hover:bg hover:bg-gray-100">
                            <div className="bg-sky-400 p-4 rounded-full inline-block">
                                <FaSpa className="text-white text-3xl" />
                            </div>
                        </div>
                        <p className="mt-2 text-black text-center">Women’s Spa</p>
                    </div>

                    <div>
                        <div className="border-2 border-gray-300 p-4 rounded-lg text-center hover:bg hover:bg-gray-100">
                            <div className="bg-sky-400 p-4 rounded-full inline-block">
                                <FaCouch className="text-white text-3xl" />
                            </div>
                        </div>
                        <p className="mt-2 text-black text-center">Furniture Cleaning</p>
                    </div>

                    {/* Row 2 */}
                    <div>
                        <div className="border-2 border-gray-300 p-4 rounded-lg text-center hover:bg hover:bg-gray-100">
                            <div className="bg-sky-400 p-4 rounded-full inline-block">
                                <FaSnowflake className="text-white text-3xl" />
                            </div>
                        </div>
                        <p className="mt-2 text-black text-center">A/C Cleaning</p>
                    </div>

                    <div>
                        <div className="border-2 border-gray-300 p-4 rounded-lg text-center hover:bg hover:bg-gray-100">
                            <div className="bg-sky-400 p-4 rounded-full inline-block">
                                <FaMale className="text-white text-3xl" />
                            </div>
                        </div>
                        <p className="mt-2 text-black text-center">Premium Men’s Grooming</p>
                    </div>

                    <div>
                        <div className="border-2 border-gray-300 p-4 rounded-lg text-center hover:bg hover:bg-gray-100">
                            <div className="bg-sky-400 p-4 rounded-full inline-block">
                                <FaFlask className="text-white text-3xl" />
                            </div>
                        </div>
                        <p className="mt-2 text-black text-center">Lab at Home</p>
                    </div>

                    <div>
                        <div className="border-2 border-gray-300 p-4 rounded-lg text-center hover:bg hover:bg-gray-100">
                            <div className="bg-sky-400 p-4 rounded-full inline-block">
                                <FaBug className="text-white text-3xl" />
                            </div>
                        </div>
                        <p className="mt-2 text-black text-center">Pest Control</p>
                    </div>

                    <div>
                        <div className="border-2 border-gray-300 p-4 rounded-lg text-center hover:bg hover:bg-gray-100">
                            <div className="bg-sky-400 p-4 rounded-full inline-block">
                                <FaBiohazard className="text-white text-3xl" />
                            </div>
                        </div>
                        <p className="mt-2 text-black text-center">Disinfection</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList;
