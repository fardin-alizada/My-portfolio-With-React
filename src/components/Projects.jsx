import React from 'react';

export default function Projects() {
  const projectList = [
    { 
      num: '01', 
      tag: 'UI / UX DESIGN', 
      title: 'Modern Auth Portal', 
      desc: 'Clean single-page authentication interface with subtle micro-interactions.', 
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      num: '02', 
      tag: 'WEB DEVELOPMENT', 
      title: 'Creative Agency Portfolio', 
      desc: 'A sleek, content-focused portfolio designed for modern agencies.', 
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      num: '03', 
      tag: 'FRONTEND DEV', 
      title: 'Minimalist Web Application', 
      desc: 'High-speed responsive web platform engineered for scalability.', 
      img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      num: '04', 
      tag: 'FULL WORKFLOW', 
      title: 'Designrup Platform', 
      desc: 'End-to-end design and frontend development for a digital agency.', 
      img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800' 
    },
  ];

  return (
    <section className="py-[120px] bg-[#0b101d]" id="projects">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[60px] gap-4">
          <div>
            <span className="inline-block font-space text-[12px] font-bold tracking-[2px] text-[#22d3ee] mb-[12px]">PORTFOLIO</span>
            <h2 className="font-space text-[clamp(36px,4vw,48px)]">Featured <span className="text-[#6366f1]">Work.</span></h2>
          </div>
          <p className="text-[#9ca3af]">Hand-picked web applications and UI designs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {projectList.map((p, idx) => (
            <article key={idx} className="bg-[#111726] border border-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden group transition-all hover:-translate-y-[8px] hover:border-[rgba(99,102,241,0.4)]">
              <div className="relative h-[280px] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-[16px] left-[16px] px-[12px] py-[6px] bg-[rgba(9,13,22,0.8)] backdrop-blur-[8px] rounded-[6px] font-space text-[12px] font-bold">{p.num}</span>
              </div>
              <div className="p-[24px]">
                <small className="text-[#22d3ee] text-[11px] font-bold tracking-[1px]">{p.tag}</small>
                <h3 className="text-[20px] mt-[6px] mb-[10px] font-semibold">{p.title}</h3>
                <p className="text-[#9ca3af] text-[14px]">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}