import React from "react";
import { FaApple, FaFacebook, FaGooglePlay, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterSection = () => {
    const services = [
        "Maid Service",
        "Carpet Cleaning",
        "Mattress Cleaning",
        "Sofa Cleaning",
        "Curtain Cleaning",
        "Deep Cleaning",
        "Move In & Out Cleaning Services",
        "House Cleaning",
    ];

    const services2 = ["Laundry & Dry Cleaning",
        "AC Cleaning Service",
        "Disinfection Service",
        "Covid-19 PCR Test at Home",
        "Women's Salon",
        "Women's Spa",
        "Furniture Cleaning",
        "Men's Salon"];

    const services3 = [
        "Lab Tests at Home",
        "Pest Control Service",
        "Men's Spa",
        "Men's Grooming",
        "Hair Salon",
        "Pet Grooming",
        "IV Therapy",
        "Babysitting At Home",
        "Car Wash At Home",
    ];

    const services4 = [
        "Plumber Services",
        "Handyman Services",
        "Electrician Services",
        "Home Painting",
        "Personal Trainer",
        "Nail Couture",
        "Packers and Movers",
        "Physiotherapy at Home",
    ];

    const services5 = [
        "Body Adjustment",
        "Personal Nutritionist",
        "Part Time Maid Services",
        "Psychotherapy & Counselling",
        "Nurse Care at Home",
        "Mobile Ice Bath",
        "Lashes and Brows at Home",
    ];

    const services6 = [
        "Vaccines at Home",
        "Spray Tanning",
        "Commercial Cleaning",
        "Office Cleaning",
        "Villa Cleaning",
        "Henna Service",
        "Housekeeping Services",
        "Floor Cleaning",
        "Waxing Service",
    ];

    const services7 = [
        "Doctor on Call",
        "Facial Treatment Service",
        "Eyebrow Threading",
        "Flu Vaccine",
        "Apartment Cleaning",
        "Oxygen Therapy",
        "Cat Grooming",
    ];

    const locations = [
        "Dubai",
        "Abu Dhabi",
        "Sharjah",
        "Ajman",
        "Jeddah",
        "Riyadh",
        "Doha",
    ];

    return (
        <div className="bg-gray-900 w-full">
            <div className="mr-44 ml-44 mt-12 mb-14">
                <p className="text-white text-xl md:text-xl font-bold">
                    Services
                </p>

                <div className="flex items-center space-x-4 mt-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-2 text-white bg-black rounded-3xl"
                        >
                            <span className="text-xs font-bold">{service}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center space-x-4 mt-3">
                    {services2.map((service, index) => (
                        <div
                            key={index}
                            className="p-2 text-white bg-black rounded-3xl"
                        >
                            <span className="text-xs font-bold">{service}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center space-x-4 mt-3">
                    {services3.map((service, index) => (
                        <div
                            key={index}
                            className="p-2 text-white bg-black rounded-3xl"
                        >
                            <span className="text-xs font-bold">{service}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center space-x-4 mt-3">
                    {services4.map((service, index) => (
                        <div
                            key={index}
                            className="p-2 text-white bg-black rounded-3xl"
                        >
                            <span className="text-xs font-bold">{service}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center space-x-4 mt-3">
                    {services5.map((service, index) => (
                        <div
                            key={index}
                            className="p-2 text-white bg-black rounded-3xl"
                        >
                            <span className="text-xs font-bold">{service}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center space-x-4 mt-3">
                    {services6.map((service, index) => (
                        <div
                            key={index}
                            className="p-2 text-white bg-black rounded-3xl"
                        >
                            <span className="text-xs font-bold">{service}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center space-x-4 mt-3">
                    {services7.map((service, index) => (
                        <div
                            key={index}
                            className="p-2 text-white bg-black rounded-3xl"
                        >
                            <span className="text-xs font-bold">{service}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center">
                    <p className="text-white text-lg md:text-lg font-bold mt-5 mr-32">
                        United Arab Emirates
                    </p>
                    <p className="text-white text-lg md:text-lg font-bold mt-5 mr-5">
                        Saudi Arabia
                    </p>
                    <p className="text-white text-lg md:text-lg font-bold mt-5">
                        Qatar
                    </p>
                </div>


                <div className="flex items-center space-x-4 mt-3">
                    {locations.map((location, index) => (
                        <div
                            key={index}
                            className="p-2 text-white bg-black rounded-3xl"
                        >
                            <span className="text-xs font-bold">{location}</span>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-600 p-4 flex mt-8">
                    <div className="flex items-center">
                        <div className="bg-black w-48 h-16 text-white mr-9 rounded-md p-3 flex items-center justify-start">
                            <FaApple className="text-white text-3xl mr-3" />
                            <div>
                                <p className="text-xs">Download on</p>
                                <p className="text-sm">App Store</p>
                            </div>
                        </div>

                        <div className="bg-black w-48 h-16 text-white mr-9 rounded-md p-3 flex items-center justify-start">
                            <FaGooglePlay className="text-white text-3xl mr-3" />
                            <div>
                                <p className="text-xs">Download on</p>
                                <p className="text-sm">Google Play</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <FaFacebook size={30} className="ml-32 mr-10" />
                        <FaTwitter size={30} className="mr-10" />
                        <FaInstagram size={30} className="" />
                    </div>

                    <div className="flex items-center space-x-4 ml-20">
                        <p className="text-md">F.A.Q.</p>
                        <p className="text-md">Terms</p>
                        <p className="text-md">Privacy</p>
                        <p className="text-md">SiteMap</p>
                        <p className="text-md">Career</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection;
