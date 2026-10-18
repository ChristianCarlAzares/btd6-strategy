import React, { useState } from 'react';
import { Volume2, VolumeX, ShieldAlert, Sparkles, Menu, X, Compass, Crosshair, Calculator, Layers, Flame, TrendingUp, Map } from 'lucide-react';
import { soundManager } from '../utils/sound';

interface NavbarProps {
  popCount: number;
  onPopBonus: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ popCount, onPopBonus }) => {
  const [isMuted, setIsMuted] = useState<boolean>(soundManager.getMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { name: 'Meta Spotlight', href: '#hero', icon: Sparkles },
    { name: 'Efficiency', href: '#efficiency', icon: TrendingUp },
    { name: 'Strategy Vault', href: '#strategies', icon: Compass },
    { name: 'Map Atlas', href: '#map-atlas', icon: Map },
    { name: 'Danger Rounds', href: '#round-guide', icon: ShieldAlert },
    { name: 'CHIMPS Planner', href: '#chimps-calc', icon: Calculator },
    { name: 'Tower Synergies', href: '#tower-synergies', icon: Layers },
    { name: 'Boss Events', href: '#boss-events', icon: Flame },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#120e0a]/95 backdrop-blur-md border-b border-[#3d2e1b] shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <a
              href="#hero"
              onClick={() => soundManager.playTap()}
              className="group flex items-center space-x-3 focus:outline-none"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full bg-[#1e1710] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  {/* BTD6 Dart / Monkey Icon SVG */}
                  <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="14" fill="#fbbf24" fillOpacity="0.15" />
                    <path d="M20 6L25 18H15L20 6Z" fill="#ef4444" stroke="#fca5a5" strokeWidth="1" />
                    <circle cx="20" cy="24" r="8" fill="#78350f" stroke="#b45309" strokeWidth="1.5" />
                    <circle cx="17" cy="22" r="1.5" fill="#fef08a" />
                    <circle cx="23" cy="22" r="1.5" fill="#fef08a" />
                    <path d="M18 27C19 28 21 28 22 27" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="absolute -bottom-1 -right-1 text-[9px] font-bold bg-amber-500 text-stone-900 px-1 rounded-tl font-mono-code">6</span>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-game text-xl sm:text-2xl font-bold tracking-wide text-amber-400 group-hover:text-amber-300 transition-colors">
                    STRATEX<span className="text-emerald-400">6</span>
                  </span>
                  <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-700/60 font-mono-code">
                    v57.2 LIVE
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 font-medium hidden sm:block tracking-wider uppercase">
                  BTD6 Meta Strategy Companion
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => soundManager.playTap()}
                className="px-3 py-1.5 rounded-lg text-sm font-semibold text-stone-300 hover:text-amber-400 hover:bg-[#251d13] transition-all flex items-center space-x-1.5 border border-transparent hover:border-amber-500/30"
              >
                <item.icon className="w-4 h-4 text-amber-500/80" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Pop Counter Easter Egg Button */}
            <button
              onClick={() => {
                soundManager.playPop(1.2);
                onPopBonus();
              }}
              title="Click to pop a bloon!"
              className="flex items-center space-x-1.5 bg-[#251d13] hover:bg-[#34291a] border border-[#523d24] hover:border-amber-500/60 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-stone-200 transition-all cursor-pointer active:scale-95 group"
            >
              <div className="w-4 h-4 rounded-full bg-red-500 group-hover:animate-bounce flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                🎈
              </div>
              <span className="font-mono-code text-amber-400 font-bold">{popCount}</span>
              <span className="text-stone-400 hidden sm:inline text-[11px]">Pops</span>
            </button>

            {/* SFX Mute/Unmute */}
            <button
              onClick={handleToggleSound}
              title={isMuted ? "Enable Bloon Pop Sound FX" : "Mute Sound FX"}
              className="p-2 rounded-lg bg-[#251d13] border border-[#523d24] text-stone-300 hover:text-amber-400 hover:border-amber-500/60 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle sound effects"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-stone-500" />
              ) : (
                <Volume2 className="w-5 h-5 text-amber-400 animate-pulse" />
              )}
            </button>

            {/* Quick Link to Top Strategy */}
            <a
              href="#strategies"
              onClick={() => soundManager.playTap()}
              className="hidden sm:inline-flex items-center space-x-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-game font-bold text-sm px-3.5 py-1.5 rounded-lg shadow-md hover:shadow-amber-500/25 transition-all active:scale-95 cursor-pointer"
            >
              <Crosshair className="w-4 h-4" />
              <span>Browse the Vault</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#251d13] border border-[#523d24] text-stone-300 hover:text-amber-400 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#18130c] border-b border-[#3d2e1b] px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#302415] mb-2">
            <span className="text-xs font-mono-code text-stone-400">NAVIGATE GUIDE</span>
            <span className="text-xs font-mono-code text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
              Patch v57.2 Live
            </span>
          </div>
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                soundManager.playTap();
                setMobileMenuOpen(false);
              }}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-semibold text-stone-200 hover:text-amber-400 hover:bg-[#251d13] transition-colors"
            >
              <item.icon className="w-5 h-5 text-amber-500" />
              <span>{item.name}</span>
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#strategies"
              onClick={() => {
                soundManager.playTap();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-game font-bold py-2.5 rounded-lg shadow-md"
            >
              <Crosshair className="w-5 h-5" />
              <span>Explore Strategy Vault</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
