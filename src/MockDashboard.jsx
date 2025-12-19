import React from 'react';

// The Platinum Portal: Professional, Platinum, Champagne, Glowing
export default function MockDashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex items-center justify-center p-6 overflow-hidden" 
         style={{ fontFamily: "'Century Gothic', sans-serif" }}>
      
      <div className="max-w-6xl w-full text-center">
        
        {/* Header Section */}
        <header className="mb-16">
          <p className="text-[#c5a367] tracking-[0.3em] uppercase text-xs font-bold mb-4">
            Smart Service System • Resident Engagement Programs • Community Outreach Initiatives  
          </p>
          <div className="h-[1px] w-1/3 mx-auto bg-gradient-to-r from-transparent via-[#c5a367] to-transparent opacity-60 mb-8" />
          <h1 className="text-5xl md:text-6xl font-light text-white tracking-tight shadow-sm">
            Service is Happening.
          </h1>
        </header>

        {/* The 3 Pillars - Glowing Shadow Boxes */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          
          {/* Pillar 1: Strategic Asset Refresh (The Wolf Pack Engine) */}
          <div className="bg-[#1a1a1a]/40 border border-[#c5a367]/20 p-8 rounded-2xl backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(197,163,103,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(197,163,103,0.15)] transition-all duration-500 group">
            <h2 className="text-[#c5a367] text-lg font-bold uppercase tracking-widest mb-4 group-hover:text-white transition-colors">
              1. Strategic Asset Refresh
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Our proprietary <strong className="text-white italic">"Soft Bid"</strong> flow automates the space between maintenance and repositioning. We provide the owners and operators of real estate assets with a seamless, tactical engine for make-readies, repairs, and renovations that is customized with a vendor-centric operating system.
            </p>
          </div>

          {/* Pillar 2: Inclusive Communities */}
          <div className="bg-[#1a1a1a]/40 border border-[#c5a367]/20 p-8 rounded-2xl backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(197,163,103,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(197,163,103,0.15)] transition-all duration-500 group">
            <h2 className="text-[#c5a367] text-lg font-bold uppercase tracking-widest mb-4 group-hover:text-white transition-colors">
              2. Inclusive Communities
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              <strong className="text-white">Turning Doors into Neighbors.</strong> We build brand cheerleaders through a hybrid engagement model delivered virtually, on-site, or at community amenity centers. By connecting residents through gaming, sports, arts, and entertainment, we transform residents into a vibrant, loyal community members.
            </p>
          </div>

          {/* Pillar 3: Collective Impact */}
          <div className="bg-[#1a1a1a]/40 border border-[#c5a367]/20 p-8 rounded-2xl backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(197,163,103,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(197,163,103,0.15)] transition-all duration-500 group">
            <h2 className="text-[#c5a367] text-lg font-bold uppercase tracking-widest mb-4 group-hover:text-white transition-colors">
              3. Collective Impact Initiatives
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              <strong className="text-white">Growth through Symbiosis.</strong> Retention is rooted in respect. When management, employees, and vendors unite for local service projects, it creates a symbiotic cycle of community awareness and growth that defines the nurturing property standard.
            </p>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-24 opacity-30">
          <p className="text-[10px] tracking-[0.2em] uppercase">
            [Launching Soon] API-Friendly • Modern Architecture • Data-Secured
          </p>
        </footer>
        
      </div>
    </div>
  );
}