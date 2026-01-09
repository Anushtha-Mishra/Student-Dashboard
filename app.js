const students = JSON.parse(localStorage.getItem("students"));
const table = document.getElementById("studentTable");

function getGrade(marks) {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 60) return "C";
  if (marks >= 40) return "D";
  return "F";
}

function loadTable() {
  table.innerHTML = "";
  let total = 0, pass = 0, fail = 0;

  students.forEach(s => {
    const grade = getGrade(s.marks);
    const status = s.marks >= 40 ? "Pass" : "Fail";

    if (status === "Pass") pass++; else fail++;
    total += s.marks;

    table.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.roll}</td>
        <td>${s.subject}</td>
        <td>${s.marks}</td>
        <td>${grade}</td>
        <td class="${status === "Pass" ? "text-success" : "text-danger"}">${status}</td>
      </tr>
    `;
  });

  document.getElementById("totalStudents").innerText = students.length;
  document.getElementById("avgMarks").innerText = (total / students.length).toFixed(1);
  document.getElementById("passFail").innerText = `${pass} / ${fail}`;
}

loadTable();
