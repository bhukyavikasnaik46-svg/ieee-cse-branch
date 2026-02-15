import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, User, Phone, MessageSquare, Send, Twitter, Facebook } from 'lucide-react';
import { ASSETS } from '../../data';

const WIEContact: React.FC = () => {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', contact: '', message: '' });

  return (
    <div className="min-h-screen bg-[#E8ECF0] flex items-center justify-center font-sans px-4 md:px-8 pt-24 pb-12 md:pt-44 md:pb-20 selection:bg-[#B5224E] selection:text-white">
      <div className="w-full max-w-6xl bg-white rounded-[30px] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-0 lg:min-h-[700px] animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Left Side - Dark Panel */}
        <div className="lg:w-2/5 bg-[#1A2036] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden min-h-[300px] lg:min-h-auto">
             {/* Background Gradient/Texture */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#1A2036] to-black opacity-95"></div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#B5224E] rounded-full filter blur-[100px] opacity-30 translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full filter blur-[100px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>

             <div className="relative z-10">
                {/* Brand Text */}
                <div className="mb-8 md:mb-16 flex items-center gap-4">
                    <img src={ASSETS.WIE_LOGO} alt="IEEE WIE Logo" className="h-12 w-auto object-contain brightness-0 invert" />
                </div>

                {/* Welcome Text */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        Empower. <br/>
                        <span className="text-[#B5224E]">Innovate. Inspire.</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-sm">
                        We're here to support you on your engineering journey. <br/>
                        Reach out to us for collaborations or to join our network.
                    </p>
                </div>
             </div>

             {/* Social Icons */}
             <div className="relative z-10 mt-12 hidden lg:block">
                 <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Follow us on</p>
                 <div className="flex gap-4">
                     {[
                         { icon: <Facebook size={20} />, href: "#" },
                         { icon: <Twitter size={20} />, href: "#" },
                         { icon: <Linkedin size={20} />, href: "#" },
                         { icon: <Instagram size={20} />, href: "#" }
                     ].map((item, idx) => (
                         <a 
                            key={idx} 
                            href={item.href}
                            className="w-10 h-10 rounded-full bg-[#B5224E] text-white flex items-center justify-center hover:bg-white hover:text-[#B5224E] transition-all duration-300 shadow-lg hover:-translate-y-1"
                         >
                             {item.icon}
                         </a>
                     ))}
                 </div>
             </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-3/5 bg-white p-6 md:p-12 lg:p-16 flex flex-col justify-center relative">
            <div className="max-w-xl mx-auto w-full">
                
                <div className="mb-8 md:mb-10 relative">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#1A2036] inline-block relative z-10">
                        Get in Touch
                    </h1>
                    <div className="h-1.5 w-16 bg-[#B5224E] rounded-full mt-2"></div>
                </div>

                <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {/* Name Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="group">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1">First Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#B5224E] transition-colors">
                                    <User size={18} />
                                </div>
                                <input 
                                    type="text" 
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B5224E]/20 focus:border-[#B5224E] transition-all text-sm font-medium text-gray-700"
                                    placeholder="Jane"
                                    value={formState.firstName}
                                    onChange={e => setFormState({...formState, firstName: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="group">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1">Last Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#B5224E] transition-colors">
                                    <User size={18} />
                                </div>
                                <input 
                                    type="text" 
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B5224E]/20 focus:border-[#B5224E] transition-all text-sm font-medium text-gray-700"
                                    placeholder="Doe"
                                    value={formState.lastName}
                                    onChange={e => setFormState({...formState, lastName: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#B5224E] transition-colors">
                                <Mail size={18} />
                            </div>
                            <input 
                                type="email" 
                                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B5224E]/20 focus:border-[#B5224E] transition-all text-sm font-medium text-gray-700"
                                placeholder="jane@example.com"
                                value={formState.email}
                                onChange={e => setFormState({...formState, email: e.target.value})}
                            />
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1">Contact Number</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#B5224E] transition-colors">
                                <Phone size={18} />
                            </div>
                            <input 
                                type="tel" 
                                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B5224E]/20 focus:border-[#B5224E] transition-all text-sm font-medium text-gray-700"
                                placeholder="+91 98765 43210"
                                value={formState.contact}
                                onChange={e => setFormState({...formState, contact: e.target.value})}
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 ml-1">Message</label>
                        <div className="relative">
                            <div className="absolute top-3 left-4 pointer-events-none text-gray-400 group-focus-within:text-[#B5224E] transition-colors">
                                <MessageSquare size={18} />
                            </div>
                            <textarea 
                                rows={4}
                                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B5224E]/20 focus:border-[#B5224E] transition-all text-sm font-medium text-gray-700 resize-none"
                                placeholder="Type your message..."
                                value={formState.message}
                                onChange={e => setFormState({...formState, message: e.target.value})}
                            ></textarea>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="pt-2 md:pt-4">
                        <button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-[#B5224E] to-[#D63E68] text-white font-bold py-3 md:py-4 rounded-xl shadow-lg shadow-pink-200 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </div>
                </form>

                {/* Mobile Social Icons */}
                <div className="mt-8 lg:hidden">
                     <p className="text-center text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Follow us on</p>
                     <div className="flex justify-center gap-4">
                        {[
                            { icon: <Facebook size={18} />, href: "#" },
                            { icon: <Twitter size={18} />, href: "#" },
                            { icon: <Linkedin size={18} />, href: "#" },
                            { icon: <Instagram size={18} />, href: "#" }
                        ].map((item, idx) => (
                            <a 
                                key={idx} 
                                href={item.href}
                                className="w-8 h-8 rounded-full bg-[#B5224E] text-white flex items-center justify-center hover:bg-[#1A2036] transition-colors shadow-md"
                            >
                                {item.icon}
                            </a>
                        ))}
                     </div>
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default WIEContact;