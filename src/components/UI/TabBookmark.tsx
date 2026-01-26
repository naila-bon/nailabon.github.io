import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface TabBookmarkProps {
  icon: LucideIcon;
  name: string;
  isActive: boolean;
  colorClass: string;
  onClick: () => void;
}

const TabBookmark: React.FC<TabBookmarkProps> = ({ 
  icon: Icon, 
  name, 
  isActive, 
  colorClass,
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 rounded-t-lg transition-all transform ${
        isActive 
          ? `${colorClass} text-white translate-y-0 shadow-lg scale-110` 
          : 'bg-slate-600 text-slate-300 hover:bg-slate-500 translate-y-2'
      }`}
      style={{ minWidth: '100px' }}
    >
      <Icon className="w-5 h-5 mx-auto mb-1" />
      <span className="text-xs font-bold block">{name}</span>
      {isActive && (
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent" 
          style={{ borderTopColor: 'inherit' }}
        ></div>
      )}
    </button>
  );
};

export default TabBookmark;