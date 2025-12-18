const numbers = [1, 2, 3, 4, 5, 6];

// Exercice 4.1 — Filtrer, transformer, sommer

const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0);

console.log("Exercice 4.1:", result); // 24


// Exercice 4.2 — sum, average, product

function sum(arr: number[]): number {
  return arr.reduce((acc, n) => acc + n, 0);
}

function average(arr: number[]): number {
  return arr.length === 0 ? 0 : sum(arr) / arr.length;
}

function product(arr: number[]): number {
  return arr.reduce((acc, n) => acc * n, 1);
}

console.log("sum:", sum(numbers));
console.log("average:", average(numbers));
console.log("product:", product(numbers));