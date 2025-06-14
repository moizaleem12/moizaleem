import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import hamburger from '../assets/habmurger.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768 || 'ontouchstart' in window);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  const links = ["Home", "About", "Work", "Contact"];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !menuOpen) return;
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [isMobile, menuOpen]);

  const scrollToSection = (section) => {
    const sectionId = section.toLowerCase();
    const element = document.getElementById(sectionId);
    
    if (location.pathname === '/') {
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
    closeMenu();
  };

  const openMenu = () => {
    setMenuOpen(true);
    linksRef.current = [];
  };

  const closeMenu = () => {
    gsap.to(menuRef.current, {
      y: "-100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => setMenuOpen(false),
    });
  };

  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;
    
    gsap.fromTo(menuRef.current, 
      { y: "-100%", opacity: 0 },
      {
        y: "0%", opacity: 1, duration: 0.6, ease: "power3.out",
        onComplete: () => {
          gsap.fromTo(linksRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
          );
        }
      }
    );
  }, [menuOpen]);

  return (
    <>
      <nav className="flex gap-x-4 justify-center gap-0 md:gap-x-6 my-12 items-center relative z-10">
        <h2 className="text-xs md:text-lg">MOIZ ALEEM</h2>
        <div className="dropdown flex items-center cursor-pointer px-2 py-1 md:px-3 md:py-2 border rounded-full" onClick={openMenu}>
          <h2 className="text-xs md:text-lg">MENU</h2>
          <img src={hamburger} alt="menu icon" className="w-6 h-6 ml-2" />
        </div>
        <h2 className="text-xs md:text-lg">LAHORE-PAKISTAN</h2>
      </nav>

      {menuOpen && (
        <div ref={menuRef} className="fixed inset-0 bg-black text-white z-50 flex flex-col justify-center items-center gap-8 cursor-none">
       
          {!isMobile && (
            <div
              className="fixed top-0 left-0 pointer-events-none z-[60] transition-all duration-200 ease-out"
              style={{ transform: `translate(${mousePos.x - 12}px, ${mousePos.y - 12}px)` }}
            >
              <div className="w-6 h-6 rounded-full border-2 bg-transparent border-white" />
              <div className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full border border-white opacity-50 -translate-x-1/2 -translate-y-1/2" />
            </div>
          )}

          <button className="absolute top-6 right-6 text-white text-2xl" onClick={closeMenu}>✕</button>
          <div className="absolute top-6 left-6 text-lg font-semibold">MOIZ ALEEM</div>

          {/* Menu Links */}
          {links.map((link, i) => (
            <button
              key={i}
              ref={el => el && !linksRef.current.includes(el) && linksRef.current.push(el)}
              onClick={() => scrollToSection(link)}
              className="text-3xl opacity-0 hover:text-gray-300 transition-colors duration-200"
            >
              {link}
            </button>
          ))}


        </div>
      )}
    </>
  );
}