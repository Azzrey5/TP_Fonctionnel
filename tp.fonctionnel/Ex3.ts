// Exercice 3 — Appliquer plusieurs fois

function applyNTimes(
  f: (x: number) => number,
  n: number,
  x: number
): number {
  let result = x;
  for (let i = 0; i < n; i++) {
    result = f(result);
  }
  return result;
}

const double = (x: number) => x * 2;

console.log("applyNTimes:", applyNTimes(double, 3, 1)); // 8