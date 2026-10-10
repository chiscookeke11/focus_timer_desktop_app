const durationSelect = document.getElementById('duration');
const timerDisplay = document.getElementById('timer');
const statusDisplay = document.getElementById('status');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');


let remainingSeconds = Number(durationSelect.value);
let intervalId = null;


function renderTime() {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


function setRunningState(isRunning) {
    startButton.disabled = isRunning;
    pauseButton.disabled = !isRunning;
    durationSelect.disabled = isRunning;
}





function startTimer() {
    if (intervalId !== null) {
        return;
    }

    if (remainingSeconds <= 0) {
        remainingSeconds = Number(durationSelect.value);
        renderTime();
    }

    statusDisplay.textContent = 'Focus session in progress';
    setRunningState(true);

    intervalId = setInterval(() => {
        remainingSeconds -= 1;
        renderTime();

        if (remainingSeconds <= 0) {
            clearInterval(intervalId);
            intervalId = null;

            remainingSeconds = 0;
            renderTime();

            statusDisplay.textContent = 'Session complete';
            setRunningState(false);

            console.log('Timer complete. Sending notification.');

            window.timerAPI.notifyComplete();
        }
    }, 1000);
}


function pauseTimer() {
    if (intervalId === null) {
        return;
    }

    clearInterval(intervalId);
    intervalId = null;
    statusDisplay.textContent = 'Session paused';
    setRunningState(false);
}

function resetTimer() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }

    remainingSeconds = Number(durationSelect.value);
    statusDisplay.textContent = 'Ready to focus';
    setRunningState(false);
    renderTime();
}



startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
durationSelect.addEventListener('change', resetTimer);

renderTime();