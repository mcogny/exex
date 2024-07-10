let moves = 0;
let startTime = Date.now();

function incrementMoves() {
    moves += 1;
    document.getElementById('moves').innerText = `Moves: ${moves}`;
}

function saveResult() {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let participantId = new URLSearchParams(window.location.search).get('participant_id');
    let data = {
        participant_id: participantId,
        game_number: 1,
        disks: 4,
        moves: moves,
        optimal_moves: 15,  // 예시 값
        time: elapsedTime
    };

    console.log('Result:', data);
    alert('Result saved successfully!');
}
