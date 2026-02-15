
import { Event, TeamMember, Achievement, GalleryItem, Milestone, Announcement, Society } from './types';

export const ASSETS = {
  // Full Logo (horizontal lockup for footer/about)
  IEEE_CS_LOGO: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 450 120'%3E%3Ccircle cx='60' cy='60' r='50' fill='%23FFB347'/%3E%3Cpath d='M52 20h16v80h-16z' fill='white'/%3E%3Cpath d='M60 35c-18 0-30 12-30 30s12 30 30 30 30-12 30-30-12-30-30-30zm0 50c-12 0-20-8-20-20s8-20 20-20 20 8 20 20-8 20-20 20z' fill='white'/%3E%3Ctext x='130' y='50' font-family='Arial, sans-serif' font-weight='900' font-size='42' fill='%23000'%3EIEEE%3C/text%3E%3Ctext x='130' y='90' font-family='Arial, sans-serif' font-weight='bold' font-size='26' fill='%23000' letter-spacing='1'%3ECOMPUTER SOCIETY%3C/text%3E%3C/svg%3E",
  
  // Icon only version for the header
  IEEE_CS_ICON: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23FFB347'/%3E%3Cg fill='white'%3E%3Crect x='44' y='15' width='12' height='70'/%3E%3Cpath d='M50 30c-20 0-30 10-30 20s10 20 30 20c20 0 30-10 30-20s-10-20-30-20zm0 32c-12 0-18-6-18-12s6-12 18-12 18 6 18 12-6 12-18 12z'/%3E%3C/g%3E%3C/svg%3E",

  // WIE Logo - Custom SVG based on user request (Pink styling)
  WIE_LOGO: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 350 120'%3E%3Ctext x='175' y='30' font-family='Arial, sans-serif' font-size='14' fill='%23B5224E' text-anchor='middle' letter-spacing='1'%3EIEEE Women in Engineering%3C/text%3E%3Ctext x='160' y='95' font-family='Brush Script MT, cursive' font-size='70' fill='%23B5224E' text-anchor='end'%3EWie%3C/text%3E%3Ctext x='170' y='95' font-family='Times New Roman, serif' font-weight='bold' font-size='45' fill='%23B5224E' text-anchor='start'%3EKARE%3C/text%3E%3C/svg%3E"
};

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'AI-Powered Hackathon 2025',
    date: '2025-01-05',
    time: '10:00 AM',
    venue: 'Main Auditorium',
    category: 'Hackathon',
    domain: 'AI/ML',
    status: 'LIVE',
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800',
    description: 'Join us for an exhilarating 24-hour hackathon designed to challenge your problem-solving skills using the power of Artificial Intelligence. Teams will compete to build innovative solutions addressing real-world challenges in healthcare, finance, and sustainability. Mentorship will be provided by leading AI experts from top tech companies. This is your chance to network, learn, and win prizes worth ₹50,000!',
    speaker: 'Dr. Alan Turing'
  },
  {
    id: '2',
    title: 'Web Development Bootcamp',
    date: '2025-02-14',
    time: '09:00 AM',
    venue: 'Lab 305',
    category: 'Workshop',
    domain: 'Web Development',
    status: 'OPEN',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
    description: 'Dive deep into modern web development in this intensive 2-day bootcamp. We will cover the complete MERN stack (MongoDB, Express, React, Node.js), starting from the basics of component-based architecture to deploying full-stack applications. Ideal for beginners and intermediate developers looking to solidify their skills. Participants will build a portfolio-ready project by the end of the workshop.',
    speaker: 'Jane Doe'
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals',
    date: '2025-03-18',
    time: '10:00 AM',
    venue: 'Seminar Hall',
    category: 'Workshop',
    domain: 'General',
    status: 'OPEN',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    description: 'Master the art of creating intuitive and aesthetically pleasing digital experiences. This workshop covers the core principles of User Interface (UI) and User Experience (UX) design, including wireframing, prototyping, color theory, and typography. You will learn how to use industry-standard tools like Figma to bring your design ideas to life. No prior design experience is required.',
    speaker: 'Sarah Jenkins'
  },
  {
    id: '4',
    title: 'IoT Future Trends',
    date: '2025-05-05',
    time: '02:00 PM',
    venue: 'Virtual (Zoom)',
    category: 'Webinar',
    domain: 'Hardware/IoT',
    status: 'CLOSING',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    description: 'Explore the transformative potential of the Internet of Things (IoT) in this exclusive webinar. We will discuss emerging trends such as Edge Computing, 5G integration, and AIoT (AI + IoT). Discover how smart cities, connected healthcare, and industrial automation are reshaping our world. The session includes a live Q&A with industry veteran Elon Musk.',
    speaker: 'Elon Musk (Virtual)'
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'Best Student Branch Award',
    level: 'International',
    date: '2024',
    winners: 'Branch Team',
    category: 'Award',
    description: 'Recognized as the most active student branch globally.',
    image: 'https://images.unsplash.com/photo-1565514020176-6c2235b8b337?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'HackMIT Winners',
    level: 'International',
    date: '2023',
    winners: 'Team Alpha',
    category: 'Competition',
    description: 'First place in the sustainability track at HackMIT.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  // Faculty
  { id: 'f1', name: 'Dr. Jayalakshmi', role: 'Faculty Advisor', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
  { id: 'f2', name: 'Dr. Ying Yue', role: 'Faculty Advisor', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
  { id: 'f3', name: 'Prof. John Doe', role: 'Faculty Advisor', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
  
  // ExCom
  { id: 'e1', name: 'Alice Johnson', role: 'Chairperson', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
  { id: 'e2', name: 'Bob Wilson', role: 'Vice Chair', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { id: 'e3', name: 'Charlie Brown', role: 'Secretary', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
  { id: 'e4', name: 'Diana Prince', role: 'Treasurer', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' },

  // Web Developers
  { id: 'w1', name: 'Evan Wright', role: 'Web Lead', domain: 'Web Development', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400', isLead: true },
  { id: 'w2', name: 'Fiona Green', role: 'Member', domain: 'Web Development', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
  { id: 'w3', name: 'George Hall', role: 'Member', domain: 'Web Development', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' },
  
  // Graphic Designers
  { id: 'g1', name: 'Hannah Lee', role: 'Lead', domain: 'Graphic Design', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400', isLead: true },
  { id: 'g2', name: 'Ian Scott', role: 'Co-Lead', domain: 'Graphic Design', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=400' },
  { id: 'g3', name: 'Julia Roberts', role: 'Member', domain: 'Graphic Design', image: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&q=80&w=400' },

  // Public Relations
  { id: 'pr1', name: 'Kevin Durant', role: 'Lead', domain: 'Public Relations', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400', isLead: true },
  { id: 'pr2', name: 'Laura Croft', role: 'Member', domain: 'Public Relations', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' },
  { id: 'pr3', name: 'Mike Ross', role: 'Member', domain: 'Public Relations', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },

  // Content Writers
  { id: 'cw1', name: 'Nina Simone', role: 'Lead', domain: 'Content Writing', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400', isLead: true },
  { id: 'cw2', name: 'Oscar Wilde', role: 'Co-Lead', domain: 'Content Writing', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' },
  { id: 'cw3', name: 'Pam Beesly', role: 'Member', domain: 'Content Writing', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },

  // Event Coordinators
  { id: 'ec1', name: 'Quentin T.', role: 'Lead', domain: 'Event Management', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400', isLead: true },
  { id: 'ec2', name: 'Rachel Green', role: 'Co-Lead', domain: 'Event Management', image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?auto=format&fit=crop&q=80&w=400' },
  { id: 'ec3', name: 'Steve Jobs', role: 'Member', domain: 'Event Management', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400' },

  // Media Team
  { id: 'mt1', name: 'Tom Holland', role: 'Lead', domain: 'Media', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400', isLead: true },
  { id: 'mt2', name: 'Ursula K.', role: 'Co-Lead', domain: 'Media', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400' },
  { id: 'mt3', name: 'Victor H.', role: 'Member', domain: 'Media', image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=400' },

  // Technical Team
  { id: 'tt1', name: 'Will Smith', role: 'Lead', domain: 'Technical', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400', isLead: true },
  { id: 'tt2', name: 'Xena W.', role: 'Co-Lead', domain: 'Technical', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400' },
  { id: 'tt3', name: 'Yara S.', role: 'Member', domain: 'Technical', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800', caption: 'Orientation Day 2024', category: 'Social' },
  { id: '2', src: 'https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=800', caption: 'Hackathon Finals', category: 'Hackathons' },
  { id: '3', src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800', caption: 'Web Dev Workshop', category: 'Workshops' },
  { id: '4', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800', caption: 'Award Ceremony', category: 'Celebrations' },
];

export const ROBOTICS_GALLERY: GalleryItem[] = [
    { id: 'r1', src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800', caption: 'System Design', category: 'Workshop' },
    { id: 'r2', src: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=800', caption: 'Assembly', category: 'Workshop' },
    { id: 'r3', src: 'https://images.unsplash.com/photo-1565514020176-6c2235b8b337?auto=format&fit=crop&q=80&w=800', caption: 'Testing', category: 'Workshop' },
    { id: 'r4', src: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?auto=format&fit=crop&q=80&w=800', caption: 'Final Demo', category: 'Workshop' },
];

export const EVENT2_GALLERY: GalleryItem[] = [
    { id: 'e1', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800', caption: 'Opening', category: 'Event' },
    { id: 'e2', src: 'https://images.unsplash.com/photo-1475721027767-p743028df60?auto=format&fit=crop&q=80&w=800', caption: 'Keynote', category: 'Event' },
    { id: 'e3', src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800', caption: 'Audience', category: 'Event' },
    { id: 'e4', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800', caption: 'Closing', category: 'Event' },
];

export const MILESTONES: Milestone[] = [
  { year: 2018, title: 'Chapter Established', description: 'Founded with 20 members.', icon: '📍' },
  { year: 2020, title: 'Best Student Branch', description: 'Regional award winner.', icon: '🏆' },
  { year: 2022, title: 'First Int. Conf.', description: 'Hosted IEEE conference.', icon: '🌏' },
  { year: 2023, title: '500+ Members', description: 'Reached membership milestone.', icon: '🚀' },
  { year: 2025, title: 'Current Era', description: 'Innovating for the future.', icon: '✨' },
];

export const ANNOUNCEMENTS: Announcement[] = [
  { 
    id: '1', 
    date: '31/10/25', 
    event: 'Event: IEEE CS PROJECT EXPO 2025',
    title: 'IEEE CS Project Expo 2025 - Build Quest',
    fullDate: 'October 31 & November 01, 2025',
    prizes: '1st - ₹4,000 | 2nd - ₹2,000 | 3rd - ₹1,000',
    link: 'https://vintra.kalasalingam.ac.in/',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '2', 
    date: '24/11/25', 
    event: 'Event: IEEE Codefest 2025',
    title: 'IEEE Codefest 2025',
    fullDate: 'November 24, 2025',
    prizes: '1st - ₹5,000 | 2nd - ₹3,000',
    link: '#',
    image: 'https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '3', 
    date: '20/12/25', 
    event: 'Event: IEEE Tech Talk',
    title: 'IEEE Tech Talk Series: Future of AI',
    fullDate: 'December 20, 2025',
    prizes: 'Participation Certificates',
    link: '#',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800'
  },
];

export const SOCIETIES: Society[] = [
  { 
    id: '1', 
    name: 'IEEE Robotics & Automation Society', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_Robotics_and_Automation_Society_logo.png',
    description: 'Fostering the development and application of robotics and automation technologies for the benefit of humanity.',
    link: 'https://www.ieee-ras.org/'
  },
  { 
    id: '2', 
    name: 'IEEE Signal Processing Society', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/IEEE_Signal_Processing_Society_logo.png',
    description: 'The world’s premier association for signal processing engineers and industry professionals.',
    link: 'https://signalprocessingsociety.org/'
  },
  { 
    id: '3', 
    name: 'IEEE', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg',
    description: 'The world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.',
    link: 'https://www.ieee.org/'
  },
  { 
    id: '4', 
    name: 'IEEE WIE KARE', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/IEEE_WIE_Logo.png',
    description: 'A global network of IEEE members and volunteers dedicated to promoting women engineers and scientists.',
    link: 'https://wie.ieee.org/'
  }, 
  { 
    id: '5', 
    name: 'IEEE Computational Intelligence Society', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/IEEE_Computational_Intelligence_Society_logo.png',
    description: 'Focusing on the theory, design, application, and development of biologically and linguistically motivated computational paradigms.',
    link: 'https://cis.ieee.org/'
  },
];

// --- WIE DATA ---

export const WIE_EVENTS: Event[] = [
  {
    id: 'w1', title: 'Women in Tech Summit 2025', date: '2025-03-08', time: '09:00 AM', venue: 'Grand Hall',
    category: 'Conference', domain: 'General', status: 'OPEN', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800',
    description: 'A global gathering of women leaders in technology sharing insights and innovations. Keynote speakers from Google, Microsoft, and Amazon.'
  },
  {
    id: 'w2', title: 'Coding for Her: Web Workshop', date: '2025-04-15', time: '10:00 AM', venue: 'Lab 101',
    category: 'Workshop', domain: 'Web Development', status: 'OPEN', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
    description: 'An introductory workshop on modern web development tailored for aspiring female developers. Learn HTML, CSS, and React basics.'
  },
  {
    id: 'w3', title: 'Leadership in Engineering', date: '2025-05-20', time: '02:00 PM', venue: 'Virtual',
    category: 'Webinar', domain: 'General', status: 'CLOSING', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    description: 'Discover the secrets to successful leadership in engineering fields from top industry executives. Interactive Q&A session included.'
  }
];

export const WIE_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'w_a1',
    title: 'Best WIE Affinity Group',
    level: 'National',
    date: '2024',
    winners: 'WIE Team',
    category: 'Award',
    description: 'Awarded for outstanding contribution to empowering women in engineering across the region.',
    image: 'https://images.unsplash.com/photo-1565514020176-6c2235b8b337?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'w_a2',
    title: 'Star Supporter Award',
    level: 'Regional',
    date: '2023',
    winners: 'WIE KARE',
    category: 'Recognition',
    description: 'Recognized for consistent support and mentorship programs for female engineering students.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  }
];

export const WIE_ANNOUNCEMENTS: Announcement[] = [
  { 
    id: 'wa1', 
    date: '15/03/25', 
    event: 'Event: Women in Tech Summit',
    title: 'Global Women in Tech Summit 2025',
    fullDate: 'March 15, 2025',
    prizes: 'Networking Opportunities',
    link: '#',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'wa2', 
    date: '22/04/25', 
    event: 'Workshop: She Codes',
    title: 'She Codes: Python Bootcamp',
    fullDate: 'April 22, 2025',
    prizes: 'Certificates & Swag',
    link: '#',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800'
  }
];

export const WIE_INITIATIVES: Society[] = [
    {
        id: 'wi1',
        name: 'STAR Program',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/IEEE_WIE_Logo.png', // Placeholder icon
        description: 'Student-Teacher and Research Engineer/Scientist (STAR) Program to mentor students.',
        link: 'https://wie.ieee.org/star/'
    },
    {
        id: 'wi2',
        name: 'WIE Summit',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/IEEE_WIE_Logo.png', // Placeholder
        description: 'Annual summits gathering women leaders to share insights and foster networking.',
        link: '#'
    },
    {
        id: 'wi3',
        name: 'Mentorship',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/IEEE_WIE_Logo.png', // Placeholder
        description: 'Connecting students with professional mentors in the industry for career guidance.',
        link: '#'
    }
];

export const WIE_TEAM: TeamMember[] = [
  // Faculty
  { id: 'wf1', name: 'Dr. Sarah Connor', role: 'Faculty Coordinator', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', domain: 'Faculty' },
  { id: 'wf2', name: 'Prof. Ellen Ripley', role: 'Faculty Coordinator', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400', domain: 'Faculty' },
  { id: 'wf3', name: 'Dr. Dana Scully', role: 'Faculty Coordinator', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400', domain: 'Faculty' },

  // ExCom
  { id: 'we1', name: 'Emily Clarke', role: 'Chairperson', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400', domain: 'ExCom' },
  { id: 'we2', name: 'Jessica Pearson', role: 'Vice Chair', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400', domain: 'ExCom' },
  { id: 'we3', name: 'Amanda Waller', role: 'Secretary', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400', domain: 'ExCom' },

  // Web Devs
  { id: 'ww1', name: 'Grace Hopper', role: 'Web Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400', domain: 'Web Development' },
  { id: 'ww2', name: 'Ada Lovelace', role: 'Member', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400', domain: 'Web Development' },
  { id: 'ww3', name: 'Margaret H.', role: 'Member', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400', domain: 'Web Development' },

  // Graphic Designers
  { id: 'wg1', name: 'Frida Kahlo', role: 'Design Lead', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400', domain: 'Graphic Design' },
  { id: 'wg2', name: 'Georgia O.', role: 'Member', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=400', domain: 'Graphic Design' },
  { id: 'wg3', name: 'Yayoi K.', role: 'Member', image: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&q=80&w=400', domain: 'Graphic Design' },
  
  // PR
  { id: 'wp1', name: 'Oprah W.', role: 'PR Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400', domain: 'Public Relations' },
  { id: 'wp2', name: 'Ellen D.', role: 'Member', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400', domain: 'Public Relations' },
  { id: 'wp3', name: 'Tyra B.', role: 'Member', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400', domain: 'Public Relations' },

  // Content
  { id: 'wc1', name: 'Jane Austen', role: 'Content Lead', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400', domain: 'Content Writing' },
  { id: 'wc2', name: 'Virginia W.', role: 'Member', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400', domain: 'Content Writing' },
  { id: 'wc3', name: 'Maya A.', role: 'Member', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400', domain: 'Content Writing' },

  // Events
  { id: 'wev1', name: 'Malala Y.', role: 'Event Lead', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400', domain: 'Event Management' },
  { id: 'wev2', name: 'Greta T.', role: 'Member', image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?auto=format&fit=crop&q=80&w=400', domain: 'Event Management' },

  // Media
  { id: 'wm1', name: 'Annie L.', role: 'Media Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400', domain: 'Media' },
  { id: 'wm2', name: 'Dorothea L.', role: 'Member', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400', domain: 'Media' },
  { id: 'wm3', name: 'Lee Miller', role: 'Member', image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=400', domain: 'Media' },

  // Technical
  { id: 'wt1', name: 'Hedy Lamarr', role: 'Tech Lead', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400', domain: 'Technical' },
  { id: 'wt2', name: 'Katherine J.', role: 'Member', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400', domain: 'Technical' },
  { id: 'wt3', name: 'Mary Jackson', role: 'Member', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400', domain: 'Technical' },
];

export const WIE_GALLERY: GalleryItem[] = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1529070538774-1843cb3e60b6?auto=format&fit=crop&q=80&w=800', caption: 'WIE Summit 2024', category: 'Events' },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800', caption: 'Networking Meetup', category: 'Social' },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800', caption: 'Hackathon Winners', category: 'Awards' },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', caption: 'Mentorship Session', category: 'Workshop' },
];
