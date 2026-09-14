// Генератор плаваючих сердечок на фоні
function createHeart() {
  const container = document.getElementById('hearts-container');
  if (!container) return;

  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  
  // Випадкові символи сердечок
  const hearts = ['❤️', '💖', '💗', '💕', '🌸'];
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

  // Випадкова позиція по ширині
  heart.style.left = Math.random() * 100 + 'vw';

  // Випадковий розмір
  const size = Math.random() * 15 + 12; // від 12px до 27px
  heart.style.fontSize = size + 'px';

  // Випадкова тривалість анімації (від 6 до 12 секунд)
  const duration = Math.random() * 6 + 6;
  heart.style.animationDuration = duration + 's';

  container.appendChild(heart);

  // Видаляємо елемент після завершення анімації
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Запускаємо створення сердечок кожні 400мс
setInterval(createHeart, 400);

// Логіка відкриття конверта
function openEnvelope() {
  const envelope = document.getElementById('envelope');
  const letter = document.getElementById('letter');
  const music = document.getElementById('bg-music');

  // Вмикаємо фонову музику
  if (music) {
    music.volume = 0.5;
    music.play().catch(error => {
      console.log("Автовідтворення перехоплено браузером:", error);
    });
  }

  // Анімація згортання конверта
  envelope.style.transform = 'scale(0.8) translateY(-20px)';
  envelope.style.opacity = '0';

  setTimeout(() => {
    envelope.classList.add('hidden');
    letter.classList.remove('hidden');

    setTimeout(() => {
      letter.classList.add('show');
    }, 50);
  }, 400);
}
