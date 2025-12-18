// Exercice 1 — Fonction pure vs impure

let counter = 0;

// Fonction pure
function add(a: number, b: number): number {
  return a + b;
}

// Fonction impure (effet de bord)
function increment(): number {
  counter++;
  return counter;
}

/*
Pourquoi add est prévisible ?
Elle dépend uniquement de ses paramètres.

Pourquoi increment ne l’est pas ?
Elle modifie une variable externe.
*/