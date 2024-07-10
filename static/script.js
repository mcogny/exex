let moves = 0;
let startTime = Date.now();
let towers = [[], [], []];
let numDisks = 4;

function initializeGame() {
    for (let i = numDisks; i > 0; i--) {
        towers[0].push(i);
    }
    renderTowers();
}

function renderTowers() {
    for (let i = 0; i < 3; i++) {
        const tower = document.getElementById(`tower${i + 1}`);
        tower.innerHTML = '';
        towers[i].forEach(disk => {
            const diskElement = document.createElement('div');
            diskElement.className = 'disk';
            diskElement.style.width = `${disk * 20}px`;
            diskElement.innerText = disk;
            tower.appendChild(diskElement);
        });
    }
}

function moveDisk(from, to) {
    if (towers[from].length === 0) return;
    const disk = towers[from].pop();
    towers[to].push(disk);
    moves++;
    document.getElementById('moves').innerText = `Moves: ${moves}`;
    renderTowers();
}

function saveResult() {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let participantId = new URLSearchParams(window.location.search).get('participant_id');
    let data = {
        participant_id: participantId,
        game_number: 1,
        disks: numDisks,
        moves: moves,
        optimal_moves: 15,  // 예시 값
        time: elapsedTime
    };

    console.log('Result:', data);
    alert('Result saved successfully!');
}

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    document.querySelectorAll('.tower').forEach((tower, index) => {
        tower.addEventListener('click', () => {
            const selectedTower = towers.findIndex(t => t.includes(parseInt(tower.innerText)));
            if (selectedTower !== -1) {
                moveDisk(selectedTower, index);
            }
        });
    });
});
