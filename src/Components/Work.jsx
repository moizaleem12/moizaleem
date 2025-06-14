import { useState, useRef, useLayoutEffect } from "react";
import { data } from "../data";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursor } from "../App";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const { setIsHoveringWorkCard } = useCursor();

  const stickyContainerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const currentProjectRef = useRef(0);

  const current = data[currentProjectIndex] || data[0];

  useLayoutEffect(() => {
    if (!stickyContainerRef.current || !data.length) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.set([imageRef.current, contentRef.current], { opacity: 1, y: 0 });

      const scrollDistance = Math.max(data.length * 100, 400);

      gsap.timeline({
        scrollTrigger: {
          trigger: stickyContainerRef.current,
          start: "top top",
          end: `+=${scrollDistance}px`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const newIndex = Math.min(
              Math.floor(self.progress * data.length),
              data.length - 1
            );
            if (newIndex !== currentProjectRef.current) {
              currentProjectRef.current = newIndex;
              gsap
                .timeline()
                .to([imageRef.current, contentRef.current], {
                  opacity: 0,
                  y: 20,
                  duration: 0.3,
                  ease: "power2.inOut",
                })
                .call(() => setCurrentProjectIndex(newIndex))
                .to([imageRef.current, contentRef.current], {
                  opacity: 1,
                  y: 0,
                  duration: 0.4,
                  ease: "power2.out",
                });
            }
          },
        },
      });
    }, stickyContainerRef);

    return () => ctx.revert();
  }, []);

  if (!current) return <div>Loading...</div>;

  return (
    <div className="relative my-36">
      {/* Header */}
      <div className="flex items-center justify-between px-4 z-10">
        <div>
          <h2 className="font-semibold text-xl md:text-3xl">PORTFOLIO</h2>
          <p className="text-gray-500 text-sm md:text-base">Explore my projects</p>
        </div>
      </div>

      {/* Sticky Section */}
      <div
        className="h-screen flex items-center justify-center bg-gradient-to-br relative work-sticky-section"
        ref={stickyContainerRef}
        onMouseEnter={() => setIsHoveringWorkCard(true)}
        onMouseLeave={() => setIsHoveringWorkCard(false)}
      >
        <div className="max-w-6xl px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center work-project-card">
            {/* Image */}
            <div className="relative" ref={imageRef}>
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                {current.image ? (
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-auto h-58 md:h-[500px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[400px] lg:h-[500px] bg-gray-300 flex items-center justify-center text-gray-600">
                    <p>Network Error</p>
                  </div>
                )}
              </div>
              {/* Removed project index display */}
            </div>

            {/* Content */}
            <div className="space-y-6 flex flex-col md:block " ref={contentRef}>
              <div className="flex items-center justify-between md:flex-col md:items-start">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight md:order-2">
                  {current.name}
                </h2>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full md:order-1 md:mb-2">
                  {current.category || "Project"}
                </span>
              </div>

              <p className="textbase md:text-lg  text-gray-700 leading-relaxed">
                {current.description}
              </p>
              {current.technologies && (
                <div className="flex flex-wrap gap-2">
                  {current.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <Link to={`/project/${currentProjectIndex}`}>
                <div className="inline-flex items-center gap-3  text-black cursor-pointer px-3 py-2 border rounded-full hover:bg-black  hover:text-white transition-all duration-300 group shadow-lg hover:shadow-xl">
                  <span className="font-semibold">View Project</span>
                  <svg
                    className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {data.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentProjectIndex ? "bg-black w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
