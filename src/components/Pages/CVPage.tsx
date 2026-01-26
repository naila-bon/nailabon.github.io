import React from 'react';
import { FileText } from 'lucide-react';

const CVPage: React.FC = () => {
  return (
    <div className="h-full p-6 bg-gradient-to-br from-orange-50 to-amber-50 overflow-y-auto">
      <div className="mb-4 pb-3 border-b-2 border-orange-800">
        <h2 className="text-2xl font-bold text-orange-900" style={{ fontFamily: 'Georgia, serif' }}>
          Curriculum Vitae
        </h2>
      </div>
      
      <div className="space-y-4">
        <div className="bg-white bg-opacity-70 p-4 rounded-lg border-2 border-orange-300 shadow-sm">
          <h3 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Téléchargements
          </h3>
          <div className="space-y-2">
            <button className="w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 text-sm font-semibold">
              📄 CV Français (PDF)
            </button>
            <button className="w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 text-sm font-semibold">
              📄 CV English (PDF)
            </button>
          </div>
        </div>

        <div className="bg-white bg-opacity-70 p-4 rounded-lg border-2 border-orange-300 shadow-sm">
          <h3 className="font-bold text-orange-900 mb-3">📋 Aperçu</h3>
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 h-48 rounded flex flex-col items-center justify-center text-orange-700 border-2 border-orange-200">
            <FileText className="w-12 h-12 mb-2" />
            <p className="text-sm">Prévisualisation du CV</p>
          </div>
        </div>

        <div className="bg-orange-100 bg-opacity-70 p-3 rounded-lg border-2 border-orange-300">
          <p className="text-xs text-orange-800 text-center">
            <span className="font-semibold">Dernière mise à jour:</span> Janvier 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default CVPage;