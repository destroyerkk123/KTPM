import { Search, Bell, Heart, ShoppingCart } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/5895e010e8f41828710579bc2c0a67fc2cff6dbc?width=90" 
              alt="BK Logo" 
              className="w-[45px] h-[45px]"
            />
            <span className="text-[32px] font-semibold text-gray-900 tracking-tight">
              ITS System
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-5 py-3 border border-gray-100 bg-white min-w-[200px]">
              <span className="text-base text-gray-700">Browse</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-auto">
                <path d="M13 6L8 11L3 6" stroke="#4E5566" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 border border-gray-100 bg-white w-[424px]">
              <Search className="w-6 h-6 text-gray-900" />
              <input 
                type="text" 
                placeholder="What do you want learn..."
                className="text-base text-gray-500 bg-transparent border-none outline-none flex-1"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-900" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary-600 rounded-full border-2 border-white" />
          </div>
          <Heart className="w-6 h-6 text-gray-900" />
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-900" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#564FFD] rounded-full flex items-center justify-center">
              <span className="text-[10px] font-medium text-white">2</span>
            </div>
          </div>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/81200ec936ae03c2ebefeda74ca3d3ff24296004?width=96" 
            alt="User Avatar" 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}
