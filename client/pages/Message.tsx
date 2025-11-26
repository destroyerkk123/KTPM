import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function QuizDetail() {
  const location = useLocation();
  const tabs = [
    { id: "dashboard", label: "Dashboard", path: "/" },
    { id: "quizz", label: "Quizz", path: "/dashboard" }, // Assuming this is the quiz list path; adjust if needed
    { id: "teachers", label: "Teachers", path: "/teachers" },
    { id: "message", label: "Message", path: "/message" },
    { id: "settings", label: "Settings", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <div className="relative flex-1">
        <div className="absolute inset-x-0 top-0 h-[280px] bg-bk-color" />

        <div className="relative max-w-[1320px] mx-auto px-4 md:px-8 pt-10">
          <div className="bg-white border border-secondary-600 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between p-6 md:p-10 gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0ee3c66b6366a6afbe928634f8eb3f2d9b8f4f0d?width=220"
                  alt="Student Profile"
                  className="w-[110px] h-[110px] rounded-full object-cover"
                />
                <div className="flex flex-col gap-3 text-center sm:text-left">
                  <h1 className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight break-words">
                    Lê Nguyễn Nam Khánh
                  </h1>
                  <p className="text-sm md:text-base text-gray-600 break-words">
                    Khoa học máy tính - Tăng cường tiếng Nhật
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-3 px-6 md:px-8 py-2 md:py-3 bg-secondary-200 hover:bg-secondary-200/80 transition-colors whitespace-nowrap">
                <span className="text-lg font-semibold text-secondary-600">
                  Become Instructor
                </span>
                <ArrowLeft className="w-6 h-6 text-secondary-600 rotate-180" /> {/* Adjusted to match potential icon */}
              </button>
            </div>

            <div className="border-t border-secondary-300">
              <div className="flex items-center justify-center gap-6">
                {tabs.map((tab) => (
                  <Link
                    key={tab.id}
                    to={tab.path}
                    className={`py-5 px-0 text-base font-medium ${
                      tab.id === "message" // Assuming this is the active tab for Quiz page
                        ? "text-gray-900 border-b-[3px] border-bk-color"
                        : "text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 md:px-8 py-10 md:py-20 flex flex-col gap-10">
        <div className="bg-white p-6 md:p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-gray-900">Calculus 1 - Quiz 1</h2>
              <p className="text-sm text-gray-600">Teacher: Wade Warren</p>
              {/* Video Player */}
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/800x450?text=Video+Thumbnail" // Replace with actual thumbnail URL from screenshot
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">1:45 / 5:00</p> {/* Example video progress */}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Protecting the Organization from Cyber Attacks</h3>
              <p className="text-sm text-gray-600">
                One of the most efficient ways to protect against cyber attacks and all types of data
                breaches is to train your employees on cyber attack prevention and
              </p>
              <p className="text-sm text-gray-600">
                The quiz consists of questions. To be successful with the quizzes, it's important to conversant
                with the topic by paying attention to the short video.
              </p>
              <p className="text-sm text-gray-600">
                To start, click the "Start" button. When finished, click the "Submit" button.
              </p>
            </div>
            <div className="w-full lg:w-[400px] flex flex-col gap-6 bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-600">Date:</p>
                <p className="text-base font-medium text-gray-900">28/07/2021</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-600">Time Limit:</p>
                <p className="text-base font-medium text-gray-900">15 Mins</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-600">Attempts:</p>
                <p className="text-base font-medium text-gray-900">2</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-600">Pass Points:</p>
                <p className="text-base font-medium text-gray-900">60 Points</p>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="flex-1 px-6 py-3 bg-[#1935CA] text-white font-semibold hover:bg-bk-color/90 transition-colors">
                  Start Quiz
                </button>
                <button className="flex-1 px-6 py-3 bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors">
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}