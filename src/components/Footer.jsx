import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-[100px] pb-[30px] bg-[#060910] border-t border-[rgba(255,255,255,0.08)]">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-[60px] mb-[80px]">
        <div>
          <a href="#home" className="flex items-center gap-[10px] font-space text-[18px] font-bold text-white">
            <span className="w-[34px] h-[34px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#6366f1] to-[#22d3ee] text-white text-[12px] font-extrabold shadow-[0_0_15px_rgba(99,102,241,0.5)]">FA</span>
            <span className="font-space">FARDIN<span className="text-[#22d3ee]"> Alizada.</span></span>
          </a>
          <p className="text-[#9ca3af] text-[14px] my-[16px] max-w-[300px]">
            Building meaningful, modern digital experiences with code and design.
          </p>
          <div className="flex gap-[12px]">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="w-[40px] h-[40px] rounded-[10px] bg-[#111726] border border-[rgba(255,255,255,0.08)] flex items-center justify-center hover:bg-[#6366f1] hover:border-[#6366f1] hover:-translate-y-[3px] transition-all"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/fardin-alizada/fardin-alizada" target="_blank" rel="noreferrer" className="w-[40px] h-[40px] rounded-[10px] bg-[#111726] border border-[rgba(255,255,255,0.08)] flex items-center justify-center hover:bg-[#6366f1] hover:border-[#6366f1] hover:-translate-y-[3px] transition-all"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="w-[40px] h-[40px] rounded-[10px] bg-[#111726] border border-[rgba(255,255,255,0.08)] flex items-center justify-center hover:bg-[#6366f1] hover:border-[#6366f1] hover:-translate-y-[3px] transition-all"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="w-[40px] h-[40px] rounded-[10px] bg-[#111726] border border-[rgba(255,255,255,0.08)] flex items-center justify-center hover:bg-[#6366f1] hover:border-[#6366f1] hover:-translate-y-[3px] transition-all"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <div className="flex flex-col gap-[12px]">
          <h4 className="text-[14px] font-bold mb-[8px]">Navigation</h4>
          <a href="#home" className="text-[#9ca3af] text-[13px] hover:text-[#f3f4f6] transition-colors">Home</a>
          <a href="#about" className="text-[#9ca3af] text-[13px] hover:text-[#f3f4f6] transition-colors">About</a>
          <a href="#projects" className="text-[#9ca3af] text-[13px] hover:text-[#f3f4f6] transition-colors">Projects</a>
          <a href="#services" className="text-[#9ca3af] text-[13px] hover:text-[#f3f4f6] transition-colors">Services</a>
        </div>

        <div className="flex flex-col gap-[12px]">
          <h4 className="text-[14px] font-bold mb-[8px]">Expertise</h4>
          <a href="#about" className="text-[#9ca3af] text-[13px] hover:text-[#f3f4f6] transition-colors">UI/UX Design</a>
          <a href="#about" className="text-[#9ca3af] text-[13px] hover:text-[#f3f4f6] transition-colors">Frontend Dev</a>
          <a href="#about" className="text-[#9ca3af] text-[13px] hover:text-[#f3f4f6] transition-colors">Prototyping</a>
          <a href="#about" className="text-[#9ca3af] text-[13px] hover:text-[#f3f4f6] transition-colors">Web Architecture</a>
        </div>

        <div className="flex flex-col gap-[12px]">
          <h4 className="text-[14px] font-bold mb-[8px]">Contact</h4>
          <a href="mailto:fardinalizada914@gmail.com" className="text-[#9ca3af] text-[13px] hover:text-[#f3f4f6] transition-colors">fardinalizada914@gmail.com</a>
          <a href="mailto:fardinalizada914@gmail.com" className="text-[#9ca3af] text-[13px] hover:text-[#f3f4f6] transition-colors">Start a Project</a>
        </div>
      </div>

      <div className="w-[min(1180px,calc(100%-48px))] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center pt-[30px] border-t border-[rgba(255,255,255,0.08)] text-[#9ca3af] text-[13px] gap-4">
        <p>© 2026 Fardin Alizada. All rights reserved.</p>
        <div className="flex gap-[24px]">
          <a href="#" className="hover:text-[#f3f4f6] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#f3f4f6] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}