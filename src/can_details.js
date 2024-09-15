const notificationBtn = document.getElementById("notification-btn");
const notificationPopup = document.getElementById("notification-popup");

notificationBtn.addEventListener("mouseover", () => {
  notificationPopup.style.display = "block";
});

notificationBtn.addEventListener("click", () => {
  if (notificationPopup.style.display === "block") {
    notificationPopup.style.display = "none";
  } else {
    notificationPopup.style.display = "block";
  }
});

notificationPopup.addEventListener("mouseover", () => {
  notificationPopup.style.display = "block";
});

function checkIfShouldClose(event) {
  if (
    !notificationPopup.contains(event.relatedTarget) &&
    !notificationBtn.contains(event.relatedTarget)
  ) {
    notificationPopup.style.display = "none";
  }
}

notificationBtn.addEventListener("mouseout", checkIfShouldClose);
notificationPopup.addEventListener("mouseout", checkIfShouldClose);

document.getElementById("edit-btn").addEventListener("click", function () {
  const dataFields = document.querySelectorAll(".profile-data");

  dataFields.forEach((field) => {
    const value = field.innerText;
    const input = document.createElement("input");
    input.type = "text";
    input.value = value;
    input.classList.add("profile-input");
    field.replaceWith(input);
  });

  document.getElementById("edit-btn").style.display = "none";
  document.getElementById("save-btn").style.display = "block";
});

document.getElementById("save-btn").addEventListener("click", function () {
  const inputFields = document.querySelectorAll(".profile-input");

  inputFields.forEach((input) => {
    const value = input.value;
    const span = document.createElement("span");
    span.innerText = value;
    span.classList.add("profile-data");
    input.replaceWith(span);
  });

  document.getElementById("edit-btn").style.display = "block";
  document.getElementById("save-btn").style.display = "none";
});

function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more-text");
  const btnText = document.getElementById("read-more-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}
