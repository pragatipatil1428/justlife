import CustomerReviews from "@/components/customerReview";
import DownloadApp from "@/components/downloadApp";
import FooterSection from "@/components/footerSection";
import Header from "@/components/header";
import MainSection from "@/components/mainSection";
import Promise from "@/components/promise";
import Reasons from "@/components/reasons";
import ToDoList from "@/components/todoList";

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

      <FooterSection />

    </div>
  );
}
