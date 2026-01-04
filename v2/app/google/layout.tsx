import React from 'react';
import { Grip, FlaskConical } from 'lucide-react'; // Using Flask for the "Labs" icon usually found there, or Grip for the app drawer

export default function GoogleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-[#202124] font-arial flex flex-col">
      {/* Google Header */}
      <header className="flex justify-end items-center p-4 gap-4 text-[13px]">
        <a href="#" className="hover:underline">Gmail</a>
        <a href="#" className="hover:underline">Images</a>
        
        {/* App Grid Icon */}
        <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
          <Grip className="text-gray-600" size={20} />
        </div>
        
        {/* Avatar / Sign In */}
        <div className="bg-[#1a73e8] text-white px-6 py-2 rounded-md font-medium hover:bg-[#1b66c9] cursor-pointer transition-colors">
          Sign in
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      {/* Google Footer */}
      <footer className="bg-[#f2f2f2] text-[#70757a] text-[14px]">
        <div className="px-8 py-3 border-b border-[#dadce0]">
          Portfolio
        </div>
        <div className="px-8 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 flex-wrap justify-center">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Advertising</a>
            <a href="#" className="hover:underline">Business</a>
            <a href="#" className="hover:underline">How Search works</a>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
