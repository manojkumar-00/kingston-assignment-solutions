let timerInterval;
let elapsedSeconds = 0;

const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

// Format time into HH:MM:SS
function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

// Start the timer
startBtn.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            elapsedSeconds++;
            timeDisplay.textContent = formatTime(elapsedSeconds);
        }, 1000);
    }
});

// Pause the timer
pauseBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

// Reset the timer
resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedSeconds = 0;
    timeDisplay.textContent = formatTime(elapsedSeconds);
});
