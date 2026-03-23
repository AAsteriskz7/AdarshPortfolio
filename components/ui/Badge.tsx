import React from 'react';

export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-white border-2 border-black px-4 py-1 text-sm font-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] m-1 uppercase tracking-tight">
    {children}
  </span>
);
