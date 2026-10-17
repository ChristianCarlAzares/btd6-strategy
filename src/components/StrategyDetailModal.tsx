import React, { useState, useEffect } from 'react';
import {
  X, Copy, Check, ShieldAlert,
  MapPin, ThumbsUp, ThumbsDown, Zap,
  BookOpen, ChevronRight, Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Strategy } from '../types/btd6';
import { getEfficiency, RANK_LABEL } from '../utils/efficiency';
import { soundManager } from '../utils/sound';

interface StrategyDetailModalProps {
  strategy: Strategy | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const StrategyDetailModal: React.FC<StrategyDetailModalProps> = ({
  strategy,
  onClose,
  isFavorite,
  onToggleFavorite
}) => {
  const [activeTab, setActiveTab] = useState<'walkthrough' | 'dangers' | 'towers' | 'synergy'>('walkthrough');
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!strategy) return null;

  const handleCopyFullGuide = () => {
    soundManager.playFanfare();
    const guideText = `=== ${strategy.title.toUpperCase()} ===
Difficulty: ${strategy.difficulty} | Mode: ${strategy.gameMode}
Hero: ${strategy.hero} | Win Rate: ${strategy.winRate}% | Patch: ${strategy.patchVersion}
Maps: ${strategy.maps.join(', ')}
Total Estimated Cost: $${strategy.totalCostEstimate.toLocaleString()}

[KEY TOWERS]
${strategy.keyTowers.map((t) => `- ${t.name} (${t.crosspath}) -> ${t.role}`).join('\n')}

[BUILD ORDER]
${strategy.buildOrder.map((step) => `[${step.roundRange} - ${step.phase}]\nActions:\n${step.actions.map((a) => `  * ${a}`).join('\n')}\nTip: ${step.tips}\n`).join('\n')}

[DANGEROUS ROUND COUNTERS]
${strategy.dangerousRounds.map((d) => `- Round ${d.round}: ${d.threat} => Solution: ${d.counter}`).join('\n')}
`;

    navigator.clipboard.writeText(guideText);
    setCopied(true);
    confetti({
      particleCount: 30,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={() => {
          soundManager.playTap();
          onClose();
        }}
      />

      {/* Modal Dialog Container */}
      <div className="relative wood-panel rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-amber-500/40 z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 bg-[#1a130c] border-b border-[#3d2c19] flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-2.5 py-0.5 rounded text-xs font-game font-bold border ${
                strategy.difficulty === 'Beginner' ? 'bg-emerald-950 text-emerald-300 border-emerald-600' :
                strategy.difficulty === 'Intermediate' ? 'bg-blue-950 text-blue-300 border-blue-600' :
                strategy.difficulty === 'Advanced' ? 'bg-purple-950 text-purple-300 border-purple-600' :
                strategy.difficulty === 'Expert' ? 'bg-red-950 text-red-300 border-red-600' :
                'bg-amber-950 text-amber-300 border-amber-600'
              }`}>
                {strategy.difficulty} Tier
              </span>

              <span className="px-2 py-0.5 rounded text-xs font-mono-code bg-[#291c10] text-amber-300 border border-[#52381f]">
                {strategy.gameMode}
              </span>

              <span className="px-2 py-0.5 rounded text-xs font-mono-code bg-[#1f2937]/50 text-stone-300 border border-stone-700">
                {strategy.verifiedOn ?? strategy.patchVersion}
              </span>

              {strategy.isNew && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-code font-bold bg-emerald-500 text-stone-950 uppercase">
                  new this patch
                </span>
              )}

              <span
                className="px-2 py-0.5 rounded text-xs font-mono-code font-bold bg-amber-400 text-stone-950 border border-amber-300"
                title={RANK_LABEL[getEfficiency(strategy).rank]}
              >
                {getEfficiency(strategy).rank} · {getEfficiency(strategy).score}/100 eff
              </span>

              <span className="text-xs font-mono-code text-emerald-400 font-bold ml-1">
                {strategy.winRate}% Verified Winrate
              </span>
            </div>

            {strategy.patchNote && (
              <p className="text-[11px] leading-relaxed text-emerald-100/85 bg-emerald-950/40 border border-emerald-800/40 rounded-lg px-2.5 py-1.5 mt-2 max-w-3xl">
                <span className="font-mono-code font-bold text-emerald-400">PATCH IMPACT · </span>
                {strategy.patchNote}
              </p>
            )}

            <h2 className="text-xl sm:text-2xl font-game font-bold text-white leading-tight">
              {strategy.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              {strategy.subtitle}
            </p>
          </div>

          {/* Close & Action Buttons */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={() => {
                soundManager.playTap();
                onToggleFavorite(strategy.id);
              }}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                isFavorite
                  ? 'bg-rose-950/70 border-rose-500 text-rose-400'
                  : 'bg-[#251a10] border-[#44301d] text-stone-400 hover:text-rose-400'
              }`}
              title="Bookmark strategy"
            >
              ★
            </button>

            <button
              onClick={() => {
                soundManager.playTap();
                onClose();
              }}
              className="p-2 rounded-xl bg-[#251a10] hover:bg-[#382617] border border-[#44301d] text-stone-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center space-x-1 sm:space-x-2 px-4 sm:px-6 pt-3 pb-2 bg-[#140e08] border-b border-[#302213] overflow-x-auto scrollbar-none text-xs sm:text-sm font-game">
          <button
            onClick={() => {
              soundManager.playTap();
              setActiveTab('walkthrough');
            }}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'walkthrough'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'text-stone-300 hover:text-white hover:bg-[#251b11]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Round Walkthrough</span>
          </button>

          <button
            onClick={() => {
              soundManager.playTap();
              setActiveTab('dangers');
            }}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'dangers'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'text-stone-300 hover:text-white hover:bg-[#251b11]'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Danger Rounds ({strategy.dangerousRounds.length})</span>
          </button>

          <button
            onClick={() => {
              soundManager.playTap();
              setActiveTab('towers');
            }}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'towers'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'text-stone-300 hover:text-white hover:bg-[#251b11]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Tower Roster ({strategy.keyTowers.length})</span>
          </button>

          <button
            onClick={() => {
              soundManager.playTap();
              setActiveTab('synergy');
            }}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'synergy'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'text-stone-300 hover:text-white hover:bg-[#251b11]'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Synergy &amp; Pros/Cons</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm">

          {/* TAB 1: ROUND WALKTHROUGH */}
          {activeTab === 'walkthrough' && (
            <div className="space-y-6">
              <div className="bg-[#18110a] rounded-xl p-3.5 border border-[#3b2a18] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-stone-300 font-medium">
                    Verified Maps: <strong className="text-amber-300">{strategy.maps.join(', ')}</strong>
                  </span>
                </div>
                <div className="text-xs font-mono-code text-stone-400">
                  Estimated Total Budget: <strong className="text-amber-400">${strategy.totalCostEstimate.toLocaleString()}</strong>
                </div>
              </div>

              {/* Build Order Phases */}
              <div className="space-y-4">
                {strategy.buildOrder.map((step, idx) => (
                  <div key={idx} className="bg-[#1a120b] border border-[#3f2c19] rounded-xl p-4 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#302213]">
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-mono-code font-bold text-xs flex items-center justify-center border border-amber-500/30">
                          {idx + 1}
                        </span>
                        <h4 className="font-game font-bold text-base text-amber-300">
                          {step.phase}
                        </h4>
                      </div>
                      <span className="font-mono-code text-xs px-2.5 py-1 rounded bg-[#2b1d10] text-stone-300 border border-[#4f361d]">
                        {step.roundRange}
                      </span>
                    </div>

                    {/* Step Actions */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono-code text-stone-400 uppercase tracking-wider block">
                        ACTIONS &amp; UPGRADE SEQUENCE:
                      </span>
                      <ul className="space-y-1.5 pl-1">
                        {step.actions.map((act, aIdx) => (
                          <li key={aIdx} className="flex items-start space-x-2 text-stone-200 text-xs sm:text-sm">
                            <ChevronRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pro Tip */}
                    <div className="bg-[#26180c]/60 border-l-4 border-amber-500 p-2.5 rounded-r-lg text-xs text-stone-300">
                      <strong className="text-amber-400 font-mono-code">PRO TIP: </strong>
                      <span>{step.tips}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: DANGER ROUNDS */}
          {activeTab === 'dangers' && (
            <div className="space-y-4">
              <div className="bg-[#18110a] rounded-xl p-3 border border-[#332415] text-xs text-stone-300">
                These are the most catastrophic rounds in standard runs. Here is the verified counter strategy for each:
              </div>

              <div className="grid grid-cols-1 gap-3">
                {strategy.dangerousRounds.map((danger, idx) => (
                  <div key={idx} className="bg-[#1b130c] border border-[#3e2b19] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-game font-bold text-sm px-2.5 py-0.5 rounded bg-red-950 text-red-300 border border-red-700">
                          Round {danger.round}
                        </span>
                        <span className="font-semibold text-stone-200 text-sm">
                          {danger.threat}
                        </span>
                      </div>
                    </div>

                    <div className="sm:max-w-md bg-[#25180c] border border-amber-500/20 px-3 py-2 rounded-lg text-xs">
                      <span className="text-amber-400 font-bold block mb-0.5 font-mono-code">PRESCRIBED COUNTER:</span>
                      <span className="text-stone-300">{danger.counter}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TOWER ROSTER */}
          {activeTab === 'towers' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {strategy.keyTowers.map((tower, idx) => (
                  <div key={idx} className="bg-[#1a120b] border border-[#3e2c1a] rounded-xl p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-mono-code uppercase text-amber-500 tracking-wider">
                          {tower.category} Tower
                        </span>
                        <h4 className="font-game font-bold text-base text-white">
                          {tower.name}
                        </h4>
                      </div>

                      {/* Crosspath Pill */}
                      <span className="font-mono-code font-bold text-sm px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-600">
                        {tower.crosspath}
                      </span>
                    </div>

                    {/* Tier Path Visual Indicator (Top, Mid, Bot) */}
                    <div className="space-y-1 pt-1">
                      <div className="flex items-center justify-between text-[11px] font-mono-code text-stone-400">
                        <span>Top Path ({tower.topPath}/5)</span>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div
                              key={level}
                              className={`w-3 h-2 rounded-xs ${
                                level <= tower.topPath ? 'bg-amber-400' : 'bg-stone-800'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono-code text-stone-400">
                        <span>Mid Path ({tower.midPath}/5)</span>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div
                              key={level}
                              className={`w-3 h-2 rounded-xs ${
                                level <= tower.midPath ? 'bg-amber-400' : 'bg-stone-800'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono-code text-stone-400">
                        <span>Bot Path ({tower.botPath}/5)</span>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div
                              key={level}
                              className={`w-3 h-2 rounded-xs ${
                                level <= tower.botPath ? 'bg-amber-400' : 'bg-stone-800'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Role & Cost */}
                    <div className="pt-2 border-t border-[#302113] flex items-center justify-between text-xs">
                      <span className="text-stone-300 italic">{tower.role}</span>
                      <span className="font-mono-code text-amber-400 font-semibold">
                        ~${tower.costEstimate.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SYNERGY & PROS/CONS */}
          {activeTab === 'synergy' && (
            <div className="space-y-5">
              {/* Synergy Overview */}
              <div className="bg-[#1c130b] border border-[#44301d] rounded-xl p-4 space-y-2">
                <h4 className="font-game font-bold text-base text-amber-300 flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Mathematical Synergy &amp; Damage Buffs</span>
                </h4>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  {strategy.synergyNotes}
                </p>
              </div>

              {/* Monkey Knowledge Requirement */}
              <div className="bg-[#18110a] border border-[#3b2a19] rounded-xl p-3.5 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-stone-200 block">Monkey Knowledge Requirement</span>
                  <span className="text-stone-400">
                    {strategy.monkeyKnowledgeRequired
                      ? 'Requires Monkey Knowledge points (e.g. Free Dart / Mana Shield / More Cash)'
                      : 'CHIMPS Certified: 100% playable with Monkey Knowledge completely DISABLED.'}
                  </span>
                </div>
                <span className={`px-2.5 py-1 rounded font-mono-code font-bold ${
                  strategy.monkeyKnowledgeRequired
                    ? 'bg-amber-950 text-amber-300 border border-amber-700'
                    : 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                }`}>
                  {strategy.monkeyKnowledgeRequired ? 'MK Required' : 'No MK Needed (CHIMPS)'}
                </span>
              </div>

              {/* Pros & Cons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Pros */}
                <div className="bg-[#121c13] border border-emerald-800/50 rounded-xl p-4 space-y-2">
                  <h5 className="font-game font-bold text-emerald-400 flex items-center space-x-1.5 text-sm">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Strategy Advantages</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs text-stone-300">
                    {strategy.pros.map((p, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="bg-[#1f1412] border border-rose-800/50 rounded-xl p-4 space-y-2">
                  <h5 className="font-game font-bold text-rose-400 flex items-center space-x-1.5 text-sm">
                    <ThumbsDown className="w-4 h-4" />
                    <span>Potential Vulnerabilities</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs text-stone-300">
                    {strategy.cons.map((c, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="text-rose-400 font-bold">⚠</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer with Export / Copy Buttons */}
        <div className="p-4 sm:p-5 bg-[#17100a] border-t border-[#3a2817] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs font-mono-code text-stone-400">
            <span>Challenge Code:</span>
            <span className="font-bold text-amber-400 bg-[#251a0f] px-2 py-0.5 rounded border border-[#48331e]">
              {strategy.challengeCode}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyFullGuide}
              className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-game font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Build Order Copied!' : 'Copy Full Build Order'}</span>
            </button>

            <button
              onClick={() => {
                soundManager.playTap();
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-[#251b11] hover:bg-[#342618] border border-[#4a341e] text-stone-300 font-game text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
