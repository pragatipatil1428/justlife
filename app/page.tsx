import CustomerReviews from "@/components/customerReview";
import DownloadApp from "@/components/downloadApp";
import Header from "@/components/header";
import MainSection from "@/components/mainSection";
import Promise from "@/components/promise";
import Reasons from "@/components/reasons";
import ToDoList from "@/components/todoList";
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
      <Header />

      {/* Main Section */}
      <MainSection />

      <ToDoList />

      <Reasons />

      <CustomerReviews />

      <Promise />

      <DownloadApp />


    </div>
  );
}
