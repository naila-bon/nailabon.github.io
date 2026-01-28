# TODO: Correction des liens bidirectionnels Compétences ↔ Projets

## Objectif
Corriger le bug de page qui suit la souris et améliorer les liens bidirectionnels entre compétences et projets.

## Tâches à effectuer

### 🔧 Bug Fix - Priorité Haute
- [ ] 1. Corriger stopPropagation pour HTMLFlipBook dans PageContent.tsx
- [ ] 2. Ajouter nativeEvent.stopImmediatePropagation()
- [ ] 3. Empêcher les doubles clics sur les badges

### 🎨 Améliorations Visuelles
- [ ] 4. Indicator clair (↗) sur les badges de compétences cliquables
- [ ] 5. Feedback visuel "lien hypertexte" (couleur, underline au hover)
- [ ] 6. Animation de transition fluide

### 🔄 Navigation
- [ ] 7. Scroll automatique vers la capacité mise en évidence
- [ ] 8. Nettoyer sessionStorage après navigation

### ✅ Tests
- [ ] 9. Tester les clics depuis la page Projets
- [ ] 10. Tester les clics depuis la page Compétences
- [ ] 11. Vérifier l'absence de freeze

---

## Notes techniques

### Problème identifié
Le composant HTMLFlipBook capture les événements souris de manière spéciale.
Les clics sur les badges se propagent au flipbook et causent un comportement étrange.

### Solution
```typescript
// Empêcher toute propagation
e.preventDefault();
e.stopPropagation();
e.nativeEvent.stopImmediatePropagation();

// Désactiver pointer-events après clic
setTimeout(() => {
  (e.target as HTMLElement).style.pointerEvents = 'none';
}, 100);
```

### Fichiers à modifier
- `src/components/PageContent.tsx` - handler de clic sur les badges

