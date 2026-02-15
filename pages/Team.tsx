
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
    <div className="group relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default bg-gray-100">
      {/* Background Image */}
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />
      
      {/* Gradient Overlay - Darker at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end items-center text-center transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
         <h3 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-md tracking-wide">
             {member.name}
         </h3>
         {/* Underline accent */}
         <div className="h-0.5 w-10 bg-[#FFB347] my-2 rounded-full opacity-80 group-hover:w-16 transition-all duration-300"></div>
         <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest drop-shadow-sm mb-2">
             {member.role}
         </p>
      </div>
    </div>
  );

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Sections */}
        <div className="space-y-16">
          {sections.map((section) => {
             const members = TEAM_MEMBERS.filter(section.filter);
             if (members.length === 0) return null;

             return (
               <div key={section.title} className="flex flex-col items-center w-full">
                  {/* Section Title with Underline */}
                  <div className="mb-10 text-center relative">
                      <h2 className="text-xl md:text-2xl font-bold text-[#1F2937] uppercase tracking-wide">
                        {section.title}
                      </h2>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FFB347] rounded-full"></div>
                  </div>
                  
                  {/* Responsive Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl px-2 sm:px-4 justify-items-center">
                    {members.map(member => (
                       <div key={member.id} className="w-full max-w-[260px]">
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
