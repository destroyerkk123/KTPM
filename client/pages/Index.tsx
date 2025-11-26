import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, PlayCircle, CheckSquare, Trophy } from "lucide-react";

export default function Index() {
  const stats = [
    {
      icon: PlayCircle,
      value: "957",
      label: "Active Quizz",
      bgColor: "bg-primary-100",
      iconColor: "text-primary-500"
    },
    {
      icon: CheckSquare,
      value: "6",
      label: "Active Teachers",
      bgColor: "bg-secondary-100",
      iconColor: "text-[#564FFD]"
    },
    {
      icon: Trophy,
      value: "951",
      label: "Completed Quizz",
      bgColor: "bg-success-100",
      iconColor: "text-success-500"
    }
  ];

  const courses = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/048f726119b554c2e6526e1cb1590439a920678c?width=624",
      subtitle: "Reiki Level I, II and Master/Teacher Program",
      title: "1. Intorductions",
      progress: 100,
      progressColor: "bg-success-500",
      buttonColor: "bg-bk-color",
      buttonText: "Watch Lecture",
      completed: null
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8bdbd8ae41e42aa4c4bf46c7ec3d6d8f957de900?width=624",
      subtitle: "The Complete 2021 Web Development Bootcamp",
      title: "167. What You'll Need to Get Started - Se...",
      progress: 61,
      progressColor: "bg-primary-500",
      buttonColor: "bg-bk-color",
      buttonText: "Watch Lecture",
      completed: "61% Completed"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ac1a25bb5a96396138d8e315f11ecf0e9905f68b?width=624",
      subtitle: "Copywriting - Become a Freelance Copywriter...",
      title: "1. How to get started with figma",
      progress: 100,
      progressColor: "bg-success-500",
      buttonColor: "bg-bk-color",
      buttonText: "Watch Lecture",
      completed: null
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1f1760ef12d065c8137a2e1e2b09fc52fdd74780?width=624",
      subtitle: "2021 Complete Python Bootcamp From Zero to...",
      title: "9. Advanced CSS - Selector Priority",
      progress: 12,
      progressColor: "bg-primary-500",
      buttonColor: "bg-secondary-300",
      buttonText: "Watch Lecture",
      completed: "12% Finish",
      isActive: true
    }
  ];

  const tabs = ["Dashboard", "Quizz", "Teachers", "Message", "Settings"];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-[280px] bg-bk-color -mt-20" />
        
        <div className="relative max-w-[1320px] mx-auto px-8 pt-20">
          <div className="bg-white border border-secondary-600 shadow-sm">
            <div className="flex items-center justify-between p-10">
              <div className="flex items-center gap-6">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0ee3c66b6366a6afbe928634f8eb3f2d9b8f4f0d?width=220" 
                  alt="Student Profile" 
                  className="w-[110px] h-[110px] rounded-full object-cover"
                />
                <div className="flex flex-col gap-3">
                  <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                    Lê Nguyễn Nam Khánh
                  </h1>
                  <p className="text-base text-gray-600">
                    Khoa học máy tính - Tăng cường tiếng Nhật
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-3 px-8 py-3 bg-secondary-200 hover:bg-secondary-200/80 transition-colors">
                <span className="text-lg font-semibold text-secondary-600">
                  Become Instructor
                </span>
                <ArrowRight className="w-6 h-6 text-secondary-600" />
              </button>
            </div>

            <div className="border-t border-secondary-300">
              <div className="flex items-center justify-center gap-6">
                {tabs.map((tab, index) => (
                  <button
                    key={tab}
                    className={`py-5 px-0 text-base font-medium ${
                      index === 0
                        ? "text-gray-900 border-b-[3px] border-bk-color"
                        : "text-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-8 py-20 flex flex-col items-center gap-10">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
          Dashboard
        </h2>

        <div className="flex items-start gap-6 justify-center">
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

      <div className="max-w-[1320px] mx-auto px-8 pb-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Let's start learning, Khánh
            </h2>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-bk-color hover:bg-bk-color/90 transition-colors">
                <ArrowRight className="w-6 h-6 text-secondary-100 rotate-180" />
              </button>
              <button className="p-2 bg-bk-color hover:bg-bk-color/90 transition-colors">
                <ArrowRight className="w-6 h-6 text-secondary-100" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div 
                key={index}
                className={`flex flex-col gap-4 bg-white border ${
                  course.isActive ? "border-transparent shadow-xl" : "border-gray-100"
                }`}
              >
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[220px] object-cover border-b border-gray-100"
                />
                <div className="px-4 flex flex-col gap-1.5">
                  <p className="text-xs text-gray-600 line-clamp-1">
                    {course.subtitle}
                  </p>
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                    {course.title}
                  </h3>
                </div>
                
                <div className="w-full h-px bg-gray-100" />
                
                <div className="px-4 pb-4">
                  {course.completed ? (
                    <div className="flex items-center justify-between mb-4">
                      <button className={`px-4 py-2 ${course.buttonColor} text-white text-sm font-semibold hover:opacity-90 transition-opacity`}>
                        {course.buttonText}
                      </button>
                      <span className="text-sm font-medium text-success-500">
                        {course.completed}
                      </span>
                    </div>
                  ) : (
                    <button className={`w-full px-4 py-2 ${course.buttonColor} text-white text-sm font-semibold mb-4 hover:opacity-90 transition-opacity`}>
                      {course.buttonText}
                    </button>
                  )}
                  
                  <div className="h-0.5 w-full bg-gray-100 relative">
                    <div 
                      className={`h-0.5 ${course.progressColor} absolute left-0 top-0`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
