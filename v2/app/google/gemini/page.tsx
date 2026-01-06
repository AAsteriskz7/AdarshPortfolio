'use client';

import React, { useState } from 'react';
import { 
  Menu, 
  Plus, 
  MessageSquare, 
  MoreVertical, 
  Settings, 
  History, 
  HelpCircle,
  Image as ImageIcon,
  Mic,
  SendHorizontal,
  Sparkles,
  Compass,
  Lightbulb,
  Code,
  Pencil,
  Moon,
  Sun
} from 'lucide-react';

export default function GeminiPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to Dark Mode as it's popular
  const [showSettings, setShowSettings] = useState(false);

  // Toggle Dark Mode
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const suggestions = [
    {
      icon: <Compass className={`w-6 h-6 ${isDarkMode ? 'text-[#a8c7fa]' : 'text-blue-500'}`} />,
      text: "Plan a trip to explore the city's hidden gems"
    },
    {
      icon: <Lightbulb className={`w-6 h-6 ${isDarkMode ? 'text-[#fdd663]' : 'text-yellow-500'}`} />,
      text: "Brainstorm team bonding activities for our work retreat"
    },
    {
      icon: <Code className={`w-6 h-6 ${isDarkMode ? 'text-[#d0bcff]' : 'text-purple-500'}`} />,
      text: "Write a Python script to automate daily reports"
    },
    {
      icon: <Pencil className={`w-6 h-6 ${isDarkMode ? 'text-[#f28b82]' : 'text-red-500'}`} />,
      text: "Draft a thank you note for a colleague"
    }
  ];

  const themeClasses = {
    bg: isDarkMode ? 'bg-[#131314]' : 'bg-white',
    sidebarBg: isDarkMode ? 'bg-[#1e1f20]' : 'bg-[#f0f4f9]',
    text: isDarkMode ? 'text-[#e3e3e3]' : 'text-[#1f1f1f]',
    secondaryText: isDarkMode ? 'text-[#c4c7c5]' : 'text-[#444746]',
    hoverBg: isDarkMode ? 'hover:bg-[#333537]' : 'hover:bg-[#dfe4ea]',
    activeBg: isDarkMode ? 'bg-[#333537]' : 'bg-[#dfe4ea]',
    inputBg: isDarkMode ? 'bg-[#1e1f20]' : 'bg-[#f0f4f9]',
    cardBg: isDarkMode ? 'bg-[#1e1f20]' : 'bg-[#f0f4f9]',
    cardHover: isDarkMode ? 'hover:bg-[#333537]' : 'hover:bg-[#dfe4ea]',
  };

  return (
    <div className={`fixed inset-0 z-50 flex h-screen font-sans transition-colors duration-200 ${themeClasses.bg} ${themeClasses.text}`}>
      {/* Sidebar */}
      <div 
        className={`${
          sidebarOpen ? 'w-[280px]' : 'w-[68px]'
        } ${themeClasses.sidebarBg} flex-shrink-0 flex flex-col transition-all duration-300 ease-in-out h-full font-medium hidden md:flex`}
      >
        <div className="p-4 pt-6">
          <div 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`p-2 rounded-full w-fit cursor-pointer transition-colors mb-8 ${themeClasses.hoverBg}`}
          >
            <Menu className={themeClasses.secondaryText} size={24} />
          </div>

          <div 
            className={`flex items-center gap-3 ${isDarkMode ? 'bg-[#282a2c]' : 'bg-[#dde3ea]'} ${isDarkMode ? 'hover:bg-[#37393b]' : 'hover:bg-[#d5dbe3]'} ${themeClasses.secondaryText} rounded-full p-3 md:p-4 cursor-pointer transition-all duration-200 ${
              !sidebarOpen ? 'w-fit justify-center' : ''
            }`}
          >
            <Plus size={20} className={themeClasses.secondaryText} />
            {sidebarOpen && <span className={`text-sm font-medium ${themeClasses.secondaryText}`}>New chat</span>}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4">
          {sidebarOpen && (
            <div className="mt-2 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className={`text-xs font-medium ${themeClasses.secondaryText} mb-3 px-3`}>Recent</div>
              
              <div className={`flex items-center gap-3 p-2 rounded-full ${themeClasses.hoverBg} cursor-pointer ${themeClasses.text} text-sm group`}>
                <MessageSquare size={16} className={themeClasses.secondaryText} />
                <span className="truncate">React Component Design</span>
                <MoreVertical size={16} className={`ml-auto opacity-0 group-hover:opacity-100 ${themeClasses.secondaryText}`} />
              </div>

              <div className={`flex items-center gap-3 p-2 rounded-full ${themeClasses.hoverBg} cursor-pointer ${themeClasses.text} text-sm group`}>
                <MessageSquare size={16} className={themeClasses.secondaryText} />
                <span className="truncate">Python Script Help</span>
                <MoreVertical size={16} className={`ml-auto opacity-0 group-hover:opacity-100 ${themeClasses.secondaryText}`} />
              </div>
            </div>
          )}
        </div>

        <div className="p-2 py-4 space-y-1">
          <MenuButton icon={<HelpCircle size={20} />} text="Help" isOpen={sidebarOpen} themeClasses={themeClasses} />
          <MenuButton icon={<History size={20} />} text="Activity" isOpen={sidebarOpen} themeClasses={themeClasses} />
          
          <div className="relative">
            <div onClick={() => setShowSettings(!showSettings)}>
               <MenuButton icon={<Settings size={20} />} text="Settings" isOpen={sidebarOpen} themeClasses={themeClasses} />
            </div>
            {/* Settings Dropdown */}
            {showSettings && sidebarOpen && (
              <div className={`absolute bottom-full left-0 mb-2 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${isDarkMode ? 'bg-[#1e1f20] border border-[#444746]' : 'bg-white border border-gray-200'}`}>
                <button 
                  onClick={toggleTheme}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 ${themeClasses.hoverBg}`}
                >
                  {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            )}
          </div>
          
          {sidebarOpen && (
             <div className={`mt-4 px-4 flex items-center gap-2 text-xs ${themeClasses.secondaryText}`}>
               <div className="w-2 h-2 rounded-full bg-green-500"></div>
               <span>Adarsh, CA</span>
             </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className={`flex-1 flex flex-col relative w-full ${themeClasses.bg}`}>
        {/* Top Bar */}
        <div className="flex items-center justify-between p-4 px-6 absolute top-0 left-0 right-0 z-10 w-full">
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className={`text-xl font-medium ${isDarkMode ? 'text-[#e3e3e3]' : 'text-[#5f6368]'} group-hover:opacity-80 transition-opacity`}>Gemini</span>
            <div className={`${themeClasses.secondaryText} rotate-90 text-xs`}>›</div>
          </div>
          
          <div className="flex items-center gap-4">
             {/* Try Gemini Advanced Button */}
             <div className={`hidden md:flex items-center gap-2 ${isDarkMode ? 'bg-[#1e1f20]' : 'bg-[#f0f4f9]'} ${themeClasses.hoverBg} px-3 py-2 rounded-lg cursor-pointer transition-colors border ${isDarkMode ? 'border-[#444746]' : 'border-transparent'}`}>
                <Sparkles size={16} className="text-[#ea4335]" />
                <span className={`text-xs font-medium ${themeClasses.text}`}>Try Gemini Advanced</span>
             </div>

             {/* App Grid Icon */}
             <div className={`p-2 ${themeClasses.hoverBg} rounded-full cursor-pointer transition-colors`} title="Google apps">
                <div className="grid grid-cols-3 gap-1 w-5 h-5">
                   {[...Array(9)].map((_, i) => (
                      <div key={i} className={`w-1 h-1 rounded-full ${isDarkMode ? 'bg-[#e3e3e3]' : 'bg-[#5f6368]'}`}></div>
                   ))}
                </div>
             </div>

             {/* Avatar */}
             <div className="relative cursor-pointer group">
                 <div className="absolute -inset-0.5 bg-[linear-gradient(135deg,#4285f4,#ea4335,#fbbc05,#34a853)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-[2px]"></div>
                 <img 
                    src="/AdarshPhoto.jpeg" 
                    alt="Profile" 
                    className="relative w-8 h-8 rounded-full object-cover border border-gray-200"
                 />
             </div>
          </div>
          
          {/* Mobile Menu Trigger (hidden on desktop) */}
          <div className="md:hidden">
             <Menu className={themeClasses.secondaryText} size={24} onClick={() => setSidebarOpen(!sidebarOpen)} />
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-4 pb-32">
          {/* Greeting */}
          <div className="max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-medium tracking-tight bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] text-transparent bg-clip-text pb-2">
                  Hello, Adarsh
                </h1>
                <h2 className={`text-5xl md:text-6xl font-medium ${isDarkMode ? 'text-[#444746]' : 'text-[#c4c7c5]'}`}>
                   How can I help you today?
                </h2>
             </div>

             {/* Suggestion Cards */}
             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
               {suggestions.map((s, i) => (
                 <div 
                   key={i} 
                   className={`h-48 rounded-xl ${themeClasses.cardBg} p-4 flex flex-col justify-between ${themeClasses.cardHover} cursor-pointer transition-colors relative overflow-hidden group`}
                 >
                   <p className={`${themeClasses.text} font-medium text-base z-10`}>{s.text}</p>
                   <div className={`self-end p-2 rounded-full ${isDarkMode ? 'bg-[#131314]' : 'bg-white'} group-hover:scale-110 transition-transform`}>
                     {s.icon}
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Input Area (Bottom Fixed/Sticky) */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 pb-6 ${themeClasses.bg} shrink-0 flex justify-center w-full`}>
           <div className="w-full max-w-4xl flex flex-col gap-2">
              <div 
                className={`flex items-center gap-2 ${themeClasses.inputBg} rounded-full p-2 pl-6 pr-4 hover:shadow-sm transition-shadow border ${showSettings ? 'border-gray-400' : 'border-transparent'} ${isDarkMode ? 'focus-within:bg-[#282a2c]' : 'focus-within:bg-white focus-within:shadow-md'} focus-within:border-gray-500 transition-all duration-200 ${
                  input ? 'rounded-3xl' : 'rounded-full'
                }`}
              >
                 <div className={`p-2 rounded-full ${themeClasses.hoverBg} cursor-pointer transition-colors`}>
                    <div className={`${isDarkMode ? 'bg-[#444746]' : 'bg-[#dfe4ea]'} rounded-full p-1`}>
                      <Plus className={themeClasses.text} size={16} strokeWidth={3} />
                    </div>
                 </div>
                 
                 <input 
                   type="text" 
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   placeholder="Enter a prompt here"
                   className={`flex-1 bg-transparent border-none outline-none ${themeClasses.text} text-base h-12 placeholder:${themeClasses.secondaryText}`}
                 />
                 
                 <div className="flex items-center gap-2">
                    {input ? (
                       <button className="p-2 rounded-full bg-[linear-gradient(135deg,#4285f4,#ea4335,#fbbc05,#34a853)] text-white hover:opacity-90 transition-opacity">
                         <SendHorizontal size={20} />
                       </button>
                    ) : (
                      <>
                        <div className={`p-2 rounded-full ${themeClasses.hoverBg} cursor-pointer transition-colors`}>
                          <ImageIcon className={themeClasses.text} size={20} />
                        </div>
                        <div className={`p-2 rounded-full ${themeClasses.hoverBg} cursor-pointer transition-colors`}>
                          <Mic className={themeClasses.text} size={20} />
                        </div>
                      </>
                    )}
                 </div>
              </div>

              <div className={`text-center text-[11px] md:text-xs ${themeClasses.secondaryText} py-2`}>
                Gemini may display inaccurate info, including about people, so double-check its responses. 
                <a href="#" className="underline ml-1">Your privacy and Gemini Apps</a>
              </div>
           </div>
        </div>
      </main>
      
      {/* Mobile Sidebar Overlay */}
      {(!sidebarOpen && typeof window !== 'undefined' && window.innerWidth < 768) && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(true)} />
      )}
    </div>
  );
}

function MenuButton({ icon, text, isOpen, themeClasses }: { icon: React.ReactNode, text: string, isOpen: boolean, themeClasses: any }) {
  return (
    <div className={`flex items-center gap-4 p-3 rounded-full ${themeClasses.hoverBg} cursor-pointer ${themeClasses.secondaryText} ${!isOpen ? 'justify-center' : ''}`} title={text}>
       <div className="min-w-[20px]">{icon}</div>
       {isOpen && <span className="text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300">{text}</span>}
    </div>
  );
}
