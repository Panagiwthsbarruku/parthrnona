const images = [
 "https://media.istockphoto.com/id/1471834066/photo/athens-acropolis-with-parthenon-at-sunset-greece.webp?a=1&b=1&s=612x612&w=0&k=20&c=AqGnclNH2teLbUq_Luf6baxCqwt3sjECUUZVjvoRIWM=",
 "https://media.istockphoto.com/id/1789563168/photo/cariatides-porch-erechtheion-on-acropolis-of-athens-against-blue-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=DVFB6ixWyBbbTs3rB-JvXjZ8262TTd1HKe0_Ma4M7_o=",
  "https://images.unsplash.com/photo-1634562335144-2b7826446953?w=600",
  "https://images.unsplash.com/photo-1697455621605-751452417ce3?w=600",
  "https://images.unsplash.com/photo-1684451850726-4b4d7dad0159?w=600",
  "https://images.unsplash.com/photo-1658175710756-ecd7b10017c6?w=600"
];

let currentIndex = 0;

function showImage(index) {
  document.getElementById("carousel-img").src = images[index];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

const questions = [
  {
    question: "Πότε ολοκληρώθηκε ο Παρθενώνας;",
    options: ["500 π.Χ.", "438 π.Χ.", "600 π.Χ."],
    answer: "438 π.Χ."
  },
  {
    question: "Πού βρίσκεται ο Παρθενώνας;",
    options: ["Ρώμη", "Αθήνα", "Κωνσταντινούπολη"],
    answer: "Αθήνα"
  },
  {
    question: "Σε ποια θεά ήταν αφιερωμένος ο Παρθενώνας;",
    options: ["Αθηνά", "Αφροδίτη", "Ήρα"],
    answer: "Αθηνά"
  },
  {
    question: "Ποιο ρυθμό αρχιτεκτονικής ακολουθεί ο Παρθενώνας;",
    options: ["Δωρικός", "Ιωνικός", "Κορινθιακός"],
    answer: "Δωρικός"
  },
  {
    question: "Ποιο υλικό χρησιμοποιήθηκε κυρίως για την κατασκευή;",
    options: ["Ασβεστόλιθος", "Μάρμαρο", "Γρανίτης"],
    answer: "Μάρμαρο"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("quiz-question");
const optionsEl = document.querySelectorAll(".quiz-options button");
const resultEl = document.getElementById("quiz-result");

function loadQuestion() {
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;
  optionsEl.forEach((btn, i) => {
    btn.textContent = q.options[i];
  });
  resultEl.textContent = "";
}

function checkAnswer(btn) {
  const correct = questions[currentQuestionIndex].answer;
  if (btn.textContent === correct) {
    score++;
    resultEl.textContent = "✅ Σωστό!";
    resultEl.style.color = "lightgreen";
  } else {
    resultEl.textContent = "❌ Λάθος!";
    resultEl.style.color = "red";
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showFinalScore();
    }
  }, 1000);
}

function showFinalScore() {
  questionEl.textContent = `Ολοκλήρωσες το κουίζ! 🎉`;
  document.querySelector(".quiz-options").innerHTML = "";
  resultEl.textContent = `Σκορ: ${score} / ${questions.length}`;
  resultEl.style.color = "gold";
}

loadQuestion();
