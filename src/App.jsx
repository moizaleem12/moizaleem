import { Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import Nav from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Work from './Components/Work';

// Cursor Context
const CursorContext = createContext();

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) throw new Error('useCursor must be used within CursorProvider');
  return context;
};

// Custom Cursor Component
const CustomCursor = ({ mousePosition, isHoveringWorkCard }) => (
  <div
    className="fixed top-0 left-0 pointer-events-none z-50 transition-all duration-200 ease-out"
    style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
  >
    {isHoveringWorkCard ? (
      <div className="text-3xl">👀</div>
    ) : (
      <div className="w-4 h-4 rounded-full bg-black" />
    )}
  </div>
);

// Main Sections Component
const MainSections = () => (
  <>
    <section id="home"><Home /></section>
    <section id="about"><About /></section>
    <section id="work"><Work /></section>
    <section id="contact"><Contact /></section>
  </>
);

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringWorkCard, setIsHoveringWorkCard] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Mouse tracking
  useEffect(() => {
    if (isMobile) return;

    const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [isMobile]);

  // Hide default cursor
  useEffect(() => {
    if (isMobile) return;

    const style = document.createElement('style');
    style.textContent = `*, a, button, input, textarea, select, [role="button"], .cursor-pointer { cursor: none !important; }`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [isMobile]);

  return (
    <CursorContext.Provider value={{ setIsHoveringWorkCard }}>
      <div className={`flex overflow-hidden flex-col justify-center mx-6 md:mx-36 ${!isMobile ? 'cursor-none' : ''}`}>
        {!isMobile && <CustomCursor mousePosition={mousePosition} isHoveringWorkCard={isHoveringWorkCard} />}
        <Nav />
        <Routes>
          <Route path="/" element={<MainSections />} />
          <Route path="/project/:id" element={<Projects />} />
        </Routes>
      </div>
    </CursorContext.Provider>
  );
}

export default App;
