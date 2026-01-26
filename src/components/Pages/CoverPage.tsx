import React from 'react';

interface CoverPageProps {
  onOpenBook?: () => void;
}

const CoverPage: React.FC<CoverPageProps> = ({ onOpenBook }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-amber-800 rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center">
        <div className="w-32 h-32 mx-auto mb-6 bg-amber-200 rounded-full flex items-center justify-center border-4 border-amber-800">
          <span className="text-4xl">📚</span>
        </div>
        <h1 className="text-5xl font-bold text-amber-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
          Naila Bon
        </h1>
        <div className="w-24 h-1 bg-amber-800 mx-auto mb-4"></div>
        <p className="text-xl text-amber-800 mb-2">Portfolio Professionnel</p>
        <p className="text-lg text-amber-700">Développeuse Web & Mobile</p>
        
        {onOpenBook && (
          <div className="mt-8 text-sm text-amber-600">
            Appuyez sur RT pour commencer →
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverPage;