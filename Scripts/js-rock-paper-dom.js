let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    loss : 0,
    ties : 0
};

updateScoreElement();

function playGame(playerMove){
    let result='';
    const computerMove = pickComputerMove();
    if (playerMove === 'Scissors'){
        if(computerMove === 'Rock'){
            result='You loss.';
        }else if(computerMove === 'Paper'){
            result='You win.';
        }else if(computerMove === 'Scissors'){
            result='Tie.';
        }
    }else if(playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            result='You win.';
        }else if(computerMove === 'Paper'){
            result='Tie.';
        }else if(computerMove === 'Scissors'){
            result='You loss.';
        }
    }else if (playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result='Tie.';
            
        }else if(computerMove === 'Paper'){
            result='You loss.';
            
        }else if(computerMove === 'Scissors'){
            result='You win.';
            
        }
    }

    if(result === 'You win.'){
        score.wins++;
    }else if(result ==='You loss.'){
        score.loss++;
    }else if(result === 'Tie.'){
        score.ties++;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    
    document.querySelector('.js-moves').innerHTML= `You <img src="Resource/${playerMove}-emoji.svg" class="move-img" alt=""> <img src="Resource/${computerMove}-emoji.svg" class="move-img" alt=""> Computer`;
    
    
    /*alert(`You picked ${playerMove}. Compter picked ${computerMove}. ${result}
Wins: ${score.wins},Losses: ${score.loss},Ties:${score.ties}`);*/

}

function updateScoreElement(){
    document.querySelector('.js-score').    innerHTML = `Wins: ${score.wins},Losses: ${score.loss},Ties:${score.ties}`;
}

function pickComputerMove(){
    const randomNumber= Math.random();
    let computerMove;
    if(randomNumber>0 && randomNumber< 1/3){
        computerMove='Rock';
    }else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove='Paper';
    }else if(randomNumber>=2/3 && randomNumber<1){
        computerMove='Scissors';
    }

    return computerMove;
}
