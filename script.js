const towers = document.querySelectorAll('.tower');
const moveCount = document.getElementById('move-count');
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

let disks = [];
let moves = 0;
let startTime;
let timerInterval;
let selectedDisk = null;
let gameStarted = false;

function initGame() {
    disks = [4, 3, 2, 1];
    moves = 0;
    moveCount.textContent = moves;
    clearInterval(timerInterval);
    timeDisplay.textContent = '00:00';
    renderDisks();
    gameStarted = true;
    startBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
    startTimer();
}

function renderDisks() {
    towers.forEach(tower => tower.innerHTML = '');
    disks.forEach((size, index) => {
        const disk = document.createElement('div');
        disk.className = 'disk';
        disk.style.width = `${size * 30}px`;
        disk.style.backgroundColor = `hsl(${size * 60}, 70%, 50%)`;
        disk.textContent = size;
        towers[0].appendChild(disk);
    });
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, '0');
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${seconds}`;
}

function selectDisk(event) {
    if (!gameStarted) return;
    const clickedTower = event.currentTarget;
    const topDisk = clickedTower.lastElementChild;

    if (!selectedDisk && topDisk) {
        selectedDisk = topDisk;
        selectedDisk.style.opacity = '0.5';
    } else if (selectedDisk) {
        moveDisk(clickedTower);
    }
}

function moveDisk(targetTower) {
    const topDisk = targetTower.lastElementChild;
    if (!topDisk || parseInt(selectedDisk.textContent) < parseInt(topDisk.textContent)) {
        targetTower.appendChild(selectedDisk);
        selectedDisk.style.opacity = '1';
        selectedDisk = null;
        moves++;
        moveCount.textContent = moves;
        checkWin();
    } else {
        selectedDisk.style.opacity = '1';
        selectedDisk = null;
    }
}

function checkWin() {
    if (towers[2].childElementCount === 4) {
        clearInterval(timerInterval);
        gameStarted = false;
        alert(`Congratulations! You solved the puzzle in ${moves} moves and ${timeDisplay.textContent}!`);
    }
}

towers.forEach(tower => tower.addEventListener('click', selectDisk));
startBtn.addEventListener('click', initGame);
resetBtn.addEventListener('click', initGame);

// 초기 상태 설정
renderDisks();
