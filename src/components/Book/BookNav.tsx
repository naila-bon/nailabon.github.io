import React from 'react';
import TabBookmark from '../UI/TabBookmark';
import type { Spread } from '../../data/types';

interface BookNavProps {
  spreads: Spread[];
  currentSpread: number;
  onNavigate: (index: number) => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const BookNav: React.FC<BookNavProps> = ({
  spreads,
  currentSpread,
  onNavigate,
  canGoPrev,
  canGoNext,
  onPrev,
  onNext
}) => {
  return (
    <>
      {/* Tab Bookmarks at top */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex gap-1 pt-2">
        {spreads.map((spread, idx) => (
          <TabBookmark
            key={spread.id}
            icon={spread.icon}
            name={spread.name}
            isActive={currentSpread === idx}
            colorClass={spread.color}
            onClick={() => onNavigate(idx)}
          />
        ))}
      </div>

      {/* Left Navigation Button */}
      {canGoPrev && (
        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-slate-800 text-white px-4 py-6 rounded-lg shadow-lg hover:bg-slate-700 transition-all border-2 border-slate-600"
        >
          <div className="text-center">
            <div className="text-xl mb-1">←</div>
            <div className="text-xs font-mono">LT</div>
          </div>
        </button>
      )}
      
      {/* Right Navigation Button */}
      {canGoNext && (
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-slate-800 text-white px-4 py-6 rounded-lg shadow-lg hover:bg-slate-700 transition-all border-2 border-slate-600"
        >
          <div className="text-center">
            <div className="text-xl mb-1">→</div>
            <div className="text-xs font-mono">RT</div>
          </div>
        </button>
      )}

      {/* Page counter */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-slate-800 text-slate-300 px-6 py-2 rounded-full text-sm font-mono border-2 border-slate-600">
        {currentSpread + 1} / {spreads.length}
      </div>

      {/* Instructions */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-slate-400 text-xs text-center z-50">
        <div className="bg-slate-800 bg-opacity-90 px-4 py-2 rounded-lg border border-slate-600">
          Utilisez les boutons LT / RT ou les onglets pour naviguer
        </div>
      </div>
    </>
  );
};

export default BookNav;