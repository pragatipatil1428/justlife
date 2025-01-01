import Image from "next/image";
import { AiOutlineInsurance } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { FaAppStore, FaApple, FaBars, FaBiohazard, FaBug, FaCalendarAlt, FaChartBar, FaCouch, FaCut, FaFlask, FaGooglePlay, FaMale, FaSnowflake, FaSpa, FaStar, FaUserCircle, FaVial } from "react-icons/fa";
import { FaBroom } from "react-icons/fa6";
import { MdOutlineFlagCircle } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-300">
      {/* Header */}
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

      {/* Main Section */}
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

    </div>
  );
}
