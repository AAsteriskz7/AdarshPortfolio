'use client';

import React, { useState } from 'react';
import { Sparkles, Plus } from 'lucide-react';

type Language = 'Normal' | 'Python' | 'JSON' | 'Binary' | 'Assembly';

export default function GooglePage() {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState<Language>('Normal');
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [typedLetters, setTypedLetters] = useState<string[]>([]);

  const fullText = "Adarsh";
  // Classic Google colors: Blue, Red, Yellow, Blue, Green, Red
  const colors = ["#4285f4", "#ea4335", "#fbbc05", "#4285f4", "#34a853", "#ea4335"];

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLogoHovered) {
      setTypedLetters([]); // Reset on new hover
      let currentIndex = 0;
      
      // Start typing loop
      interval = setInterval(() => {
        // We look at currentIndex to see which letter to add next
        if (currentIndex < fullText.length) {
          // Use functional state update to safely append correct letter based on LOCAL currentIndex
          const letterToAdd = fullText[currentIndex];
          setTypedLetters(prev => [...prev, letterToAdd]);
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 150); // Slower typing speed (150ms) for better feel
    } else {
      setTypedLetters([]);
    }
    return () => clearInterval(interval);
  }, [isLogoHovered]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${query} (This will eventually link to search results)`);
  };

  const getTranslatedText = (key: 'search' | 'lucky' | 'ai' | 'offered') => {
    const translations: Record<Language, Record<string, string>> = {
      'Normal': { 
        search: 'Google Search', 
        lucky: "I'm Feeling Lucky", 
        ai: 'AI Mode',
        offered: 'Portfolio offered in:'
      },
      'Python': { 
        search: 'def search():', 
        lucky: 'import random', 
        ai: 'ai_mode = True',
        offered: 'print("Portfolio offered in:")'
      },
      'JSON': { 
        search: '"action": "search"', 
        lucky: '"lucky": true', 
        ai: '"aiMode": true',
        offered: '"offeredIn":'
      },
      'Binary': { 
        search: '01010011 01100101', // "Se" 
        lucky: '01001100 01110101', // "Lu"
        ai: '01000001 01001001', // "AI"
        offered: '01010000 01101111:' // "Po"
      },
      'Assembly': { 
        search: 'MOV EAX, SEARCH', 
        lucky: 'JMP LUCKY', 
        ai: 'SET AI_FLAG',
        offered: 'SECTION .DATA'
      }
    };
    return translations[language][key] || '';
  };

  return (
    <div className="flex flex-col items-center w-full px-4 -mt-24">
      
      {/* Logo */}
      <div 
        className="mb-[38px] select-none cursor-pointer h-[92px] flex items-center justify-center min-w-[300px]"
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
      >
        {isLogoHovered ? (
          <div className="flex items-center justify-center h-full">
            <span className="text-[90px] font-semibold tracking-tighter leading-none" style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
              {typedLetters.map((letter, i) => (
                <span key={i} style={{ color: colors[i] }}>{letter}</span>
              ))}
              <span className="animate-pulse w-1 h-[80px] bg-[#4285f4] inline-block ml-1 align-middle opacity-70"></span>
            </span>
          </div>
        ) : (
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
            alt="Google" 
            height={92}
            width={272}
            className="h-[92px]"
          />
        )}
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="w-full max-w-[584px] relative group">
        <div className="flex items-center w-full px-[14px] py-2.5 rounded-[24px] border border-[#dfe1e5] hover:shadow-[0_1px_6px_rgba(32,33,36,.28)] focus-within:shadow-[0_1px_6px_rgba(32,33,36,.28)] transition-shadow bg-white min-h-[46px]">
          
          {/* Plus Icon (Left) */}
          <div className="pr-3 text-[#9aa0a6] cursor-pointer hover:text-[#3c4043]">
            <Plus size={20} />
          </div>
          
          <input 
            type="text" 
            className="flex-grow outline-none text-[16px] text-[rgba(0,0,0,0.87)] font-normal"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          
          <div className="flex items-center gap-3 ml-3">
            {/* Mic Icon */}
            <div className="cursor-pointer" title="Search by voice">
              <svg className="goxjub" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path>
                <path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.41c1.26 1.32 3.03 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path>
              </svg>
            </div>
            
            {/* Lens Icon */}
            <div className="cursor-pointer" title="Search by image">
              <svg className="Gdd5U" focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <rect fill="none" height="192" width="192"></rect>
                <g>
                  <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
                  <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
                  <path fill="#ea4335" d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-44.8-0.01c-8.97,0-16.3-7.03-16.3-15.69V80h-10.9V135.2z"></path>
                  <path fill="#fbbc05" d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.97,0,16.3,7.03,16.3,15.69V96h15.7V72.8z"></path>
                  <path fill="#4285f4" d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h10.9V72.8c0-9.66,8.17-17.93,17.9-17.93l32,0.01L100.82,24z"></path>
                </g>
              </svg>
            </div>

            {/* AI Mode Button */}
            <div className="flex items-center gap-1.5 bg-[#f1f3f4] hover:bg-[#e8eaed] px-3 py-1.5 rounded-full cursor-pointer transition-colors text-[13px] font-bold text-[#3c4043] min-w-fit">
              <Sparkles size={16} className="text-[#1a73e8]" />
              <span className="whitespace-nowrap">{getTranslatedText('ai')}</span>
            </div>
          </div>
        </div>
      </form>

      {/* Buttons */}
      <div className="mt-[29px] flex gap-3">
        <button 
          onClick={handleSearch}
          className="bg-[#f8f9fa] border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-[0_1px_1px_rgba(0,0,0,0.1)] px-[16px] h-[36px] rounded-[4px] text-[#3c4043] text-[14px] font-semibold transition-all min-w-[127px]"
        >
          {getTranslatedText('search')}
        </button>
        <button 
          className="bg-[#f8f9fa] border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-[0_1px_1px_rgba(0,0,0,0.1)] px-[16px] h-[36px] rounded-[4px] text-[#3c4043] text-[14px] font-semibold transition-all min-w-[127px]"
        >
          {getTranslatedText('lucky')}
        </button>
      </div>

      {/* Language / Extra Text */}
      <div className="mt-[28px] text-[13px] text-[#3c4043]">
        {getTranslatedText('offered')} 
        {['English', 'Python', 'JSON', 'Binary', 'Assembly'].map((lang) => (
           <span 
             key={lang}
             className={`ml-2 cursor-pointer hover:underline ${language === (lang === 'English' ? 'Normal' : lang) ? 'font-bold text-[#202124]' : 'text-[#1a0dab]'}`}
             onClick={() => setLanguage(lang === 'English' ? 'Normal' : lang as Language)}
           >
             {lang}
           </span>
        ))}
      </div>

    </div>
  );
}
