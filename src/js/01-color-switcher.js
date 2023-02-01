function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

startBtn.disabled = false;

startBtn.addEventListener('click', startAction);
stopBtn.addEventListener('click', stopAction);

function startAction() {
  startBtn.disabled = true;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    console.log(document.body.style.backgroundColor);
  }, 1000);
}

function stopAction() {
  clearInterval(timerId);
  startBtn.disabled = false;
}
