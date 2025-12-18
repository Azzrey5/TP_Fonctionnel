const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

// Exercice 5.1 — find
const firstAdult = users.find(u => u.age >= 18);
console.log("First adult:", firstAdult);

// Exercice 5.2 — some / every
const hasMinor = users.some(u => u.age < 18);
const allAbove10 = users.every(u => u.age > 10);

console.log("Has minor:", hasMinor);
console.log("All above 10:", allAbove10);

// Exercice 5.3 — includes
const names = users.map(u => u.name);

console.log("Includes Alice:", names.includes("Alice"));
console.log("Includes Eve:", names.includes("Eve"));

// Exercice 5.4 — flatMap
const usersWithHobbies = [
  { name: "Alice", hobbies: ["climbing", "yoga"] },
  { name: "Bob", hobbies: ["gaming"] },
  { name: "Charlie", hobbies: ["reading", "hiking"] },
];

const allHobbies = usersWithHobbies.flatMap(u => u.hobbies);
console.log("All hobbies:", allHobbies);

// Exercice 5.5 — sort et slice
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
const twoYoungest = sortedByAge.slice(0, 2);

console.log("Sorted by age:", sortedByAge);
console.log("Two youngest:", twoYoungest);