const ctx = document.getElementById("resultChart");

let passCount = students.filter(s => s.marks >= 40).length;
let failCount = students.length - passCount;

new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Pass", "Fail"],
    datasets: [{
      data: [passCount, failCount],
      backgroundColor: ["#198754", "#dc3545"]
    }]
  }
});
