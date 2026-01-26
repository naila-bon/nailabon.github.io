import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message envoyé ! (Fonctionnalité à implémenter)');
  };

  return (
    <div className="h-full p-6 bg-gradient-to-br from-amber-50 to-orange-50 overflow-y-auto">
      <div className="mb-4 pb-3 border-b-2 border-orange-800">
        <h2 className="text-2xl font-bold text-orange-900" style={{ fontFamily: 'Georgia, serif' }}>
          Me Contacter
        </h2>
      </div>
      
      <div className="space-y-3">
        <div className="bg-white bg-opacity-70 p-3 rounded-lg border-2 border-orange-300">
          <label className="block text-orange-900 font-bold mb-1 text-sm">Nom</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border-2 border-orange-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            placeholder="Votre nom"
          />
        </div>
        
        <div className="bg-white bg-opacity-70 p-3 rounded-lg border-2 border-orange-300">
          <label className="block text-orange-900 font-bold mb-1 text-sm">Email</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border-2 border-orange-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
            placeholder="votre@email.com"
          />
        </div>
        
        <div className="bg-white bg-opacity-70 p-3 rounded-lg border-2 border-orange-300">
          <label className="block text-orange-900 font-bold mb-1 text-sm">Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border-2 border-orange-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 h-20 text-sm"
            placeholder="Votre message..."
          ></textarea>
        </div>
        
        <button 
          onClick={handleSubmit}
          className="w-full bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors font-bold"
        >
          ✉️ Envoyer
        </button>
      </div>
      
      <div className="mt-4 pt-4 border-t-2 border-orange-300">
        <h3 className="font-bold text-orange-900 mb-3 text-sm">🔗 Réseaux</h3>
        <div className="grid grid-cols-2 gap-2">
          <a href="https://github.com/naila-bon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-orange-800 text-white px-3 py-2 rounded hover:bg-orange-900 transition-colors text-sm">
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <div className="flex items-center justify-center gap-2 bg-orange-800 text-white px-3 py-2 rounded hover:bg-orange-900 transition-colors cursor-pointer text-sm">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;