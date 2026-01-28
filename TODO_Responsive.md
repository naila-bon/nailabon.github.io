# TODO - Responsive Design

## Objectif
Rendre le portfolio "livre" responsive pour téléphone et tablette.

## Étapes

### Phase 1: BookPortfolio.tsx - Dimensions responsive
- [ ] Créer un hook `useBookDimensions` pour calculer les dimensions动态 du livre
- [ ] Adapter les largeurs conteneur selon breakpoints (mobile < 600px, tablette 600-900px, desktop > 900px)
- [ ] Ajuster les dimensions HTMLFlipBook dynamiquement

### Phase 2: BookNavigation.tsx - Navigation responsive
- [ ] Rendre les onglets de navigation compacts sur mobile
- [ ] Ajuster l'espacement sur petit écran

### Phase 3: PageContent.tsx - Contenu adaptatif
- [ ] Vérifier/adapter les paddings et marges pour mobile
- [ ] Tester l'affichage des grilles (SimpleGrid) sur petit écran

### Phase 4: Tests et ajustements
- [ ] Tester sur différentes tailles d'écran
- [ ] Ajuster les breakpoints si nécessaire

## Notes
- Breakpoints prévus:
  - Mobile: ~300px de large pour le livre
  - Tablette: ~450px de large
  - Desktop: 500px de large

