let pl = NaN;
let comp  = NaN;

function playerSelection() {
    pl = prompt('for rock enter 1, for paper - 2, for scissors - 3');
    pl = pl - 1;
    
    
    while (true) {
        if ((pl >= 3) || (pl < 0) || (isNaN(pl))) {
            alert("wrong input!")
            pl = prompt('for rock enter 1, for paper - 2, for scissors - 3');
            pl = pl - 1;
        }
        else{
            break;
        }
    }
     if (pl == 0) {
        console.log("Player Rock");
     }
     if (pl == 1) {
        console.log("Player Paper");
     }
     if (pl == 2) {
        console.log("Player Scissors");
     } 
     return(pl);
    
}

function computerPlay(){
    comp = Math.random();
    comp = parseInt(comp * 10);
    if (comp >= 3) {
        comp = comp % 3;
    }

     if (comp == 0) {
        console.log("comp Rock");
     }
     if (comp == 1) {
        console.log("comp Paper");
     }
     if (comp == 2) {
        console.log("comp Scissors");
     } 
     return(comp);
}
function plWinsRound(){
    alert('Player wins the round! Congrats!!!');
}
function drowRound(){
    alert ("Draw round");
}
function compWinsRound(){
    alert('Player lose the round')
}

function game(){
    let g = NaN;
    let plScore = 0;
    let compScore = 0;
    alert('Let`s play a game of "Rock Paper Scissors"')
    let n = prompt('enter number or rounds');



    for (let i = 1; i <= n; i++) {
        playerSelection();
        computerPlay();
        let g = pl - comp;
        
        if (g == 0) {
            drowRound();
        } 
        else if (g == 1) {
            plWinsRound();
            plScore++;
        }
        else if (g == 2){
            compWinsRound();
            compScore++;
        } else if (g == -1) {
            compWinsRound();
            compScore++;
        } else if (g == -2) {
            plWinsRound();
            plScore++;
        }
        
        console.log('round:' + (i + 1) + 'player:' + plScore + 'computor:' + compScore);

    }
    let total = plScore - compScore;
    if (total == 0){
    console.log('DRAW'+'player:' + plScore + 'computor:' + compScore);
    alert('DRAW! Not bad... You can better!');
    } else if (total < 0) { 
        console.log('You loose!'+'player:' + plScore + 'computor:' + compScore);
        alert('Powder! Good luck next time!');
    }else if (total > 0){
        console.log('You win!'+'player:' + plScore + 'computor:' + compScore);
        alert('We hawe a WINNER today! Well done!');
    }
    
}


game();





