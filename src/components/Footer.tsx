import React from 'react';
import { ChevronUp, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageId } from '../types/navigation';
import { soundManager } from '../utils/sound';

interface FooterProps {
  popCount: number;
  onPopBonus: () => void;
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ popCount, onPopBonus, activePage, onNavigate }) => {
  const scrollToTop = () => {
    soundManager.playTap();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCelebrate = (e: React.MouseEvent) => {
    soundManager.playFanfare();
    confetti({
      particleCount: 50,
      spread: 80,
      origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
      colors: ['#ef4444', '#3b82f6', '#fbbf24', '#10b981', '#8b5cf6']
    });
    onPopBonus();
  };

  return (
    <footer className="bg-[#0b0805] border-t border-[#342416] text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">

          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#1e1710] rounded-[10px] flex items-center justify-center">
                  <span className="font-game text-amber-400 font-bold text-lg">6</span>
                </div>
              </div>
              <span className="font-game text-2xl font-bold text-white tracking-wide">
                STRATEX<span className="text-amber-400">6</span>
              </span>
            </div>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              The premier interactive companion wiki for Bloons Tower Defense 6 players. Dedicated to deterministic CHIMPS calculations, boss event theorycrafting, and optimal crosspath engineering.
            </p>

            {/* Live Pop Counter Ticker */}
            <div className="bg-[#140e08] border border-[#302113] rounded-xl p-3 inline-flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <div className="text-xs">
                <span className="text-stone-400 font-mono-code">BLOONS POPPED THIS SESSION: </span>
                <strong className="text-amber-400 font-mono-code font-bold text-sm ml-1">{popCount}</strong>
              </div>
              <button
                onClick={handleCelebrate}
                className="text-[11px] font-game bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-stone-950 px-2 py-1 rounded border border-amber-500/40 transition-colors cursor-pointer"
                title="Celebrate your pops!"
              >
                🎉 Pop All!
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-game font-bold text-white text-sm uppercase tracking-wider text-stone-200">
              DEDICATED PAGES
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'spotlight' as PageId, label: 'Meta Spotlight & Efficiency' },
                { id: 'vault' as PageId, label: 'Strategy Vault (22)' },
                { id: 'atlas' as PageId, label: 'Map Atlas (90×20 Modes)' },
                { id: 'dangers' as PageId, label: 'Round Danger Inspector' },
                { id: 'planner' as PageId, label: 'CHIMPS Cash Planner' },
                { id: 'synergies' as PageId, label: 'Tower Synergies' },
                { id: 'bosses' as PageId, label: 'Elite Boss Guides (6)' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      soundManager.playTap();
                      onNavigate(link.id);
                    }}
                    className={`text-left transition-colors cursor-pointer ${
                      activePage === link.id ? 'text-amber-400 font-bold' : 'hover:text-amber-400'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Official Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-game font-bold text-white text-sm uppercase tracking-wider text-stone-200">
              RESOURCES
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-stone-300">Patch v57.2 Live</span>
              </li>
              <li>
                <span className="text-stone-400">Ninja Kiwi Balance Notes</span>
              </li>
              <li>
                <span className="text-stone-400">Community r/btd6 Meta</span>
              </li>
              <li>
                <span className="text-stone-400">Bloons Wiki Fandom</span>
              </li>
              <li>
                <span className="text-stone-400">Boss Leaderboards</span>
              </li>
            </ul>
          </div>

          {/* Tips & Accessibility */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-game font-bold text-white text-sm uppercase tracking-wider text-stone-200">
              KEYBOARD &amp; SHORTCUTS
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-center justify-between bg-[#150f09] px-2.5 py-1.5 rounded border border-[#2d1e11]">
                <span>Close modal dialog</span>
                <kbd className="font-mono-code bg-[#24170d] text-amber-300 px-1.5 py-0.5 rounded text-[10px] border border-[#442c18]">ESC</kbd>
              </div>
              <div className="flex items-center justify-between bg-[#150f09] px-2.5 py-1.5 rounded border border-[#2d1e11]">
                <span>Pop floating bloons</span>
                <kbd className="font-mono-code bg-[#24170d] text-amber-300 px-1.5 py-0.5 rounded text-[10px] border border-[#442c18]">Click</kbd>
              </div>
              <div className="flex items-center justify-between bg-[#150f09] px-2.5 py-1.5 rounded border border-[#2d1e11]">
                <span>Audio Sound FX</span>
                <span className="text-emerald-400 font-mono-code text-[11px]">Web Audio API</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Disclaimer & Back To Top */}
        <div className="pt-8 border-t border-[#291b0f] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="space-y-1 text-center sm:text-left">
            <p className="flex items-center justify-center sm:justify-start space-x-1">
              <span>Made by Colixsto</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>for the Bloons TD 6 Strategy Community.</span>
            </p>
            <p className="text-[11px] text-stone-400">
              Bloons Tower Defense 6 and all related assets are registered trademarks of Ninja Kiwi Ltd. This fan-made wiki is not affiliated with or endorsed by Ninja Kiwi.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 bg-[#1f150d] hover:bg-[#312114] text-stone-300 hover:text-amber-400 border border-[#412c19] px-3.5 py-2 rounded-xl transition-all cursor-pointer group"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
