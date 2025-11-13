const generateBtn = document.getElementById('generate');
const result = document.getElementById('result');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');

generateBtn.addEventListener('click', () => {
    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);

    if (isNaN(min) || isNaN(max) || min > max) {
        result.textContent = "Неверные значения!";
        result.classList.add('error');
        return;
    }

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    result.textContent = randomNum;
    result.classList.remove('error');

    // Лёгкая анимация появления числа
    result.style.transform = 'scale(1.3)';
    result.style.opacity = '0.6';
    setTimeout(() => {
        result.style.transform = 'scale(1)';
        result.style.opacity = '1';
    }, 100);
});
