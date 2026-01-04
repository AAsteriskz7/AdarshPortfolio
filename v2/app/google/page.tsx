'use client';

import React, { useState } from 'react';
import { Search, Mic, Camera } from 'lucide-react';

export default function GooglePage() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${query} (This will eventually link to search results)`);
  };

  return (
    <div className="flex flex-col items-center mt-[10vh] w-full px-4">
      
      {/* Logo */}
      <div className="mb-8 select-none">
        <span className="text-[5.5rem] font-medium tracking-tighter" style={{ fontFamily: 'Product Sans, Arial, sans-serif' }}>
          <span className="text-[#4285f4]">G</span>
          <span className="text-[#ea4335]">o</span>
          <span className="text-[#fbbc05]">o</span>
          <span className="text-[#4285f4]">g</span>
          <span className="text-[#34a853]">l</span>
          <span className="text-[#ea4335]">e</span>
        </span>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="w-full max-w-[584px] relative group">
        <div className="flex items-center w-full px-4 py-3 rounded-full border border-[#dfe1e5] hover:shadow-md focus-within:shadow-md transition-shadow bg-white">
          <Search className="text-[#9aa0a6] mr-3" size={20} />
          <input 
            type="text" 
            className="flex-grow outline-none text-[16px] text-black"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex items-center gap-3 ml-3">
            <Mic className="text-[#4285f4] cursor-pointer" size={24} />
            <Camera className="text-[#4285f4] cursor-pointer" size={24} />
          </div>
        </div>
      </form>

      {/* Buttons */}
      <div className="mt-8 flex gap-3">
        <button 
          onClick={handleSearch}
          className="bg-[#f8f9fa] border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-sm px-4 py-2 rounded text-[#3c4043] text-sm font-medium transition-all"
        >
          Google Search
        </button>
        <button 
          className="bg-[#f8f9fa] border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-sm px-4 py-2 rounded text-[#3c4043] text-sm font-medium transition-all"
        >
          I'm Feeling Lucky
        </button>
      </div>

      {/* Language / Extra Text */}
      <div className="mt-6 text-sm text-[#3c4043]">
        Google offered in: <a href="#" className="text-[#1a0dab] hover:underline ml-1">Español</a>
      </div>

    </div>
  );
}
