// Navigasi halaman
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

// Chat AI sederhana
function sendMessage() {
  const input = document.getElementById('user-input');
  const chatWindow = document.getElementById('chat-window');

  if(input.value.trim() === "") return;

  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble user';
  userBubble.textContent = input.value;
  chatWindow.appendChild(userBubble);

  // Balasan AI sederhana
  const aiBubble = document.createElement('div');
  aiBubble.className = 'chat-bubble ai';
  aiBubble.textContent = "Ini jawaban singkat untuk: " + input.value;
  chatWindow.appendChild(aiBubble);

  chatWindow.scrollTop = chatWindow.scrollHeight;
  input.value = "";
}

// Quiz interaktif
let score = 0;
function checkAnswer(btn) {
  if(btn.textContent === "Daun") {
    alert("Benar!");
    score += 10;
  } else {
    alert("Salah!");
  }
  document.getElementById('score').textContent = score;
}
