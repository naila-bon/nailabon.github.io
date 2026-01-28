export interface PageData {
  type: string;
  title?: string;
  subtitle?: string;
  author?: string;
  content?: string;
  photo?: string;
  categories?: Array<{
    label: string;
    items: string[];
    color: string;
  }>;
  items?: Array<{
    date: string;
    title: string;
    desc: string;
  }>;
}

export const pages: PageData[] = [
  {
    type: 'intro',
    title: 'Coucou !',
    content: 'Bienvenue dans mon portfolio. Ici, pas de jargon compliqué, juste mon parcours et mes créations.',
    photo: 'https://picsum.photos/150' // Remplace par ta photo
  },
  {
    type: 'skills',
    title: 'Ce que je sais faire',
    categories: [
      { label: 'Frontend', items: ['React', 'Chakra UI', 'TS'], color: '#ffd6a5' },
      { label: 'Backend', items: ['Node.js', 'PostgreSQL'], color: '#fdffb6' }
    ]
  },
  {
    type: 'experience',
    title: 'Mes Expériences',
    items: [
      { date: '2024', title: 'Stage Full-stack', desc: 'Développement d\'une app interne.' },
      { date: '2023', title: 'Projet Universitaire', desc: 'Création d\'un site de gestion.' }
    ]
  },
  { type: 'contact', title: 'On reste en contact ?' }
];

export const navigationLabels = ['Intro', 'Skills', 'Experience', 'Contact'];
