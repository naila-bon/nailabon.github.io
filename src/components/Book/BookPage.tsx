import React from 'react';

interface BookPageProps {
  children: React.ReactNode;
  side: 'left' | 'right';
  showHint?: boolean;
}

const BookPage: React.FC<BookPageProps> = ({ children, side, showHint = true }) => {
  const isLeft = side === 'left';
  
  return (
    <div 
      className={`relative w-[45vw] max-w-md h-[75vh] bg-amber-50 ${
        isLeft ? 'rounded-l-xl border-r-4' : 'rounded-r-xl border-l-4'
      } border-amber-900 overflow-hidden`}
      style={{ 
        boxShadow: isLeft 
          ? 'inset 20px 0 30px rgba(0,0,0,0.1)' 
          : 'inset -20px 0 30px rgba(0,0,0,0.1)',
        transform: isLeft ? 'rotateY(3deg)' : 'rotateY(-3deg)'
      }}
    >
      {/* Page texture */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139,69,19,0.1) 2px, rgba(139,69,19,0.1) 3px)'
        }}
      />
      
      {/* Content */}
      <div className="relative h-full">
        {children}
      </div>

      {/* Navigation hint */}
      {showHint && (
        <div className={`absolute bottom-4 ${isLeft ? 'left-4' : 'right-4'} text-xs text-amber-600 font-mono`}>
          {isLeft ? 'LT ←' : '→ RT'}
        </div>
      )}
    </div>
  );
};

export default BookPage;