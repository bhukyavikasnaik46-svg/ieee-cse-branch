
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { WIE_TEAM } from '../../data';
import { TeamMember } from '../../types';

const WIETeam: React.FC = () => {
  
  const sections = [
    { title: 'Faculty Coordinators', filter: (m: TeamMember) => m.role.includes('Coordinator') },
    { title: 'Executive Committee', filter: (m: TeamMember) => m.domain === 'ExCom' },
    { title: 'Web Developers', filter: (m: TeamMember) => m.domain === 'Web Development' },
    { title: 'Graphic Designers', filter: (m: TeamMember) => m.domain === 'Graphic Design' },
    { title: 'Public Relations Team', filter: (m: TeamMember) => m.domain === 'Public Relations' },
    { title: 'Content Writers', filter: (m: TeamMember) => m.domain === 'Content Writing' },
    { title: 'Event Coordinators', filter: (m: TeamMember) => m.domain === 'Event Management' },
    { title: 'Media Team', filter: (m: TeamMember) => m.domain === 'Media' },
    { title: 'Technical Team', filter: (m: TeamMember) => m.domain === 'Technical' },
  ];

  const MemberCard = ({ member }: { member: TeamMember }) => (
    <div className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default bg-gray-100">
      {/* Background Image */}
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:blur-[3px]"
        loading="lazy"
        decoding="async"
      />
      
      {/* Initial State - Bottom Bar */}
      <div className="absolute inset-x-0 bottom-0 p-4 z-10 transition-all duration-300 transform translate-y-0 group-hover:translate-y-full opacity-100 group-hover:opacity-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative flex justify-between items-end">
             <div className="text-left">
                <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">{member.name}</h3>
                <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest mt-1">{member.role}</p>
             </div>
             <button className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#B5224E] text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-lg">
                Details
             </button>
          </div>
      </div>

      {/* Hover State - Glass Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
         <div className="w-[85%] bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl transform translate-y-10 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out flex flex-col gap-4 text-left relative overflow-hidden">
            
            {/* Decorative Shine */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

            <div>
                <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest mb-1">Name</p>
                <h3 className="text-white font-bold text-xl leading-tight">{member.name}</h3>
            </div>
            
            <div>
                <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest mb-1">Role</p>
                <p className="text-[#B5224E] font-bold text-sm bg-white/90 inline-block px-2 py-0.5 rounded-md">{member.role}</p>
            </div>

            <div className="h-px w-full bg-white/20 my-1"></div>

            <p className="text-gray-200 text-xs leading-relaxed font-light">
               Passionate about driving innovation and fostering an inclusive community in technology.
            </p>

            <div className="flex items-center gap-3 pt-2">
                <a href={member.linkedin || "#"} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0077B5] hover:scale-110 transition-all duration-300 border border-white/10">
                    <Linkedin size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#333] hover:scale-110 transition-all duration-300 border border-white/10">
                    <Github size={14} />
                </a>
                 <a href={`mailto:${member.email || '#'}`} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#B5224E] hover:scale-110 transition-all duration-300 border border-white/10">
                    <Mail size={14} />
                </a>
            </div>
         </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white font-sans selection:bg-[#B5224E] selection:text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-3xl md:text-5xl font-black mb-6 text-[#1A2036] tracking-tight leading-tight">
                Meet the <span className="text-[#B5224E]">WIE Leaders</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg px-4 leading-relaxed">
                The passionate women driving change and innovation at WIE KARE.
            </p>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {sections.map((section) => {
             const members = WIE_TEAM.filter(section.filter);
             if (members.length === 0) return null;

             return (
               <div key={section.title} className="flex flex-col items-center w-full">
                  {/* Section Title with Underline */}
                  <div className="mb-10 text-center relative">
                      <h2 className="text-xl md:text-2xl font-bold text-[#1A2036] uppercase tracking-wide">
                        {section.title}
                      </h2>
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#B5224E] rounded-full"></div>
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

export default WIETeam;
