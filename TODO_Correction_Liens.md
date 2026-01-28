# TODO: Correction des liens bidirectionnels

## Objectif
Corriger le bug où la page "suit" la souris après clic sur un badge de compétence.

## Plan d'implémentation

### Étape 1: Modifier handleSkillClick dans PageContent.tsx
- [x] 1.1 Ajouter désactivation temporaire des pointer-events après clic
- [x] 1.2 Améliorer stopPropagation avec multiple méthodes
- [x] 1.3 Ajouter délai plus long (150ms) pour éviter les conflits

### Étape 2: Modifier les gestionnaires onClick des badges
- [x] 2.1 Ajouter projectId et index aux appels handleSkillClick
- [x] 2.2 Implémenter disablePointerEvents après clic
- [x] 2.3 Réactiver pointer-events après navigation

### Étape 3: Nettoyer sessionStorage
- [x] 3.1 Suppression de highlightSkill déjà implémentée dans la navigation inverse

## Progression
- [x] TODO créé
- [x] PageContent.tsx modifié
- [x] Build réussi (pas d'erreurs TypeScript)
- [ ] Test de navigation compétences → projets
- [ ] Test de navigation projets → compétences


