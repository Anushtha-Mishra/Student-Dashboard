const defaultStudents = [
  { name: "Aman Sharma", roll: "CS101", subject: "Maths", marks: 78 },
  { name: "Riya Patel", roll: "CS102", subject: "Physics", marks: 92 },
  { name: "Aditya Verma", roll: "CS103", subject: "Chemistry", marks: 45 },
  { name: "Neha Singh", roll: "CS104", subject: "Maths", marks: 66 }
];

if (!localStorage.getItem("students")) {
  localStorage.setItem("students", JSON.stringify(defaultStudents));
}
