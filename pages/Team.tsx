import React from 'react';
import { TEAM_MEMBERS } from '../data';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  
  const sections = [
    { title: 'Faculty Coordinators', filter: (m: TeamMember) => m.role.includes('Advisor') },
    { title: 'Executive Committee', filter: (m: TeamMember) => !m.role.includes('Advisor') && !m.domain },
    { title: 'Web Developers', filter: (m: TeamMember) => m.domain === 'Web Development' },
    { title: 'Graphic Designers', filter: (m: TeamMember) => m.domain === 'Graphic Design' },
    { title: 'Public Relations Team', filter: (m: TeamMember) => m.domain === 'Public Relations' },
    { title: 'Content Writers', filter: (m: TeamMember) => m.domain === 'Content Writing' },
    { title: 'Event Coordinators', filter: (m: TeamMember) => m.domain === 'Event Management' },
    { title: 'Media Team', filter: (m: TeamMember) => m.domain === 'Media' },
    { title: 'Technical Team', filter: (m: TeamMember) => m.domain === 'Technical' || m.domain === 'AI/ML' },
  ];

  const MemberCard = ({ member }: { member: TeamMember }) => (
    <div className="group relative w-full aspect-[3/4] rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] cursor-pointer">
      {/* Background Image */}
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />
      
      {/* Overlay - Always visible bottom gradient with glassmorphism feel */}
      <div className="absolute inset-x-0 bottom-0 pt-16 pb-6 px-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end">
         
         <div className="flex items-end justify-between w-full">
             <div className="flex flex-col">
                 <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-1 drop-shadow-md">
                     {member.name}
                 </h3>
                 <p className="text-gray-300 text-[10px] md:text-xs font-semibold uppercase tracking-widest drop-shadow-sm">
                     {member.role}
                 </p>
             </div>
             
             {/* Pill Button */}
             <div className="bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider hover:bg-[#FFB347] transition-colors shadow-lg transform group-hover:scale-105">
                 Details
             </div>
         </div>

      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-3xl md:text-5xl font-black mb-6 text-black tracking-tight leading-tight">
                Meet the Minds Behind the Magic
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg px-4 leading-relaxed">
                A diverse team of creators, coders, designers, and innovators working together to bring ideas to life
            </p>
        </div>

        {/* Sections */}
        <div className="space-y-20 md:space-y-28">
          {sections.map((section) => {
             const members = TEAM_MEMBERS.filter(section.filter);
             if (members.length === 0) return null;

             return (
               <div key={section.title} className="flex flex-col items-center">
                  {/* Section Title */}
                  <h2 className="text-xl md:text-2xl font-bold mb-10 md:mb-12 text-center text-[#1F2937] uppercase tracking-wide relative inline-block">
                    {section.title}
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E6007E] rounded-full transform scale-x-75 origin-center"></span>
                  </h2>
                  
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl px-4 justify-items-center">
                    {members.map(member => (
                       <div key={member.id} className="w-full max-w-[280px]">
                          <MemberCard member={member} />
                       </div>
                    ))}
                  </div>
               </div>
             );
          })}
        </div>

      </div>
    </div>
  );
};

export default Team;