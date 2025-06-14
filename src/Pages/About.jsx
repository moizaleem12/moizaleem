import React, { useEffect, useRef, useState } from 'react'
import fyp from '../assets/fyp.jpeg'
import grad from '../assets/grad.jpeg'
import office from '../assets/office.jpeg'
import event from '../assets/event.jpeg'

export default function About() {
  const containerRef = useRef(null)
  const hasAnimated = useRef(false)
  const [visibleWords, setVisibleWords] = useState(0)
  const [showImages, setShowImages] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  const text = "I'm Moiz, a full stack developer and UX/UI designer who loves combining design and code to build useful, user-friendly products. I started with a passion for clean interfaces and grew into a developer who enjoys the full process—from layouts to backend logic."
  const words = text.split(' ')
  
  const images = [
    { src: fyp, alt: 'FYP Presentation' },
    { src: event, alt: 'Event Moment' },  
    { src: grad, alt: 'Graduation Day' },
    { src: office, alt: 'Office Work' }
  ]

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let i = 0
          const interval = setInterval(() => {
            setVisibleWords(++i)
            if (i >= words.length) {
              clearInterval(interval)
              setTimeout(() => setShowImages(true), 300)
            }
          }, 40)
        }
      },
      { threshold: 0.3, rootMargin: '-50px 0px' }
    )

    containerRef.current && observer.observe(containerRef.current)
    return () => containerRef.current && observer.unobserve(containerRef.current)
  }, [words.length])

  const getImageStyle = (i) => {
    const rotation = [-8, -3, 3, 8][i]
    const spacing = isMobile ? 60 : 140
    const translateX = i * spacing - (images.length - 1) * spacing / 2
    const translateY = (i % 2 === 0 ? -15 : 15) + (showImages ? 0 : 32)
    
    return {
      transform: `rotate(${rotation}deg) translateX(${translateX}px) translateY(${translateY}px)`,
      zIndex: 4 - i,
      transitionDelay: `${i * 150}ms`
    }
  }

  const getTooltipPosition = (i) => {
    if (i === 0) return 'left-[-140px] top-1/2 -translate-y-1/2'
    if (i === 3) return 'right-[-120px] top-1/2 -translate-y-1/2'
    return 'top-[-60px] left-1/2 -translate-x-1/2'
  }

  return (
    <div className='mb-36 px-4 relative'>
      <div ref={containerRef} className='flex flex-col justify-center items-center min-h-[40vh]'>
        <p className="italic text-sm md:text-xl text-center w-auto md:w-[75%] flex flex-wrap justify-center leading-relaxed">
          {words.map((word, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-300 ease-out ${
                i < visibleWords ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {word}{i < words.length - 1 ? '\u00A0' : ''}
            </span>
          ))}
        </p>
      </div>

      <div className="flex justify-center items-center relative mt-34 mb-48 w-full">
        <div className="relative flex justify-center items-center">
          {images.map(({ src, alt }, i) => (
            <div
              key={i}
              className={`h-38 w-28 md:w-60 md:h-80 rounded-lg shadow-xl border-4 border-white absolute bg-gray-200 group transition-all duration-700 hover:scale-105 hover:z-10 ${
                showImages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={getImageStyle(i)}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-lg"
                onError={e => e.target.src = '/fallback.jpg'}
              />
              <div className={`absolute ${getTooltipPosition(i)} bg-black text-white text-sm px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap`}>
                {alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}