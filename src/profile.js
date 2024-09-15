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

const notificationBtn = document.getElementById('notification-btn');
const notificationPopup = document.getElementById('notification-popup');

notificationBtn.addEventListener('mouseover', () => {
    notificationPopup.style.display = 'block';
});

notificationBtn.addEventListener('click', () => {
    if (notificationPopup.style.display === 'block') {
        notificationPopup.style.display = 'none';
    } else {
        notificationPopup.style.display = 'block';
    }
});

notificationPopup.addEventListener('mouseover', () => {
    notificationPopup.style.display = 'block';
});

function checkIfShouldClose(event) {
    if (!notificationPopup.contains(event.relatedTarget) && !notificationBtn.contains(event.relatedTarget)) {
        notificationPopup.style.display = 'none';
    }
}

notificationBtn.addEventListener('mouseout', checkIfShouldClose);
notificationPopup.addEventListener('mouseout', checkIfShouldClose);