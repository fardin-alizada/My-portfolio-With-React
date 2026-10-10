import React from 'react';

export default function Contact() {
  return (
    <section className="py-[120px]" id="contact">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
        <div className="p-[80px_60px] rounded-[32px] bg-gradient-to-br from-[#111726] to-[#090d16] border border-[rgba(255,255,255,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-[40px]">
          <div>
            <span className="inline-block font-space text-[12px] font-bold tracking-[2px] text-[#22d3ee] mb-[12px]">HAVE A PROJECT IN MIND?</span>
            <h2 className="font-space text-[clamp(36px,4vw,52px)] leading-[1.1] my-[12px]">
              Let's build something <span className="text-[#6366f1]">extraordinary.</span>
            </h2>
            <p className="text-[#9ca3af]">Have an idea or opportunity? Send me a message and let's get started.</p>
          </div>
          <a href="mailto:fardinalizada914@gmail.com" className="h-[56px] px-[32px] inline-flex items-center gap-[12px] bg-gradient-to-br from-[#6366f1] to-[#4f46e5] text-white font-bold text-[14px] rounded-[12px] whitespace-nowrap shadow-[0_10px_30px_rgba(99,102,241,0.35)] hover:-translate-y-[2px] hover:shadow-[0_15px_35px_rgba(99,102,241,0.35)] transition-all">
            Get In Touch <i className="fa-solid fa-paper-plane"></i>
          </a>
        </div>
      </div>
    </section>
  );
}