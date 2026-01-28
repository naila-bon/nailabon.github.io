# TODO - Correction du bouton Projets dans le menu

## Problème identifié
Le bouton "Projets" du menu de navigation ne fonctionne pas correctement car:
- Le mapping des pages utilise l'index du label (3) au lieu de l'index réel de la page Projets (4)

## Plan de correction

### Étape 1: Corriger le mapping dans BookNavigation.tsx
- Modifier le composant pour utiliser un mapping correct des pages
- Accueil (0) → page 0
- Parcours (1) → page 1
- Compétences (2) → pages 2-3 (skills-left et skills-right)
- **Projets (3) → page 4 (projects-grid-left)** ← CORRECTION ICI
- Contact (4) → page 6

### Étape 2: Tester la navigation
- Vérifier que tous les boutons du menu fonctionnent
- S'assurer que la transition vers la page Projets fonctionne

## Fichiers à modifier
- `src/components/BookNavigation.tsx`

## Progression
- [x] Corriger le mapping des pages dans BookNavigation.tsx
- [x] Tester la navigation vers "Projets"

