const answers = [
  "Ο Παρθενώνας ολοκληρώθηκε το 438 π.Χ.",
  "Ο Παρθενώνας βρίσκεται στην Αθήνα.",
  "Ο Παρθενώνας ήταν αφιερωμένος στη θεά Αθηνά.",
  "Ο Παρθενώνας ακολουθεί τον δωρικό ρυθμό.",
  "Ο Παρθενώνας κατασκευάστηκε κυρίως από μάρμαρο."
];

const questions = [
  "Πότε ολοκληρώθηκε ο Παρθενώνας;",
  "Πού βρίσκεται ο Παρθενώνας;",
  "Σε ποια θεά ήταν αφιερωμένος ο Παρθενώνας;",
  "Ποιο ρυθμό αρχιτεκτονικής ακολουθεί ο Παρθενώνας;",
  "Ποιο υλικό χρησιμοποιήθηκε κυρίως για την κατασκευή;"
];

// Γραφομηχανή: Εμφανίζει το κείμενο χαρακτήρα-χαρακτήρα
function typeWriterEffect(element, text, speed = 40) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

function showAnswer(index) {
  const chatWindow = document.getElementById("chat-window");

  // Απόκρυψη κουμπιών ερωτήσεων
  const buttons = chatWindow.querySelectorAll(".question-button");
  buttons.forEach(btn => btn.style.display = "none");

  // Προσθήκη μηνύματος χρήστη
  const userMessage = document.createElement("div");
  userMessage.classList.add("message", "user");
  userMessage.textContent = questions[index];
  chatWindow.appendChild(userMessage);

  // Προσθήκη απάντησης bot με εφέ
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");
    chatWindow.appendChild(botMessage);
    typeWriterEffect(botMessage, answers[index], 40); // ταχύτητα χαρακτήρων
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, 500);

  // Εμφάνιση κουμπιού επανεμφάνισης
  document.querySelector(".show-questions-button").style.display = "block";
}

function restartChat() {
  const chatWindow = document.getElementById("chat-window");

  // Καθαρίζει τα προηγούμενα μηνύματα
  chatWindow.querySelectorAll(".message").forEach(el => el.remove());

  // Επαναφέρει τα κουμπιά ερωτήσεων
  chatWindow.querySelectorAll(".question-button").forEach(btn => btn.style.display = "block");

  // Κρύβει το κουμπί επαναφοράς
  document.querySelector(".show-questions-button").style.display = "none";
}

window.onload = () => {
  document.querySelector(".show-questions-button").style.display = "none";
};
