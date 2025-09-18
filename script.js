const questions = [
  {
    question: "1. What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Machine Language", "Hyperlinks Text Mark Language", "Home Tool Markup Language"],
    correct: 0
  },
  {
    question: "2. Which is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    correct: 1
  },
  {
    question: "3. Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correct: 1
  },
  {
    question: "4. Which gas do humans inhale to survive?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
    correct: 1
  },
  {
    question: "5. What is 5 + 3 × 2?",
    options: ["16", "11", "13", "10"],
    correct: 1
  },
  {
    question: "6. True or False: The Sun is a star.",
    options: ["True", "False"],
    correct: 0
  },
  {
    question: "7. Which tag is used to link JavaScript file in HTML?",
    options: ["<style>", "<script>", "<link>", "<meta>"],
    correct: 1
  },
  {
    question: "8. Capital of France?",
    options: ["Berlin", "Madrid", "Paris", "London"],
    correct: 2
  },
  {
    question: "9. Fill in the blank: CSS stands for ______ Style Sheets.",
    options: ["Creative", "Cascading", "Computer", "Custom"],
    correct: 1
  },
  {
    question: "10. Which year did World War II end?",
    options: ["1945", "1939", "1918", "1960"],
    correct: 0
  },
  {
    question: "11. Which is not a programming language?",
    options: ["Python", "HTML", "Java", "C++"],
    correct: 1
  },
  {
    question: "12. What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correct: 2
  },
  {
    question: "13. Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correct: 1
  },
  {
    question: "14. Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correct: 2
  },
  {
    question: "15. In JavaScript, which keyword is used to declare a variable?",
    options: ["var", "let", "const", "All of the above"],
    correct: 3
  },
  {
    question: "16. True or False: Water freezes at 0°C.",
    options: ["True", "False"],
    correct: 0
  },
  {
    question: "17. The Pyramids are located in which country?",
    options: ["India", "Mexico", "Egypt", "China"],
    correct: 2
  },
  {
    question: "18. Which is the fastest land animal?",
    options: ["Cheetah", "Lion", "Horse", "Tiger"],
    correct: 0
  },
  {
    question: "19. What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correct: 1
  },
  {
    question: "20. Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Osmium", "Oxide", "Oganesson"],
    correct: 0
  }
];

let currentQ = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");

function loadQuestion() {
  const q = questions[currentQ];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option");
    btn.onclick = () => selectOption(btn, i, q.correct);
    optionsEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

function selectOption(button, selected, correct) {
  const optionBtns = document.querySelectorAll(".option");
  optionBtns.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    optionBtns[correct].classList.add("correct");
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  scoreContainer.textContent = `🎉 Quiz Completed! Your Score: ${score} / ${questions.length}`;
}

loadQuestion();
