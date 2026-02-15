
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, Calendar, ArrowRight, ChevronRight } from 'lucide-react';
import { WIE_EVENTS, WIE_ACHIEVEMENTS } from '../data';

const CountUp = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    let animationFrameId: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * end));
      if (progress < duration) animationFrameId = requestAnimationFrame(animate);
      else setCount(end);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}</span>;
};

const RevealOnScroll: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={ref}
            className={`transition-all duration-1000 ease-out transform will-change-transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const TypewriterText = () => {
  const words = ["Innovators", "Leaders", "Mentors", "Engineers"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350 + "")));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-[#B5224E] inline-block min-w-[200px]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse text-white">|</span>
    </span>
  );
};

const WIE: React.FC = () => {
  return (
    <div className="w-full font-sans text-[#1A2036] bg-[#FCFFFC] overflow-x-hidden selection:bg-[#B5224E] selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-16 md:pt-0">
         <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2070')" }}>
             <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>
         </div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-12 md:pt-20">
             <div className="max-w-4xl">
                 <div className="inline-block px-4 py-1.5 rounded-full border border-[#B5224E]/50 bg-[#B5224E]/20 text-[#FF8DA1] font-medium text-xs sm:text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <Heart size={14} className="inline mr-2" fill="currentColor"/> Women In Engineering
                 </div>
                 <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                    Empowering <br/>
                    <TypewriterText />
                 </h1>
                 <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed border-l-4 border-[#B5224E] pl-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    IEEE WIE KARE is dedicated to promoting women engineers and scientists, inspiring girls around the world to follow their academic interests in a career in engineering.
                 </p>
                 <div className="flex flex-wrap gap-4 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <Link to="/events" className="px-8 py-4 rounded-full bg-[#B5224E] text-white font-bold text-sm tracking-widest uppercase hover:bg-[#D63E68] transition-all shadow-[0_0_20px_rgba(181,34,78,0.4)]">
                        Explore Events
                    </Link>
                    <Link to="/contact" className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-[#1A2036] transition-all">
                        Join Community
                    </Link>
                 </div>
                 {/* Floating Stats */}
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-white/10 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#B5224E]"><Users size={20}/></div>
                        <div><div className="text-2xl font-bold text-white"><CountUp end={200}/>+</div><div className="text-[10px] text-gray-400 uppercase">Members</div></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#B5224E]"><Award size={20}/></div>
                        <div><div className="text-2xl font-bold text-white"><CountUp end={15}/>+</div><div className="text-[10px] text-gray-400 uppercase">Awards</div></div>
                    </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 md:py-24 relative bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            <div className="flex justify-between items-end mb-12 md:mb-16">
                <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A2036] mb-2">Upcoming Events</h2>
                <div className="h-1.5 w-24 bg-[#B5224E] rounded-full mt-4"></div>
                </div>
                <Link to="/events" className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gray-200 text-[#1A2036] hover:bg-[#B5224E] hover:text-white transition-colors hover:rotate-45 duration-300">
                <ChevronRight size={20} className="md:w-6 md:h-6" />
                </Link>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {WIE_EVENTS.slice(0, 3).map((event, index) => (
              <RevealOnScroll key={event.id} delay={index * 150}>
                  <div className="bg-white rounded-[24px] shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-100 hover:-translate-y-2 will-change-transform h-full flex flex-col">
                    <div className="relative h-48 md:h-56 overflow-hidden">
                    <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async" 
                    />
                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide text-white bg-black/50 backdrop-blur-md border border-white/20">
                            {event.status}
                        </span>
                    </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs font-bold text-[#B5224E] uppercase tracking-wider mb-2">{event.category}</div>
                    <h3 className="text-lg md:text-xl font-bold text-[#1A2036] mb-3 line-clamp-2 group-hover:text-[#B5224E] transition-colors">{event.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-6 gap-4">
                        <span className="flex items-center gap-2"><Calendar size={14} className="text-[#B5224E]"/> {event.date}</span>
                    </div>
                    <Link to="/events" className="mt-auto block w-full text-center py-3 rounded-xl bg-gray-50 text-[#1A2036] text-sm font-bold uppercase tracking-wider hover:bg-[#B5224E] hover:text-white transition-colors group-hover:shadow-md">
                        View Details
                    </Link>
                    </div>
                  </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Spotlight */}
      <section className="py-16 md:py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <RevealOnScroll>
            {/* Dark Card */}
            <div className="bg-[#1A2036] rounded-[24px] md:rounded-[40px] p-8 md:p-12 lg:p-20 relative overflow-hidden shadow-2xl border border-gray-700">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
                            Hall of <span className="text-[#B5224E]">Fame</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed font-light">
                            Our WIE affinity group has been recognized for its outstanding contributions to empowering women in technology.
                        </p>
                        <Link to="/gallery" className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#B5224E] text-white font-bold text-sm tracking-widest uppercase inline-flex items-center gap-3 hover:bg-white hover:text-[#B5224E] hover:scale-105 transition-all shadow-[0_0_20px_rgba(181,34,78,0.4)]">
                            View Gallery <ArrowRight size={20} />
                        </Link>
                    </div>
                    
                    {/* Achievement Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {WIE_ACHIEVEMENTS.slice(0,4).map((ach, i) => (
                            <div key={ach.id} className="bg-[#FAFAFA] p-6 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-12 h-12 bg-[#B5224E]/10 rounded-bl-full -mr-2 -mt-2 transition-all group-hover:bg-[#B5224E] group-hover:scale-150"></div>
                                
                                <div className="text-3xl md:text-4xl mb-4 transform group-hover:scale-110 transition-transform relative z-10">🏆</div>
                                <div className="font-bold text-sm md:text-base mb-2 text-[#1A2036] line-clamp-2 leading-tight relative z-10 group-hover:text-black">{ach.title}</div>
                                <div className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold uppercase text-gray-500 tracking-wider group-hover:bg-[#1A2036] group-hover:text-white transition-colors relative z-10">{ach.level}</div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B5224E] opacity-5 rounded-full filter blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#000] opacity-20 rounded-full filter blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default WIE;
