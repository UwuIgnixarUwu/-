function setupCalculator(calcId, displayId, historyId, isEngineer = false) {
    const calc = document.getElementById(calcId);
    const display = document.getElementById(displayId);
    const history = document.getElementById(historyId);
    let current = '';
    let last = '';

    const functions = ['sin(', 'cos(', 'tan(', 'ln(', 'log(', 'sqrt(', 'abs('];

    calc.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
            
            const action = btn.dataset.action;

            if (current === 'Ошибка') current = '';

            if (!action) {
                current += btn.textContent;
            } else if (action === 'clear') {
                current = '';
                last = '';
            } else if (action === 'delete') {
                let removed = false;
                for (let func of functions) {
                    if (current.endsWith(func)) {
                        current = current.slice(0, -func.length);
                        removed = true;
                        break;
                    }
                }
                if (!removed) current = current.slice(0, -1);
            } else if (action === '=') {
                if (current === '' || !isValidExpression(current)) {
                    current = 'Ошибка';
                } else {
                    try {
                        let expr = current.replace(/π/g, Math.PI)
                            .replace(/e/g, Math.E)
                            .replace(/\^/g, '**')
                            .replace(/√/g, 'Math.sqrt(')
                            .replace(/ln\(/g, 'Math.log(')
                            .replace(/log\(/g, 'Math.log10(')
                            .replace(/sin\(/g, 'Math.sin(')
                            .replace(/cos\(/g, 'Math.cos(')
                            .replace(/tan\(/g, 'Math.tan(')
                            .replace(/abs\(/g, 'Math.abs(');
                        let result = eval(expr);
                        last = current + ' = ' + result;
                        current = result;
                    } catch (e) {
                        current = 'Ошибка';
                    }
                }
            } else {
                const operators = ['+', '-', '*', '/'];
                if (operators.includes(action) && operators.includes(current.slice(-1))) {
                    current = current.slice(0, -1);
                }
                current += action;
            }

            display.value = current;
            history.textContent = last;
        });
    });
}

function isValidExpression(expr) {
    if (!expr) return false;
    let stack = [];
    for (let char of expr) {
        if (char === '(') stack.push('(');
        if (char === ')') {
            if (!stack.length) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}

setupCalculator('normalCalc', 'displayNormal', 'historyNormal');
setupCalculator('engineerCalc', 'displayEngineer', 'historyEngineer', true);

function flyAndSwitch(fromCalc, toCalc, callback) {
    const buttons = Array.from(fromCalc.querySelectorAll('.btn'));
    const rectCalc = fromCalc.getBoundingClientRect();
    const centerX = rectCalc.left + rectCalc.width / 2;
    const centerY = rectCalc.top + rectCalc.height / 2;
    const radius = Math.max(rectCalc.width, rectCalc.height) * 1.2;
    const duration = 3000;

    // Кружение и разлет кнопок
    buttons.forEach((btn, index) => {
        const rect = btn.getBoundingClientRect();
        const clone = btn.cloneNode(true);
        clone.style.position = 'fixed';
        clone.style.left = rect.left + 'px';
        clone.style.top = rect.top + 'px';
        clone.style.color = 'red';
        clone.style.zIndex = 1000;
        document.body.appendChild(clone);

        const angle = (index / buttons.length) * Math.PI * 2;
        const start = performance.now();

        function animate(time) {
            const elapsed = time - start;
            const t = Math.min(elapsed / duration, 1);

            const spiralRadius = radius * t * 1.5;
            clone.style.left = centerX + Math.cos(angle + t * 6 * Math.PI) * spiralRadius - clone.offsetWidth / 2 + 'px';
            clone.style.top = centerY + Math.sin(angle + t * 6 * Math.PI) * spiralRadius - clone.offsetHeight / 2 + 'px';
            clone.style.transform = `rotate(${t * 1080}deg)`;
            clone.style.opacity = 1 - t;

            if (t < 1) requestAnimationFrame(animate);
            else clone.remove();
        }
        requestAnimationFrame(animate);
    });

    // Плавное исчезание и появление калькуляторов
    let startFade = performance.now();
    function fadeAnimation(time) {
        const elapsed = time - startFade;
        const t = Math.min(elapsed / duration, 1);

        fromCalc.style.opacity = 1 - t;
        toCalc.style.opacity = t;
        toCalc.style.pointerEvents = t < 0.5 ? 'none' : 'auto';

        if (t < 1) requestAnimationFrame(fadeAnimation);
        else {
            fromCalc.style.pointerEvents = 'none';
            if (callback) callback();
        }
    }
    requestAnimationFrame(fadeAnimation);
}

const toEngineer = document.getElementById('toEngineer');
const toNormal = document.getElementById('toNormal');
const normalCalc = document.getElementById('normalCalc');
const engineerCalc = document.getElementById('engineerCalc');

toEngineer.addEventListener('click', () => {
    flyAndSwitch(normalCalc, engineerCalc);
    toEngineer.style.display = 'none';
    toNormal.style.display = 'inline-block';
});

toNormal.addEventListener('click', () => {
    flyAndSwitch(engineerCalc, normalCalc);
    toNormal.style.display = 'none';
    toEngineer.style.display = 'inline-block';
});

