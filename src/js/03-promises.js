import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');
const createBtn = document.querySelector('form > button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(position, delay);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

createBtn.addEventListener('click', event => {
  event.preventDefault();
  const count = parseInt(amountEl.value);
  const delayValue = parseInt(delayEl.value);
  const stepValue = parseInt(stepEl.value);
  let delay = 0;

  for (let i = 1; i <= count; i++) {
    if (i === 1) {
      delay = delayValue;
    } else {
      delay = delayValue + stepValue * (i - 1);
    }

    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
