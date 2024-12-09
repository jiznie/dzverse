const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const caption1 = document.getElementById('caption1');
const caption2 = document.getElementById('caption2');

video1.addEventListener('touchstart', () => {
    caption1.style.display = 'block';
});

video1.addEventListener('touchend', () => {
    caption1.style.display = 'none';
});

video2.addEventListener('touchstart', () => {
    caption2.style.display = 'block';
});

video2.addEventListener('touchend', () => {
    caption2.style.display = 'none';
});