import React from 'react';

export const Block = ({ children, className = "", color = "bg-white", noHover = false }: { children: React.ReactNode, className?: string, color?: string, noHover?: boolean }) => (
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
