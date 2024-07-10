const participantForm = document.getElementById('participant-form');
const gameContainer = document.getElementById('game-container');
const dataContainer = document.getElementById('data-container');
const participantIdInput = document.getElementById('participant-id');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const downloadBtn = document.getElementById('download-btn');
const towers = document.querySelectorAll('.tower');
const moveCount = document.getElementById('move-count');
const timeDisplay = document.getElementById('time');
const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];

let participantId;
let disks = [];
let moves = 0;
let startTime;
let timerInterval;
let selectedDisk = null;
let gameStarted = false;

startBtn.addEventListener('click', startExperiment);
resetBtn.addEventListener('click', resetGame);
downloadBtn.addEventListener('click', downloadData);
towers.forEach(tower => tower.addEventListener('click', selectDisk));

function startExperiment() {
    participantId = participantIdInput.value.trim();
    if (participantId) {
        participantForm.style.display = 'none';
        gameContainer.style.display = 'block';
        initGame();
    } else {
        alert('Please enter a Participant ID');
    }
}

function initGame() {
    disks = [4, 3, 2, 1];
    moves = 0;
    moveCount.textContent = moves;
    clearInterval(timerInterval);
    timeDisplay.textContent = '00:00';
    renderDisks();
    gameStarted = true;
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
        const time = Math.floor((Date.now() - startTime) / 1000);
        alert(`Congratulations! You solved the puzzle in ${moves} moves and ${timeDisplay.textContent}!`);
        saveData(participantId, moves, time);
        showData();
    }
}

function resetGame() {
    initGame();
}

function saveData(id, moves, time) {
    const data = JSON.parse(localStorage.getItem('experimentData')) || [];
    data.push({
        id: id,
        moves: moves,
        time: time,
        date: new Date().toISOString()
    });
    localStorage.setItem('experimentData', JSON.stringify(data));
}

function showData() {
    const data = JSON.parse(localStorage.getItem('experimentData')) || [];
    dataTable.innerHTML = '';
    data.forEach(item => {
        const row = dataTable.insertRow();
        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.moves;
        row.insertCell(2).textContent = item.time;
        row.insertCell(3).textContent = new Date(item.date).toLocaleString();
    });
    dataContainer.style.display = 'block';
}

function downloadData() {
    const data = JSON.parse(localStorage.getItem('experimentData')) || [];
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Participant ID```
