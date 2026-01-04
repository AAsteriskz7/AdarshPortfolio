import React from 'react';
import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowDown,
  Twitter,
  Download,
  Terminal,
  Palette,
  Search
} from 'lucide-react';

const Block = ({ children, className = "", color = "bg-white", noHover = false }: { children: React.ReactNode, className?: string, color?: string, noHover?: boolean }) => (
  <div className={`
    ${color} 
    border-[3px] border-black 
    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
    ${!noHover ? 'hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px]' : ''}
    transition-all duration-100 
    rounded-xl p-8 
    ${className}
  `}>
    {children}
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black font-sans selection:bg-yellow-300">
      
      {/* 1. LANDING PAGE / HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
        <Block color="bg-white" className="max-w-6xl w-full text-center md:text-left py-16 md:py-24 relative overflow-hidden" noHover>
          <div className="absolute top-4 right-4 hidden md:flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 border border-black"></span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4">
            Adarsh Setty
          </h1>
          <p className="text-xl md:text-3xl font-bold text-zinc-600 mb-8 uppercase tracking-tight">
            Creative Developer & Designer
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
            <div className="flex items-center gap-2 font-black text-sm uppercase bg-yellow-300 border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse border border-black"></span>
              Available for work
            </div>
            <p className="font-bold text-zinc-500 uppercase tracking-widest text-sm">
              Based in Atlanta, GA
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.linkedin.com/in/adarshsetty/" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 active:translate-y-1 active:shadow-none transition-all">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/AAsteriskz7" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 active:translate-y-1 active:shadow-none transition-all">
              <Github size={24} />
            </a>
            <a href="https://x.com/aasteriskz" target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 active:translate-y-1 active:shadow-none transition-all">
              <Twitter size={24} />
            </a>
            <a href="mailto:adarshsetty1@gmail.com" className="p-3 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 active:translate-y-1 active:shadow-none transition-all">
              <Mail size={24} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 border-2 border-black bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 active:translate-y-1 active:shadow-none transition-all font-black uppercase text-sm">
              <Download size={20} /> Resume
            </a>
          </div>
        </Block>
        
        <div className="mt-12 animate-bounce flex flex-col items-center gap-2 opacity-50 font-black uppercase text-xs">
          <span>Explore Worlds</span>
          <ArrowDown size={20} />
        </div>
      </section>

      {/* 2. PORTAL SELECTION AREA */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-6 mb-8">
          <h2 className="text-3xl font-black uppercase whitespace-nowrap">Select Experience</h2>
          <div className="h-[4px] w-full bg-black"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CS Portal */}
          <Link href="/cs" className="block h-full">
            <Block color="bg-green-200" className="h-full flex flex-col items-center text-center group cursor-pointer">
              <div className="p-4 bg-white border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 group-hover:scale-110 transition-transform">
                <Terminal size={48} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">Computer Science</h3>
              <p className="text-zinc-700 font-bold text-sm leading-relaxed">
                Full-stack development, AI research, and system architecture.
              </p>
              <div className="mt-6 px-6 py-2 bg-black text-white font-black uppercase text-xs tracking-widest rounded-full group-hover:bg-zinc-800 transition-colors">
                Enter Terminal
              </div>
            </Block>
          </Link>

          {/* Design Portal */}
          <Link href="/design" className="block h-full">
            <Block color="bg-purple-200" className="h-full flex flex-col items-center text-center group cursor-pointer">
              <div className="p-4 bg-white border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 group-hover:scale-110 transition-transform">
                <Palette size={48} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">Design Portfolio</h3>
              <p className="text-zinc-700 font-bold text-sm leading-relaxed">
                UI/UX design, brand identity, and visual storytelling.
              </p>
              <div className="mt-6 px-6 py-2 bg-black text-white font-black uppercase text-xs tracking-widest rounded-full group-hover:bg-zinc-800 transition-colors">
                View Gallery
              </div>
            </Block>
          </Link>

          {/* Google Portal */}
          <Link href="/google" className="block h-full">
            <Block color="bg-blue-200" className="h-full flex flex-col items-center text-center group cursor-pointer">
              <div className="p-4 bg-white border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 group-hover:scale-110 transition-transform">
                <Search size={48} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">Google Theme</h3>
              <p className="text-zinc-700 font-bold text-sm leading-relaxed">
                A playful, interactive search engine experience.
              </p>
              <div className="mt-6 px-6 py-2 bg-black text-white font-black uppercase text-xs tracking-widest rounded-full group-hover:bg-zinc-800 transition-colors">
                I'm Feeling Lucky
              </div>
            </Block>
          </Link>

        </div>
      </div>

      {/* Simplified Footer */}
      <footer className="border-t-[3px] border-black bg-white p-12 text-center">
        <p className="font-black text-sm uppercase tracking-[0.2em]">
          © 2026 Adarsh Setty
        </p>
      </footer>
    </div>
  );
};
