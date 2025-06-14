import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50"
      style={{
        transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
      }}
    />
  );
};
