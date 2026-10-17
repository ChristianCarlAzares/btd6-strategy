import React, { useState } from 'react';
import { Layers, Star, Zap, ArrowRight, Info } from 'lucide-react';
import { TOWER_SYNERGY_DATA } from '../data/towerSynergies';
import { TowerCategory, TowerSynergyInfo } from '../types/btd6';
import { soundManager } from '../utils/sound';

export const TowerSynergyMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTowerId, setActiveTowerId] = useState<string>(TOWER_SYNERGY_DATA[0].id);

  const categories: (TowerCategory | 'All')[] = ['All', 'Primary', 'Military', 'Magic', 'Support'];

  const filteredTowers = TOWER_SYNERGY_DATA.filter((t) => 
    selectedCategory === 'All' ? true : t.category === selectedCategory
  );

  const currentTower: TowerSynergyInfo = 
    TOWER_SYNERGY_DATA.find((t) => t.id === activeTowerId) || TOWER_SYNERGY_DATA[0];

  const getCategoryColor = (cat: TowerCategory) => {
    switch (cat) {
      case 'Primary': return 'text-blue-400 bg-blue-950/80 border-blue-700';
      case 'Military': return 'text-emerald-400 bg-emerald-950/80 border-emerald-700';
      case 'Magic': return 'text-purple-400 bg-purple-950/80 border-purple-700';
      case 'Support': return 'text-amber-400 bg-amber-950/80 border-amber-700';
      default: return 'text-stone-300 bg-stone-900 border-stone-700';
    }
  };

  return (
    <section id="tower-synergies" className="py-16 sm:py-20 bg-[#100c08] border-b border-[#3b2a19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-code text-amber-400 uppercase tracking-widest mb-1.5">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>CROSSPATH &amp; BUFF ENCYCLOPEDIA</span>
            </div>
            <h2 className="font-game text-3xl sm:text-4xl font-bold text-white tracking-tight">
              TOWER CROSSPATH <span className="text-amber-400">SYNERGIES</span>
            </h2>
            <p className="text-sm text-stone-400 mt-1 max-w-2xl">
              Understand the mathematical logic behind optimal tier 5 crosspathing and buff synergy ratings.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundManager.playTap();
                  setSelectedCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-game transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-stone-950 font-bold border-amber-400 shadow'
                    : 'bg-[#1b130c] text-stone-300 border-[#382717] hover:bg-[#261b11]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Content Layout: Tower Selector list on left, deep analysis on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Tower Navigation Column */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[11px] font-mono-code text-stone-400 uppercase tracking-wider block mb-1">
              SELECT MONKEY TO INSPECT ({filteredTowers.length})
            </span>

            <div className="space-y-1.5">
              {filteredTowers.map((tower) => {
                const isActive = tower.id === currentTower.id;
                return (
                  <button
                    key={tower.id}
                    onClick={() => {
                      soundManager.playTap();
                      setActiveTowerId(tower.id);
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#291e13] border-amber-500 shadow-md text-amber-300'
                        : 'bg-[#18110b] border-[#382617] text-stone-300 hover:bg-[#20170e] hover:border-[#4d3621]'
                    }`}
                  >
                    <div>
                      <div className="font-game font-bold text-sm text-white">
                        {tower.name}
                      </div>
                      <span className={`text-[10px] font-mono-code px-1.5 py-0.2 rounded border ${getCategoryColor(tower.category)}`}>
                        {tower.category}
                      </span>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-amber-400 translate-x-1' : 'text-stone-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detailed Synergy Card */}
          <div className="lg:col-span-8 wood-panel rounded-2xl p-6 sm:p-7 space-y-6">
            
            {/* Tower Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#3b2b1b]">
              <div>
                <span className={`text-xs font-mono-code px-2.5 py-0.5 rounded border ${getCategoryColor(currentTower.category)}`}>
                  {currentTower.category} Category
                </span>
                <h3 className="font-game text-2xl font-bold text-white mt-1">
                  {currentTower.name} Meta Breakdown
                </h3>
              </div>

              {/* Alch Buff & Village Badges */}
              <div className="flex items-center space-x-3 text-xs">
                {/* Alch Buff Compatibility */}
                <div className="bg-[#160f09] border border-[#372617] rounded-xl px-3 py-1.5">
                  <span className="text-[10px] font-mono-code text-stone-400 block uppercase">
                    Alch Buff Synergy
                  </span>
                  <div className="flex items-center space-x-0.5 mt-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3.5 h-3.5 ${
                          star <= currentTower.alchBuffCompatibility 
                            ? 'fill-amber-400 text-amber-400' 
                            : 'text-stone-700'
                        }`}
                      />
                    ))}
                    <span className="text-amber-400 font-bold ml-1 font-mono-code">
                      {currentTower.alchBuffCompatibility}/5
                    </span>
                  </div>
                </div>

                {/* Village Discount Priority */}
                <div className="bg-[#160f09] border border-[#372617] rounded-xl px-3 py-1.5">
                  <span className="text-[10px] font-mono-code text-stone-400 block uppercase">
                    Village Discount
                  </span>
                  <span className={`font-mono-code font-bold ${
                    currentTower.villageDiscountPriority === 'High' ? 'text-emerald-400' : 'text-stone-300'
                  }`}>
                    {currentTower.villageDiscountPriority} Priority
                  </span>
                </div>
              </div>
            </div>

            {/* Optimal Crosspaths Section */}
            <div className="space-y-3">
              <span className="text-xs font-mono-code text-amber-400 uppercase tracking-wider block">
                OPTIMAL CROSSPATHS &amp; ARCHITECTURAL REASONING:
              </span>

              <div className="space-y-3">
                {currentTower.bestCrosspaths.map((cp, idx) => (
                  <div key={idx} className="bg-[#17100a] border border-[#3a2818] rounded-xl p-4 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono-code font-bold text-sm px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-600">
                          {cp.path}
                        </span>
                        <h4 className="font-game font-bold text-white text-base">
                          {cp.name}
                        </h4>
                      </div>

                      <span className="text-xs font-mono-code text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                        Best For: {cp.bestFor}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pl-1">
                      {cp.why}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Synergies Combo Tags */}
            <div className="space-y-2">
              <span className="text-xs font-mono-code text-stone-400 uppercase tracking-wider block">
                HIGHEST MULTIPLIER SYNERGY PARTNERS:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentTower.topSynergies.map((syn, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-1.5 bg-[#20160d] border border-[#44301d] px-3 py-1.5 rounded-lg text-xs text-stone-200"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>{syn}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tips Footer */}
            <div className="bg-[#24170d]/60 border-l-4 border-amber-500 p-3 rounded-r-xl text-xs text-stone-300 flex items-start space-x-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-400">TACTICAL TAKEAWAY: </strong>
                <span>{currentTower.tips}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
