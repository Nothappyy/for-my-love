function openEnvelope() {
  const envelope = document.getElementById('envelope');
  const letter = document.getElementById('letter');

  // Анімація зникнення конверта
  envelope.style.transform = 'scale(0.9) translateY(-10px)';
  envelope.style.opacity = '0';

  setTimeout(() => {
    envelope.classList.add('hidden');
    letter.classList.remove('hidden');
  }, 350);
}