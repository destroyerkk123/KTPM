import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-bk-color pt-20 pb-0">
      <div className="max-w-[1640px] mx-auto px-8 pb-20">
        <div className="flex justify-between items-start gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gray-700/40 flex items-center justify-center">
                <Facebook className="w-[18px] h-[18px] text-white" />
              </div>
              <div className="w-12 h-12 bg-gray-700/40 flex items-center justify-center">
                <Instagram className="w-[18px] h-[18px] text-white" />
              </div>
              <div className="w-12 h-12 bg-secondary-300 shadow-lg flex items-center justify-center">
                <Linkedin className="w-[18px] h-[18px] text-white" />
              </div>
              <div className="w-12 h-12 bg-gray-700/40 flex items-center justify-center">
                <Twitter className="w-[18px] h-[18px] text-white" />
              </div>
              <div className="w-12 h-12 bg-gray-700/40 flex items-center justify-center">
                <Youtube className="w-[18px] h-[18px] text-white" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-medium text-white uppercase">Top 4 Category</h3>
            <div className="flex flex-col">
              <a href="#" className="py-1.5 text-sm text-gray-900 hover:text-gray-700">Physics</a>
              <a href="#" className="py-1.5 text-sm text-gray-900 hover:text-gray-700">Data Structure & Algorithm</a>
              <a href="#" className="py-1.5 text-sm text-gray-900 hover:text-gray-700">Operating System</a>
              <a href="#" className="py-1.5 text-sm text-gray-900 hover:text-gray-700">Calculus 2</a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-medium text-white uppercase">Quick Links</h3>
            <div className="flex flex-col">
              <a href="#" className="py-1.5 text-sm text-gray-900 hover:text-gray-700">About</a>
              <a href="#" className="py-1.5 text-sm text-gray-900 hover:text-gray-700 flex items-center gap-2 border-b border-gray-300">
                Become Instructor
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="py-1.5 text-sm text-gray-900 hover:text-gray-700">Contact</a>
              <a href="#" className="py-1.5 text-sm text-gray-900 hover:text-gray-700">Career</a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-medium text-white uppercase">Support</h3>
            <div className="flex flex-col">
              <a href="#" className="py-1.5 text-sm text-gray-900 hover:text-gray-700">Help Center</a>
              <a href="#" className="py-1.5 text-sm text-gray-900 hover:text-gray-700">FAQs</a>
              <a href="#" className="py-1.5 text-sm text-gray-900 hover:text-gray-700">Terms & Condition</a>
              <a href="#" className="py-1.5 text-sm text-gray-900 hover:text-gray-700">Privacy Policy</a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-medium text-white uppercase">Download our app</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 px-5 py-3 bg-gray-700/40">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M21.9986 0C20.2926 0.117999 18.2986 1.20999 17.1366 2.63198C16.0766 3.92198 15.2046 5.83797 15.5446 7.69995C17.4086 7.75795 19.3346 6.63996 20.4506 5.19397C21.4946 3.84798 22.2846 1.94399 21.9986 0Z" fill="white"/>
                  <path d="M28.7406 10.736C27.1026 8.68198 24.8006 7.48999 22.6266 7.48999C19.7566 7.48999 18.5427 8.86398 16.5487 8.86398C14.4927 8.86398 12.9307 7.49399 10.4487 7.49399C8.01071 7.49399 5.41473 8.98398 3.76874 11.532C1.45475 15.1199 1.85075 21.8659 5.60073 27.6119C6.94272 29.6679 8.73471 31.9799 11.0787 31.9999C13.1647 32.0199 13.7527 30.6619 16.5787 30.6479C19.4046 30.6319 19.9406 32.0179 22.0226 31.9959C24.3686 31.9779 26.2586 29.4159 27.6006 27.3599C28.5626 25.8859 28.9206 25.1439 29.6666 23.4799C24.2406 21.4139 23.3706 13.698 28.7406 10.736Z" fill="white"/>
                </svg>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] text-gray-300">Download now</span>
                  <span className="text-base font-medium text-white">App Store</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-gray-700/40">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M19.8024 9.76833L3.01889 0.123178C2.808 4.82537e-05 2.54267 0.00688879 2.33857 0.130018C2.12767 0.253148 1.99841 0.472045 1.99841 0.718304C1.99841 0.718304 2.00522 1.60757 2.01202 3.07145L14.2374 15.3639L19.8024 9.76833Z" fill="#63BE6B"/>
                  <path d="M2.01196 3.07153C2.03237 8.35243 2.0936 21.1716 2.12081 27.5538L14.2441 15.364L2.01196 3.07153Z" fill="#3EC6F2"/>
                  <path d="M29.4086 15.2886L19.8024 9.76831L14.2306 15.3639L20.5168 21.6845L29.4154 16.472C29.6263 16.3489 29.7555 16.1232 29.7555 15.8838C29.7555 15.6375 29.6195 15.4118 29.4086 15.2886Z" fill="#FAA51A"/>
                  <path d="M2.11414 27.5537C2.12774 29.8316 2.13455 31.2886 2.13455 31.2886C2.13455 31.5349 2.26381 31.7606 2.47471 31.8769C2.6856 32.0001 2.94413 32.0001 3.15503 31.8769L20.5236 21.6914L14.2374 15.3707L2.11414 27.5537Z" fill="#EC3B50"/>
                </svg>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] text-gray-300">Download now</span>
                  <span className="text-base font-medium text-white">Play Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
