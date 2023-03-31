import React from "react";

function CountDownTimer(){
    

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const inputEl = document.getElementById('date');
    const startBtn = document.getElementById('start');
    
    let countdownInterval;
    
    function startCountdown() {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        const inputEl = document.getElementById('date');
        const startBtn = document.getElementById('start');
        
      const countdownDate = new Date(inputEl.value).getTime();
    
      if (isNaN(countdownDate)) {
        alert('Please enter a valid date and time.');
        return;
      }
    
      startBtn.disabled = true;
      inputEl.disabled = true;
    
      countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;
    
        if (distance < 0) {
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
            const inputEl = document.getElementById('date');
            const startBtn = document.getElementById('start');
            
          clearInterval(countdownInterval);
          daysEl.innerText = '0';
          hoursEl.innerText = '0';
          minutesEl.innerText = '0';
          secondsEl.innerText = '0';
          alert('Countdown has ended!');
          startBtn.disabled = false;
          inputEl.disabled = false;
          return;
        }
    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        daysEl.innerText = days;
        hoursEl.innerText = hours.toString().padStart(2, '0');
        minutesEl.innerText = minutes.toString().padStart(2, '0');
        secondsEl.innerText = seconds.toString().padStart(2, '0');
      }, 1000);
    }
    function start(){
         const startBtn = document.getElementById('start');

    startBtn.addEventListener('click', startCountdown);
    }


    return(
        <div className="countdown-timer">
        <h1>Countdown Timer</h1>
        <div className="timer">
          <div className="time">
            <span id="days"></span>
            <div className="label">Days</div>
          </div>
          <div className="time">
            <span id="hours"></span>
            <div className="label">Hours</div>
          </div>
          <div className="time">
            <span id="minutes"></span>
            <div className="label">Minutes</div>
          </div>
          <div className="time">
            <span id="seconds"></span>
            <div className="label">Seconds</div>
          </div>
        </div>
        <div className="input">
          <label htmlFor="date">Enter a date and time:</label>
          <input type="datetime-local" id="date"></input>
          <button id="start" onClick={start}>Start Countdown</button>
        </div>
      </div>

    );

}




export default CountDownTimer;