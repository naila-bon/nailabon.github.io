# TODO: Liens bidirectionnels Compétences ↔ Projets

## Objectif
Créer des liens navigables entre les compétences et les projets associés, dans les deux sens.

## Plan d'implémentation

### 1. Modifier `src/data/bookPortfolioData.ts`
- [x] Ajouter un mapping entre les noms de compétences dans les projets et les compétences définies
- [x] Créer une constante pour le mapping `skillKeyMapping`
- [x] Ajouter `skillKey` à chaque compétence dans la page skills

### 2. Modifier `src/components/PageContent.tsx`
- [x] Rendre les badges de compétences cliquables dans la section projets
- [x] Ajouter la navigation vers la page compétences avec highlight
- [x] Mettre en évidence la compétence sélectionnée sur la page compétences
- [x] Effacer le highlight après navigation

### 3. Tester l'expérience utilisateur
- [ ] Cliquer sur compétence → naviguer vers projets avec highlight
- [ ] Cliquer sur compétence dans projet → naviguer vers compétences avec highlight
- [x] Build validé avec succès

## Fonctionnalités implémentées

### Compétences → Projets (déjà existant)
- Chaque compétence a un `highlightProject` qui pointe vers un projet
- Au clic, navigue vers la page projets et illumine le projet correspondant

### Projets → Compétences (NOUVEAU)
- Chaque compétence dans les projets est maintenant un badge cliquable
- Au clic, navigue vers la page compétences et met en évidence la compétence correspondante
- Utilise le mapping pour faire le lien entre les noms ("Développement") et les clés ("realiser")

## Mappage des compétences

| Nom dans projet | Clé compétence | Compétence affichée |
|-----------------|----------------|---------------------|
| Développement | realiser | Réaliser |
| Logique | realiser | Réaliser |
| Optimisation | optimiser | Optimiser |
| Innovation | optimiser | Optimiser |
| Infrastructure | administrer | Administrer |
| Données | gerer | Gérer |
| Pilotage | gerer | Gérer |
| Travail d'équipe | collaborer | Collaborer |
| Communication | collaborer | Collaborer |

