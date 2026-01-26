import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="h-full p-8 bg-gradient-to-br from-yellow-50 to-amber-50 overflow-y-auto">
      <div className="mb-4 pb-3 border-b-2 border-amber-800">
        <h2 className="text-3xl font-bold text-amber-900" style={{ fontFamily: 'Georgia, serif' }}>
          À Propos
        </h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-center mb-6">
          <div className="w-40 h-40 bg-gradient-to-br from-amber-200 to-amber-300 rounded-lg shadow-lg flex items-center justify-center border-4 border-amber-800">
            <span className="text-amber-600 text-sm">Votre Photo</span>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-60 p-4 rounded-lg border-2 border-amber-300 shadow-sm">
          <h3 className="text-lg font-bold text-amber-900 mb-2">🎓 Formation</h3>
          <p className="text-amber-800 text-sm leading-relaxed">
            Étudiante en BUT Informatique, passionnée par le développement web et mobile.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-60 p-4 rounded-lg border-2 border-amber-300 shadow-sm">
          <h3 className="text-lg font-bold text-amber-900 mb-2">💡 Parcours</h3>
          <p className="text-amber-800 text-sm leading-relaxed">
            Mon parcours m'a permis d'acquérir des compétences solides en programmation et en gestion de projets.
          </p>
        </div>
        
        <div className="bg-white bg-opacity-60 p-4 rounded-lg border-2 border-amber-300 shadow-sm">
          <h3 className="text-lg font-bold text-amber-900 mb-2">🎯 Objectif</h3>
          <p className="text-amber-800 text-sm leading-relaxed">
            Ce portfolio retrace mon évolution professionnelle et académique.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center mt-4">
          <a href="https://github.com/naila-bon" target="_blank" rel="noopener noreferrer" className="p-3 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <div className="p-3 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors cursor-pointer">
            <Linkedin className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;