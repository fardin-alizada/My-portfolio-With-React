import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach((section) => {
        const top = section.offsetTop;
        if (window.scrollY >= top - 180) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-[20px] left-1/2 -translate-x-1/2 z-[1000] w-[min(1180px,calc(100%-32px))] px-[12px] py-[8px] bg-[rgba(17,23,38,0.85)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.12)] rounded-[100px] shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all">
      <div className="flex items-center justify-between w-full">
        <a href="#home" className="flex items-center gap-[10px] font-space text-[18px] font-bold text-white">
          <span className="w-[34px] h-[34px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#6366f1] to-[#22d3ee] text-white text-[12px] font-extrabold shadow-[0_0_15px_rgba(99,102,241,0.5)]">FA</span>
          <span className="font-space">FARDIN<span className="text-[#22d3ee]"> Alizada.</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-[6px] p-[4px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[100px]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-[18px] py-[8px] text-[13px] font-semibold rounded-[100px] transition-all ${
                  isActive ? 'text-white bg-[#6366f1] shadow-[0_4px_15px_rgba(99,102,241,0.4)]' : 'text-[#9ca3af] hover:text-white hover:bg-[rgba(255,255,255,0.06)]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-[10px]">
          <a href="mailto:fardinalizada914@gmail.com" className="hidden sm:flex h-[38px] px-[18px] items-center gap-[8px] bg-white text-[#090d16] rounded-[100px] text-[12px] font-bold hover:bg-[#22d3ee] hover:text-[#090d16] transition-all">
            <span>Let's Talk</span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden w-[38px] h-[38px] rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] text-white flex items-center justify-center text-[16px]"
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden flex flex-col absolute top-[60px] left-0 right-0 bg-[#111726] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-[20px] gap-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-[#9ca3af] hover:text-white font-semibold text-[14px]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}