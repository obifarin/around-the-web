import React from "react";

export function Header() {
  return (
    <header className="w-full py-8 px-6 md:px-12 border-b border-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-['Inter'] font-normal text-lg md:text-xl tracking-tight">
          <span className="block font-bold">Around The Web</span>
        </div>
      </div>
    </header>
  );
}