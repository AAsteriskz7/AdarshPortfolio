import React from 'react';
import { Grip, FlaskConical } from 'lucide-react';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
});

export default function GoogleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-screen bg-white text-[#202124] flex flex-col ${manrope.className}`}>
      {/* Google Header */}
      <header className="flex justify-between items-center p-4 text-[13px] font-medium">
        {/* Left Side */}
        <div className="flex gap-4 pl-2">
          <a href="#" className="hover:underline text-black/85">About</a>
          <a href="#" className="hover:underline text-black/85">Store</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline text-black/85">Gmail</a>
          <a href="#" className="hover:underline text-black/85">Images</a>
          
          {/* Labs Icon */}
          <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors" title="Search Labs">
            <FlaskConical className="text-[#5f6368]" size={24} />
          </div>

          {/* App Grid Icon */}
          <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors" title="Google apps">
            <Grip className="text-[#5f6368]" size={24} />
          </div>
          
          {/* Avatar with Gemini Advanced Gradient Ring */}
          <div className="relative cursor-pointer ml-1 group">
            <div className="absolute -inset-0.5 bg-[linear-gradient(135deg,#4285f4,#ea4335,#fbbc05,#34a853)] rounded-full opacity-100"></div>
            <div className="relative bg-white rounded-full p-[2px]">
              <img 
                src="/AdarshPhoto.jpeg" 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center">
        {children}
      </main>

      {/* Google Footer */}
      <footer className="bg-[#f2f2f2] text-[#70757a] text-[14px]">
        <div className="px-8 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-8 flex-wrap justify-center">
            <a href="#" className="hover:underline text-[#3c4043] font-medium">Advertising</a>
            <a href="#" className="hover:underline text-[#3c4043] font-medium">Business</a>
            <a href="#" className="hover:underline text-[#3c4043] font-medium">How Search works</a>
          </div>
          <div className="flex justify-center">
            <a href="#" className="hover:underline text-[#3c4043] font-medium">Applying AI towards science and the environment</a>
          </div>
          <div className="flex gap-8 flex-wrap justify-center">
            <a href="#" className="hover:underline text-[#3c4043] font-medium">Privacy</a>
            <a href="#" className="hover:underline text-[#3c4043] font-medium">Terms</a>
            <a href="#" className="hover:underline text-[#3c4043] font-medium">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
