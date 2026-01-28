# TODO - Page Contact en double page

## Objectif
Transformer la page Contact en double page:
- **Page gauche**: Formulaire de contact (nom, email, message)
- **Page droite**: Liens sociaux centrés au milieu

## Plan de modification

### Étape 1: Modifier bookPortfolioData.ts
- Créer deux nouvelles pages: `contact-left` et `contact-right`
- Garder le même contenu (socials, items) mais séparé sur les deux pages

### Étape 2: Modifier PageContent.tsx
- Ajouter le case `contact-left` pour le formulaire de contact
- Ajouter le case `contact-right` pour les liens sociaux centrés
- Garder le style cohérent avec le reste du portfolio

### Étape 3: Ajuster la navigation
- La page "Contact" (index 6) doit pointer vers la page gauche (page 6)
- La page droite sera automatiquement page 7

## Fichiers à modifier
- `src/data/bookPortfolioData.ts`
- `src/components/PageContent.tsx`

## Progression
- [x] Créer les nouvelles pages contact-left et contact-right dans bookPortfolioData.ts
- [x] Implémenter le formulaire de contact dans PageContent.tsx
- [x] Implémenter les liens sociaux centrés dans PageContent.tsx

