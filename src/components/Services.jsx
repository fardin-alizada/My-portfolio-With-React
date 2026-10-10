import React from 'react';

export default function Services() {
  const serviceList = [
    { icon: 'fa-pen-nib', title: 'UI/UX Design', desc: 'Human-centered user interface designs paired with seamless interactive prototyping in Figma.' },
    { icon: 'fa-code', title: 'Frontend Development', desc: 'Responsive, lightning-fast web engineering built using clean HTML5, modern CSS, and JavaScript.' },
    { icon: 'fa-layer-group', title: 'Creative Strategy', desc: 'Structured web architecture and creative solutions to make your digital brand memorable.' },
  ];

  return (
    <section className="py-[120px]" id="services">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-[60px]">
          <span className="inline-block font-space text-[12px] font-bold tracking-[2px] text-accentColor mb-3">WHAT I DO</span>
          <h2 className="font-space text-[clamp(36px,4vw,48px)] mb-3">Services & <span className="text-primaryColor">Solutions.</span></h2>
          <p className="text-textMuted">End-to-end digital services tailored to scale your vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceList.map((s, idx) => (
            <div key={idx} className="p-9 bg-cardBg border border-white/10 rounded-[20px] group transition-all hover:-translate-y-[6px] hover:border-primaryColor/40 hover:bg-cardHover">
              <div className="w-[50px] h-[50px] rounded-xl bg-[rgba(99,102,241,0.12)] text-primaryColor flex items-center justify-center text-[20px] mb-6">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h3 className="text-[20px] mb-3 font-semibold">{s.title}</h3>
              <p className="text-textMuted text-[14px] mb-6">{s.desc}</p>
              <a href="mailto:fardinalizada914@gmail.com" className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-accentColor">
                Inquire Service <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}