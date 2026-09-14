// 1. Генерація плаваючих сердечок на фоні
function createHeart() {
  const container = document.getElementById('hearts-container');
  if (!container) return;

  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  
  const hearts = ['❤️', '💖', '💗', '💕', '🌸'];
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + 'vw';

  const size = Math.random() * 15 + 12;
  heart.style.fontSize = size + 'px';

  const duration = Math.random() * 6 + 6;
  heart.style.animationDuration = duration + 's';

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createHeart, 400);

// 2. Анімація салюту з конфеті
function launchConfetti() {
  const container = document.getElementById('hearts-container');
  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('floating-heart');
      heart.innerText = ['💖', '❤️', '✨', '🌸', '😍'][Math.floor(Math.random() * 5)];
      heart.style.left = (Math.random() * 80 + 10) + 'vw';
      heart.style.bottom = '20vh';
      heart.style.fontSize = (Math.random() * 22 + 16) + 'px';
      heart.style.animationDuration = (Math.random() * 2.5 + 2) + 's';
      container.appendChild(heart);

      setTimeout(() => heart.remove(), 3500);
    }, i * 40);
  }
}

// 3. Логіка відкриття конверта
function openEnvelope() {
  const envelope = document.getElementById('envelope');
  const envelopeWrapper = document.getElementById('envelope-wrapper');
  const letter = document.getElementById('letter');
  const music = document.getElementById('bg-music');

  // Вмикаємо музику
  if (music) {
    music.volume = 0.5;
    music.play().catch(() => {});
  }

  // Відгортаємо клапан конверта
  envelope.classList.add('open');

  // Затримка перед зникненням конверта та появою листа
  setTimeout(() => {
    envelope.style.opacity = '0';
    envelope.style.transform = 'translateY(40px) scale(0.85)';

    setTimeout(() => {
      envelopeWrapper.classList.add('hidden');
      letter.classList.remove('hidden');

      setTimeout(() => {
        letter.classList.add('show');
        launchConfetti(); // Запускаємо салют з конфеті!
      }, 50);
    }, 400);
  }, 500);
}

// 4. Дія при натисканні на кнопку в кінці
function sendLove() {
  alert("Я тебе дуже кохаю! Дякую, що ти в мене є ❤️");
}
