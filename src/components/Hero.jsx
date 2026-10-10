import React from 'react';
import myPhoto from '../assets/images/fardin-as-a front-end.jpeg';
export default function Hero() {
  return (
    <section className="relative pt-[160px] pb-[120px] overflow-hidden" id="home">
      <div className="absolute rounded-full blur-[120px] z-0 pointer-events-none w-[450px] h-[450px] -top-[100px] -right-[50px] bg-[rgba(99,102,241,0.18)]"></div>
      <div className="absolute rounded-full blur-[120px] z-0 pointer-events-none w-[350px] h-[350px] bottom-0 -left-[50px] bg-[rgba(34,211,238,0.12)]"></div>

      <div className="w-[min(1180px,calc(100%-48px))] mx-auto relative z-1 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-[60px]">
        <div>
          <div className="inline-flex items-center gap-[8px] px-[16px] py-[6px] rounded-[100px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[13px] text-[#9ca3af] mb-[24px]">
            <span className="w-[8px] h-[8px] bg-[#10b981] rounded-full pulse-dot"></span> Available for new projects
          </div>

          <h1 className="font-space text-[clamp(44px,5.5vw,68px)] leading-[1.05] tracking-[-2px] mb-[20px]">
            Crafting <span className="bg-gradient-to-br from-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent">digital</span> experiences that matter.
          </h1>

          <p className="text-[#9ca3af] text-[16px] max-w-[520px] mb-[32px]">
            I'm Fardin Alizada — a developer and designer specializing in building high-performance, aesthetically refined websites and web applications.
          </p>

          <div className="flex gap-[16px] mb-[48px]">
            <a href="#projects" className="h-[52px] px-[28px] inline-flex items-center gap-[10px] bg-[#6366f1] text-white font-semibold text-[14px] rounded-[12px] shadow-[0_8px_30px_rgba(99,102,241,0.35)] hover:-translate-y-[2px] hover:bg-[#4f46e5] transition-all">
              Explore Projects <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a href="#about" className="h-[52px] px-[28px] inline-flex items-center bg-[#111726] border border-[rgba(255,255,255,0.08)] text-[#f3f4f6] font-semibold text-[14px] rounded-[12px] hover:border-[rgba(99,102,241,0.4)] hover:bg-[#182035] transition-all">
              More About Me
            </a>
          </div>

          <div className="flex items-center gap-[32px]">
            <div>
              <strong className="block text-[26px] font-space">20+</strong>
              <span className="text-[12px] text-[#9ca3af]">Projects Done</span>
            </div>
            <div className="w-[1px] h-[35px] bg-[rgba(255,255,255,0.08)]"></div>
            <div>
              <strong className="block text-[26px] font-space">5+</strong>
              <span className="text-[12px] text-[#9ca3af]">Core Tech Stack</span>
            </div>
            <div className="w-[1px] h-[35px] bg-[rgba(255,255,255,0.08)]"></div>
            <div>
              <strong className="block text-[26px] font-space">100%</strong>
              <span className="text-[12px] text-[#9ca3af]">Client Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-[320px] rounded-[32px] overflow-hidden bg-[#111726] border border-[rgba(255,255,255,0.08)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
            {/* Online Developer Portrait */}
            <img 
              src={myPhoto} 
              alt="Fardin Alizada" 
              className="h-[400px] w-full object-cover object-top" 
            />
            <div className="p-[16px] bg-[rgba(17,23,38,0.9)] backdrop-blur-[10px] flex items-center gap-[12px] border-t border-[rgba(255,255,255,0.08)]">
              <span className="w-[10px] h-[10px] bg-[#10b981] rounded-full"></span>
              <div>
                <strong className="block text-[14px]">Fardin Alizada</strong>
                <small className="text-[#9ca3af] text-[11px]">Frontend Dev & Designer</small>
              </div>
            </div>
          </div>

          <div className="absolute top-[40px] -left-[20px] p-[12px_18px] bg-[rgba(17,23,38,0.85)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.08)] rounded-[12px] flex items-center gap-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            <div className="w-[38px] h-[38px] rounded-[8px] bg-[rgba(99,102,241,0.15)] text-[#6366f1] flex items-center justify-center text-[16px]">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <div>
              <strong className="block text-[13px]">UI/UX Design</strong>
              <small className="text-[#9ca3af] text-[11px]">Figma & Systems</small>
            </div>
          </div>

          <div className="absolute bottom-[40px] -right-[20px] p-[12px_18px] bg-[rgba(17,23,38,0.85)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.08)] rounded-[12px] flex items-center gap-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            <div className="w-[38px] h-[38px] rounded-[8px] bg-[rgba(34,211,238,0.15)] text-[#22d3ee] flex items-center justify-center text-[16px]">
              <i className="fa-solid fa-code"></i>
            </div>
            <div>
              <strong className="block text-[13px]">Clean Code</strong>
              <small className="text-[#9ca3af] text-[11px]">Modern JS Frameworks</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}