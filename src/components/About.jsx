import React from 'react';
import myPhoto from '../assets/images/myPhoto.png';

export default function About() {
  const skills = [
    'HTML5 / CSS3',
    'JavaScript (ES6+)',
    'Figma',
    'UI/UX Architecture',
    'Responsive Web',
    'Git & Workflow',
  ];

  return (
    <section className="py-[120px]" id="about">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[80px] items-center">
        <div className="relative">
          <div className="rounded-[32px] overflow-hidden border border-[rgba(255,255,255,0.08)]">
            {/* Online About Image */}
            <img 
              src={myPhoto} 
              alt="Fardin Alizada" 
              className="h-[480px] w-full object-cover object-top" 
            />
          </div>
          <div className="absolute -bottom-[20px] -right-[20px] p-[20px] bg-[#111726] border border-[rgba(255,255,255,0.08)] rounded-[20px] flex items-center gap-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <span className="text-[32px] text-[#22d3ee] leading-none">∞</span>
            <div>
              <strong className="block text-[14px]">Continuous Growth</strong>
              <small className="text-[#9ca3af] text-[12px]">Learning & Innovating Daily</small>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-block font-space text-[12px] font-bold tracking-[2px] text-[#22d3ee] mb-[12px]">ABOUT ME</span>
          <h2 className="font-space text-[clamp(36px,4vw,48px)] leading-[1.15] mb-[20px]">
            Turning complex problems into <span className="text-[#6366f1]">intuitive solutions.</span>
          </h2>
          <p className="text-[#9ca3af] mb-[30px] text-[15px]">
            I bridge the gap between design and technical execution. I craft interfaces that don't just look visually compelling, but are fast, responsive, and accessible across every platform.
          </p>

          <div className="mb-[36px]">
            <span className="block text-[13px] font-semibold mb-[12px] text-[#9ca3af]">Core Skills & Tools:</span>
            <div className="flex flex-wrap gap-[10px]">
              {skills.map((skill) => (
                <span key={skill} className="px-[16px] py-[8px] bg-[#111726] border border-[rgba(255,255,255,0.08)] rounded-[100px] text-[12px] font-medium text-[#f3f4f6]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <a href="mailto:fardinalizada914@gmail.com" className="h-[52px] px-[28px] inline-flex items-center gap-[10px] bg-[#6366f1] text-white font-semibold text-[14px] rounded-[12px] shadow-[0_8px_30px_rgba(99,102,241,0.35)] hover:-translate-y-[2px] transition-all">
            Let's Collaborate <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}