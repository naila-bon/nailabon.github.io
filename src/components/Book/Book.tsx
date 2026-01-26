import React, { useState } from 'react';
import { Home, Award, Briefcase, FileText } from 'lucide-react';
import BookSpread from './BookSpread';
import BookNav from './BookNav';
import CoverPage from '../Pages/CoverPage';
import AboutPage from '../Pages/AboutPage';
import SkillsPage from '../Pages/SkillsPage';
import ProjectsPage from '../Pages/ProjectsPage';
import CVPage from '../Pages/CVPage';
import ContactPage from '../Pages/ContactPage';
import type { Spread } from '../../data/types';

const Book: React.FC = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const spreads: Spread[] = [
    { 
      id: 'cover-about', 
      name: 'Accueil',
      color: 'bg-emerald-500',
      icon: Home,
      leftPage: 'cover',
      rightPage: 'about'
    },
    { 
      id: 'skills', 
      name: 'Compétences',
      color: 'bg-blue-500',
      icon: Award,
      leftPage: 'skills-left',
      rightPage: 'skills-right'
    },
    { 
      id: 'projects', 
      name: 'Projets',
      color: 'bg-purple-500',
      icon: Briefcase,
      leftPage: 'projects-left',
      rightPage: 'projects-right'
    },
    { 
      id: 'cv-contact', 
      name: 'CV & Contact',
      color: 'bg-orange-500',
      icon: FileText,
      leftPage: 'cv',
      rightPage: 'contact'
    }
  ];

  const changePage = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    if (direction === 'next' && currentSpread < spreads.length - 1) {
      setCurrentSpread(currentSpread + 1);
    } else if (direction === 'prev' && currentSpread > 0) {
      setCurrentSpread(currentSpread - 1);
    }
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSpread = (index: number) => {
    if (isAnimating || index === currentSpread) return;
    setIsAnimating(true);
    setCurrentSpread(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const renderContent = (pageId: string) => {
    switch(pageId) {
      case 'cover':
        return <CoverPage />;
      case 'about':
        return <AboutPage />;
      case 'skills-left':
        return <SkillsPage side="left" />;
      case 'skills-right':
        return <SkillsPage side="right" />;
      case 'projects-left':
        return <ProjectsPage side="left" />;
      case 'projects-right':
        return <ProjectsPage side="right" />;
      case 'cv':
        return <CVPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return null;
    }
  };

  const current = spreads[currentSpread];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Book Container */}
      <div className="relative mt-16 z-10" style={{ perspective: '2000px' }}>
        <div className={`relative transition-transform duration-600 ${isAnimating ? 'scale-95' : 'scale-100'}`}>
          <BookSpread
            leftContent={renderContent(current.leftPage)}
            rightContent={renderContent(current.rightPage)}
          />

          <BookNav
            spreads={spreads}
            currentSpread={currentSpread}
            onNavigate={goToSpread}
            canGoPrev={currentSpread > 0}
            canGoNext={currentSpread < spreads.length - 1}
            onPrev={() => changePage('prev')}
            onNext={() => changePage('next')}
          />
        </div>
      </div>
    </div>
  );
};

export default Book;