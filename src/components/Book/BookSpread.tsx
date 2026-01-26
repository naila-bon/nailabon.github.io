import React from 'react';
import BookPage from './BookPage';

interface BookSpreadProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const BookSpread: React.FC<BookSpreadProps> = ({ leftContent, rightContent }) => {
  return (
    <div className="relative flex shadow-2xl">
      {/* Left Page */}
      <BookPage side="left">
        {leftContent}
      </BookPage>

      {/* Book Spine */}
      <div 
        className="w-8 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 relative"
        style={{ 
          boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950 to-transparent opacity-30"></div>
      </div>

      {/* Right Page */}
      <BookPage side="right">
        {rightContent}
      </BookPage>
    </div>
  );
};

export default BookSpread;