const container = document.getElementById('floating-container');
const items = ['🍺', '🍻', '💵', '💰', '💸', '🎮'];

function createFloatingItem() {
    const item = document.createElement('div');
    item.classList.add('floating-item');
    
    // Вибираємо випадковий емодзі (пиво, гроші, джойстик)
    item.innerText = items[Math.floor(Math.random() * items.length)];
    
    // Випадкова позиція по ширині
    item.style.left = Math.random() * 100 + 'vw';
    
    // Випадковий розмір
    const size = Math.random() * 1.5 + 1.5; // від 1.5rem до 3rem
    item.style.fontSize = `${size}rem`;
    
    // Випадкова тривалість анімації (від 4 до 8 секунд)
    const duration = Math.random() * 4 + 4;
    item.style.animationDuration = `${duration}s`;
    
    container.appendChild(item);
    
    // Видаляємо елемент після закінчення анімації
    setTimeout(() => {
        item.remove();
    }, duration * 1000);
}

// Створюємо нові елементи кожні 300 мс
setInterval(createFloatingItem, 300);

// Обробка натискання кнопки
const button = document.getElementById('action-btn');
const secretMessage = document.getElementById('secret-message');

button.addEventListener('click', () => {
    secretMessage.classList.toggle('hidden');
    
    // Запуск спавну додаткових грошей і пива при кліку
    for (let i = 0; i < 15; i++) {
        setTimeout(createFloatingItem, i * 50);
    }
});