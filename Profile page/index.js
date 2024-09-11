const chartData = {
    labels: ["mastered", "pending"],
    data: [60, 40],
  };

  const Mychart = document.getElementById("myChart");

  new Chart(Mychart, {
    type: "doughnut",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "Skill Proficiency",
          data: chartData.data,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });