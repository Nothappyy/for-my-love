function openEnvelope() {
  const envelope = document.getElementById('envelope');
  const letter = document.getElementById('letter');
  const music = document.getElementById('bg-music');

  // 1. Вмикаємо фонову музику
  if (music) {
    music.volume = 0.5; // Гучність (50%)
    music.play().catch(error => {
      console.log("Автовідтворення перехоплено браузером:", error);
    });
  }

  // 2. Анімація згортання конверта
  envelope.style.transform = 'scale(0.8) translateY(-20px)';
  envelope.style.opacity = '0';

  // 3. Відкриття листа з анімацією
  setTimeout(() => {
    envelope.classList.add('hidden');
    letter.classList.remove('hidden');

    // Плавна поява листа через невелику затримку
    setTimeout(() => {
      letter.classList.add('show');
    }, 50);
  }, 400);
}
