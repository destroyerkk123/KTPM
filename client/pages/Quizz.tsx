import { useState } from "react";
import { ArrowRight,ChevronRight, ChevronLeft, BookOpen, Users, CheckCircle, PlayCircle, CheckSquare, Trophy } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
const stats = [
    {
      icon: PlayCircle,
      value: "957",
      label: "Active Quizz",
      bgColor: "bg-primary-100",
      iconColor: "text-primary-500",
    },
    {
      icon: CheckSquare,
      value: "6",
      label: "Active Teachers",
      bgColor: "bg-secondary-100",
      iconColor: "text-[#564FFD]",
    },
    {
      icon: Trophy,
      value: "951",
      label: "Completed Quizz",
      bgColor: "bg-success-100",
      iconColor: "text-success-500",
    },
  ];
const courseData = [
  {
    id: 1,
    title: "Reiki Level I, II and Master/Teacher Program",
    description: "1. Introductions",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/048f726119b554c2e6526e1cb1590439a920678c?width=624"
  },
  {
    id: 2,
    title: "Copywriting - Become a Freelance Copywriter...",
    description: "1. How to get started with figma",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/8bdbd8ae41e42aa4c4bf46c7ec3d6d8f957de900?width=624"
  },
  {
    id: 3,
    title: "Angular - The Complete Guide (2021 Edition)",
    description: "54. CSS Static and Relative Positioning",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop"
  },
  {
    id: 4,
    title: "SEO 2021: Complete SEO Training + SEO for W...",
    description: "1. Introductions",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop"
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = [{ id: "dashboard", label: "Dashboard", path: "/" },
    { id: "quizz", label: "Quizz", path: "/dashboard" },
    { id: "teachers", label: "Teachers", path: "/teachers" },
    { id: "message", label: "Message", path: "/message" },
    { id: "settings", label: "Settings", path: "/settings" }
  ];

  const statCards = [
    { id: 1, value: "957", label: "Active Quizz", bg: "bg-stat-pink", icon: BookOpen, iconColor: "text-stat-icon-pink" },
    { id: 2, value: "6", label: "Active Teachers", bg: "bg-stat-blue", icon: Users, iconColor: "text-stat-icon-blue" },
    { id: 3, value: "951", label: "Completed Quizz", bg: "bg-stat-green", icon: CheckCircle, iconColor: "text-stat-icon-green" }
  ];

  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* User Profile Section */}
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
                <ArrowRight className="w-6 h-6 text-secondary-600" />
              </button>
            </div>

            <div className="border-t border-secondary-300">
              <div className="flex items-center justify-center gap-6">
                {tabs.map((tab) => (
                  <Link
                    key={tab.id}
                    to={tab.path}
                    className={`py-5 px-0 text-base font-medium ${
                      location.pathname === tab.path
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

      {/* Main Content */}
      {activeTab === "dashboard" && (
        <div className="max-w-7xl mx-auto  px-6 py-12">
          {/* Stats */}
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 py-6  flex flex-col items-center gap-10">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
          Dashboard
        </h2>

        <div className="flex flex-wrap items-start gap-6 justify-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 p-6 ${stat.bgColor}`}
            >
              <div className="p-3.5 bg-white">
                <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="text-2xl text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-700">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

          {/* Newest Quizz */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Newest Quizz</h3>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:opacity-90">
                  <ChevronLeft size={16} />
                </button>
                <button className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:opacity-90">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseData.map(course => (
                <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                  <div className="w-full h-40 bg-gray-300 overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">{course.title}</h4>
                    <p className="text-xs text-gray-600 mb-4">{course.description}</p>
                    <button className="w-full bg-primary hover:opacity-90 text-white font-medium py-2 rounded-lg transition text-sm">
                      Begin Quizz
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Quizz - repeated sections */}
          {[1, 2, 3].map(section => (
            <section key={`recent-${section}`} className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Recent Quizz</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courseData.map(course => (
                  <div key={`${section}-${course.id}`} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                    <div className="w-full h-40 bg-gray-300 overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">{course.title}</h4>
                      <p className="text-xs text-gray-600 mb-4">{course.description}</p>
                      <button className="w-full bg-primary hover:opacity-90 text-white font-medium py-2 rounded-lg transition text-sm">
                        Begin Quizz
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 my-12">
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
            {pages.map(page => (
              <button
                key={page}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-medium transition ${
                  page === currentPage
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {String(page).padStart(2, "0")}
              </button>
            ))}
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <ChevronRight size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
      )}

      {/* Placeholder for other tabs */}
      {activeTab !== "dashboard" && (
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <p className="text-gray-600 text-lg">This section is under development.</p>
        </div>
      )}
      <Footer />
    </div>
  );
}
