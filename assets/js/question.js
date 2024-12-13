let currentQuestion = 0;
const totalQuestions = document.querySelectorAll(".question").length;
const progressBar = document.getElementById("progress-bar");
const questionNumber = document.getElementById("question-number");
const nextButton = document.getElementById("next-button");
let timeLeft = 1 * 60 * 60;
let timer;

function startTimer() {
  const timerElement = document.getElementById("timer");
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswers();
    } else {
      timeLeft--;
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `${hours}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
  }, 1000);
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  progressBar.value = progress;
  questionNumber.textContent = `Question ${
    currentQuestion + 1
  }/${totalQuestions}`;
}

function showQuestion(index) {
  document.querySelectorAll(".question").forEach((question, i) => {
    question.style.display = i === index ? "block" : "none";
  });
  if (index === totalQuestions - 1) {
    nextButton.textContent = "Finish";
    nextButton.style.backgroundColor = "red";
    nextButton.style.color = "white";
    nextButton.style.removeProperty("border-color");
    nextButton.style.left = "58%";
    nextButton.style.marginLeft = "25%";
  } else {
    nextButton.textContent = "Next question";
  }
  updateProgress();
}

function nextQuestion() {
  if (currentQuestion < totalQuestions - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    clearInterval(timer);
    checkAnswers();
  }
}

function checkAnswers() {
  const quizForm = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");
  const scoreChartCanvas = document.getElementById("scoreChart");

  let score = 0;

  const answers = {
    q1: "a",
    q2: "c",
    q3: "a",
    q4: "a",
    q5: "b",
    q6: "b",
    q7: "d",
    q8: "b",
    q9: "a",
    q10: "b",
    q11: "a",
    q12: "b",
    q13: "a,d",
    q14: "d",
    q15: "c",
    q16: "b",
    q17: "d",
    q18: "d",
    q19: "b",
    q20: "a",
  };

  const formData = new FormData(quizForm);

  for (const [question, answer] of formData.entries()) {
    if (answers[question] === answer) {
      score++;
    }
  }

  resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} correct.`;

  // document.querySelector('.question').style.display = 'none';
  document.getElementById("quiz-form").style.display = "none";
  document.querySelector(".next-container").style.display = "none";

  nextButton.style.display = "none";

  // Display the result and chart container
  resultDiv.style.display = "block";
  document.getElementById("container-pie").style.display = "block";
  //retake test
  const retakeButton = document.getElementById("retake");

  // Add a click event listener to the button
  retakeButton.addEventListener("click", function () {
    // Refresh the page
    location.reload();
  });

  fetch("/account", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      score: score,
      date: new Date().toISOString(),
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Test results saved:", data);
    })
    .catch((error) => {
      console.error("Error saving test results:", error);
    });

  const ctx = scoreChartCanvas.getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Correct", "Incorrect"],
      datasets: [
        {
          data: [score, totalQuestions - score],
          backgroundColor: ["#28a745", "#dc3545"],
          hoverBackgroundColor: ["#218838", "#c82333"],
          borderColor: ["#fff", "#fff"],
          borderWidth: 2,
          borderRadius: 900,
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "80%",
      rotation: -0.5 * Math.PI,
      plugins: {
        legend: {
          position: "top",
          labels: {
            font: {
              size: 16,
            },
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || "";
              if (label) {
                label += ": ";
              }
              label += context.raw;
              label += ` (${((context.raw / totalQuestions) * 100).toFixed(
                2
              )}%)`;
              return label;
            },
          },
        },
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    },
  });
}

showQuestion(currentQuestion);
startTimer();
