let timer;
let seconds = 0;
let isRunning = false;
const display = document.getElementById('display');
const lapsContainer = document.getElementById('laps');

function updateDisplay() 
{
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    display.textContent = `${hrs}:${mins}:${secs}`;
}

function lapTime() 
{
    const lap = document.createElement('div');
    lap.textContent = display.textContent;
    lapsContainer.appendChild(lap);
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) 
    {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateDisplay();
    lapsContainer.innerHTML = ''; // Clear lap times
});

document.getElementById('lap').addEventListener('click', () => {
    if (isRunning) 
    {
        lapTime();
    }
});

// Initial display update
updateDisplay();