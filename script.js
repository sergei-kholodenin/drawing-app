const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorEl = document.getElementById("color");
const btnDec = document.getElementById("decrease");
const btnInc = document.getElementById("increase");
const sizeEl = document.querySelector(".size");
const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

let size = 20,
    isPressed = false,
    color = 'black',
    x, y;

colorEl.addEventListener("change", (e) => {
    color = e.target.value;
});

btnDec.addEventListener('click', () => {
    size -= 5;
    if (size < 5) {
        size = 5;
    }
    sizeEl.textContent = `${size}`;

});

btnInc.addEventListener('click', () => {
    size += 5;
    if (size > 35) {
        size = 35;
    }
    sizeEl.textContent = `${size}`;

});

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        x2 = e.offsetX;
        y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
