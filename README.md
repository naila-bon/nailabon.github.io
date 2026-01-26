# 📚 Structure du Portfolio Book

## 📁 Arborescence complète

```
src/
├── components/
│   ├── Book/
│   │   ├── Book.tsx              # Composant principal du livre
│   │   ├── BookPage.tsx          # Page individuelle avec texture
│   │   ├── BookSpread.tsx        # Double page avec reliure
│   │   └── BookNav.tsx           # Navigation (LT/RT + onglets)
│   │
│   ├── Pages/
│   │   ├── CoverPage.tsx         # Page de couverture
│   │   ├── AboutPage.tsx         # À propos
│   │   ├── SkillsPage.tsx        # Compétences (gauche/droite)
│   │   ├── ProjectsPage.tsx      # Projets (pro/perso)
│   │   ├── CVPage.tsx            # CV
│   │   └── ContactPage.tsx       # Contact
│   │
│   └── UI/
│       ├── SkillCard.tsx         # Carte de compétence réutilisable
│       ├── ProjectCard.tsx       # Carte de projet réutilisable
│       └── TabBookmark.tsx       # Onglet marque-page
│
├── data/
│   ├── types.ts                  # Types TypeScript
│   ├── skills.ts                 # Données des compétences
│   └── projects.ts               # Données des projets
│
├── App.tsx                        # App principale
├── App.css                        # Styles globaux
└── main.tsx                       # Point d'entrée
```

## 🎯 Comment ça fonctionne

### 1. **Book.tsx** (Composant principal)
- Gère l'état de navigation (page courante, animation)
- Définit les "spreads" (doubles pages)
- Orchestre tous les composants

### 2. **BookSpread.tsx** (Double page)
- Assemble 2 BookPage (gauche + droite)
- Ajoute la reliure centrale
- Gère l'effet 3D

### 3. **BookPage.tsx** (Page unique)
- Texture de papier
- Ombre de profondeur
- Hints de navigation

### 4. **BookNav.tsx** (Navigation)
- Onglets en haut (marque-pages)
- Boutons LT/RT
- Compteur de pages

### 5. **Pages/** (Contenu)
- Chaque page est un composant indépendant
- Utilise les composants UI réutilisables
- Données importées depuis `/data`

### 6. **UI/** (Composants réutilisables)
- `SkillCard` : affiche une compétence avec barre de progression
- `ProjectCard` : affiche un projet avec technologies et liens
- `TabBookmark` : onglet cliquable pour navigation

### 7. **data/** (Données)
- `types.ts` : interfaces TypeScript
- `skills.ts` : toutes les compétences (techniques/transversales)
- `projects.ts` : tous les projets (pro/perso)

## 🔧 Installation

```bash
# Installer les dépendances
npm install lucide-react

# Lancer le projet
npm run dev
```

## ✏️ Personnalisation

### Modifier vos données

1. **Compétences** → `src/data/skills.ts`
2. **Projets** → `src/data/projects.ts`
3. **Informations personnelles** → `src/components/Pages/AboutPage.tsx`

### Ajouter une nouvelle section

1. Créer un nouveau composant dans `src/components/Pages/`
2. L'ajouter dans l'array `spreads` de `Book.tsx`
3. Ajouter le cas dans `renderContent()` de `Book.tsx`

### Changer les couleurs

Les couleurs sont définies dans chaque spread :
```typescript
{ 
  id: 'skills', 
  color: 'bg-blue-500',  // ← Changer ici
  // ...
}
```

## 📦 Dépendances

- **React** : framework UI
- **TypeScript** : typage statique
- **Tailwind CSS** : styles utilitaires
- **lucide-react** : icônes

## ✅ Conforme aux consignes

- ✅ Menu toujours visible (onglets en haut)
- ✅ Toutes les sections requises
- ✅ Liens Compétences ↔ Projets
- ✅ Design cohérent et ergonomique
- ✅ Structure modulaire et maintenable
- ✅ Sans jargon BUT

## 🚀 Déploiement sur GitHub Pages

Le projet est configuré avec Vite, prêt pour GitHub Pages.

```bash
npm run build
npm run deploy
```

## 📝 Notes

- Les données sont mockées, remplacez-les par vos vraies infos
- Les liens CV doivent pointer vers vos vrais fichiers PDF
- Ajoutez votre vraie photo dans AboutPage
- Configurez le formulaire de contact avec un vrai service (EmailJS, Formspree, etc.)