"use strict";

// перевод значения таймера 
function formatTimeLeft(time) {
  const minutes = Math.floor(time / 60);

  let seconds = time % 60;
  
  if (seconds < 10) {
    seconds = `0${seconds}`
  }

  return `${minutes}:${seconds}`;
}

// обратный отчет таймера
function startTimer() {
  let timerInterval = setInterval(() => {

    timePassed = timePassed + 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("timer").innerHTML = `${formatTimeLeft(timeLeft)}`;
    if (timeLeft == 0) clearInterval(timerInterval);
  }, 1000);
  // как вариант решения
  setTimeout(() => { clearInterval(timerInterval); }, TIME_LIMIT*1000);   
  }
  
  // Исходные данные

  const TIME_LIMIT = 120;
  const START_MONEY = 100;
  let currentMoney = START_MONEY;

  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  
  let timerInterval = null;
  // let step = 1;

document.getElementById("timer").innerHTML = `${formatTimeLeft(timeLeft)}`;

// запуск обратного отчета таймера
startTimer();

// Устанавлию начальную сумму 
let moneyBalance = document.querySelector("span");
moneyBalance.textContent = `$${currentMoney}`;


/* Обработчики кнопок для игры */

// !!! кнопка игры + обработчик события
// FIXED @если ничего не вводить по 1$ не прибавляется@ - в поле input.value, хранится стринговое значение, поэтому нужно было сравнивать с ""
// FIXED @не могу найти условие для проверки пустое ли инпут поле?@ - см объяснение выше
// FIXED @шансы работали в зависимости от выбора решки или орла@ - Math.random это функция нужно вызывать через скобки

/* Обработчик кнопки BET ON HEADS  */

let playEagle = document.getElementById("playHeads");
playEagle.addEventListener("click", () => {
  let succeed = false;
  if (Math.random() < 0.6) {
    succeed = true;
  }
  beginGamble(succeed);
});


/* Обработчик кнопки BET ON TAILS */
let playTails = document.getElementById("playTails");
playTails.addEventListener("click", () => {
   let succeed = false;
  if (Math.random() >= 0.6) {
    succeed = true;
  }
  beginGamble(succeed);
});



//?!
// неправильно прибавляются проценты - скатывание в стринг и обычные теперь тоже
//FIXED  @написать общую функцию которая будет вызываться и ей будет передаваться успех и значение ставки - вроде написал

/* __тестовая функция  */
function beginGamble2(success) {
  console.log('working', success);
};

let winSpanTransparent = 1;
let winSpan = document.getElementById("win");
let intervalMakeTransparent;
function beginGamble(success) {
  let step = 1;
  winSpanTransparent = 1;
  if ((document.getElementById("fixedBet").value !== '')&&   (document.getElementById("radioFixed").checked)) {
    console.log(`value=${document.getElementById("fixedBet").value} , type= ${typeof document.getElementById("fixedBet").value} , converted= ${Number(document.getElementById("fixedBet").value)}`);
    console.log(`current=${currentMoney} , type= ${typeof currentMoney}`);
    step = Number(document.getElementById("fixedBet").value);
  }
  if ((document.getElementById("percentBet").value !== '')&&(document.getElementById("radioPercent").checked)) {
    step = currentMoney * Number(document.getElementById("percentBet").value) / 100;
    step = Number(step.toFixed(2));
  }
  if (success == true) {
    currentMoney = parseFloat(currentMoney) + parseFloat(step);
    winSpan.textContent = `+ $${step}`;
    winSpan.style.color = `rgba(0, 230, 64, ${winSpanTransparent})`;
    if (!intervalMakeTransparent) {
      intervalMakeTransparent = setInterval(() => {
        winSpanTransparent = winSpanTransparent - 0.1;
        winSpan.style.color = `rgba(0, 230, 64, ${winSpanTransparent})`;
      }, 100);
      setTimeout(() => {
        clearInterval(intervalMakeTransparent);
        intervalMakeTransparent = null;
      }, 1000);
    }
  }else {
    currentMoney = parseFloat(currentMoney) - parseFloat(step);
    winSpan.textContent = `- $${step}`;
    winSpan.style.color = `rgba(255, 76, 48, ${winSpanTransparent})`;
    if (!intervalMakeTransparent) { 
        intervalMakeTransparent = setInterval(() => {
        winSpanTransparent = winSpanTransparent - 0.1;
        winSpan.style.color = `rgba(255, 76, 48, ${winSpanTransparent})`;
      }, 100);
      setTimeout(() => {
        clearInterval(intervalMakeTransparent);
        intervalMakeTransparent = null;
      }, 1000);
    }
  }
  
    
  // currentMoney = Math.round(currentMoney);
  if ((currentMoney % 1) != 0) {
    currentMoney = currentMoney.toFixed(2);
  }
  moneyBalance.innerHTML = `$${currentMoney}`;
}

/* Обработчик кнопки рестарт */


let restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
  currentMoney = START_MONEY;
  moneyBalance.textContent = `$${currentMoney}`;
  document.getElementById("fixedBet").value = '';
  document.getElementById("radioFixed").checked = false;
  document.getElementById("percentBet").value = '';
  document.getElementById("radioPercent").checked = false;
  // startTimer();
  // let step = 200 * Number(document.getElementById("percentageBet").value) / 100;
  // console.log(currentMoney);
  // console.log(step);
  // console.log('knopka restart');
});

let list3 = {
  val: 1,
  next: {
      val: 2,
      next: {
          val: 3,
          next: {
              val: 4, 
              next: null
          }
      }
  }
};

console.log(list3);

