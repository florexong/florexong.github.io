import React from "react";
import "./App.css"; // Tailwind styles

export default function CyberpunkFreelanceIT() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0033] via-black to-[#001f3f] text-white px-6 py-12 font-mono">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_cyan] animate-pulse">
          Florex Ong | <span className="text-pink-500">Freelance IT Support</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
          Providing smart IT solutions.
        </p>
        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base text-left">
          {[
            ["🖥️ PC & Laptop Troubleshooting", "cyan"],
            ["📶 Network & WiFi Setup", "violet"],
            ["☁️ Cloud & Business Support", "pink"],
            ["💾 Data Recovery & Cybersecurity", "red"],
            ["⚙️ Custom Scripts & Automation", "yellow"],
            ["🌐 Website Design & Hosting", "green"],
          ].map(([text, color]) => (
            <div
              key={text}
              className={`border-l-4 border-${color}-500 pl-3 py-1 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 rounded`}
            >
              {text}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <a
            href="mailto:florexong99@gmail.com"
            className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-6 rounded-full shadow-lg shadow-cyan-500/40 transition-all duration-300"
          >
            📧 Email Me
          </a>
          <a
            href="https://wa.me/601111985387"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg shadow-green-400/40 transition-all duration-300"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
