// Exercice 2 — Mettre à jour sans muter

const student = { name: "Léo", grade: 14 };

function updateGrade(
  student: { name: string; grade: number },
  newGrade: number
) {
  return { ...student, grade: newGrade };
}

const updatedStudent = updateGrade(student, 18);

console.log("Original:", student);        // grade = 14
console.log("Updated:", updatedStudent);  // grade = 18