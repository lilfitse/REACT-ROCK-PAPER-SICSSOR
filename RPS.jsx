import React from 'react'

export const RPS = () => {

  let score = JSON.parse(localStorage.getItem('Scores')) || { wins: 0, loses: 0, ties: 0};
  // updateScore();

  function pickComputerMove() {
  
    let computerMove = '';
    const randomNumber = Number(Math.random());
    // console.log(randomNumber);
  
    if (randomNumber > 0 && randomNumber < 1/3) {
      computerMove = 'Rock';
    } else if (randomNumber > 1/3 && randomNumber < 2/3) {
      computerMove = 'Paper';
    } else if (randomNumber > 2/3 && randomNumber < 1){
      computerMove = 'Scissor';
    } else {
      computerMove = 'Error try again';
    }
    console.log(computerMove);
  
    return computerMove;
  }
  
  // playGame();
  function playGame(playerMove) {
    let computerMove = pickComputerMove();
    let result = '';
    updateScore();
  
      if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
          result = 'You Tie';
        } else if (computerMove === 'Paper') {
            result = 'You Lose';
        } else if (computerMove === 'Scissor') {
            result = 'You Win';
        }
      } else if (playerMove === 'Paper') {
        if (computerMove === 'Paper') {
          result = 'You Tie';
        } else if (computerMove === 'Scissor') {
           result = 'You Lose';
        } else if (computerMove === 'Rock') {
          result = 'You Win';
        }
      } else if (playerMove === 'Scissor') {
        if (computerMove === 'Scissor') {
          result = 'You Tie';
        } else if (computerMove === 'Rock') {
            result = 'You Lose';
        } else if (computerMove === 'Paper') {
            result = 'You Win';
        }
      }
  
    console.log(`${result}`);
    
    if (result === 'You Win') {
      score.wins = score.wins + 1;
    } else if (result === 'You Lose') {
      score.loses = score.loses + 1;
    } else if (result === 'You Tie') {
      score.ties = score.ties + 1;
    }
    
    let myJson = JSON.stringify(score);
    localStorage.setItem('Scores' , myJson);
    
    // document.getElementById('js-result').innerHTML =`You <img class="img" src="picture/${playerMove}-emoji.png">
    //   <img class='img' src='picture/${computerMove}-emoji.png'> Computer
    // `;
    
    document.getElementById('js-result').innerHTML =`Win:${score.wins}, Lose:${score.loses}, Tie:${score.ties}`;

    document.getElementById('js-move').innerHTML =`You ${playerMove || 'Chose'} ${computerMove} Computer`;

      console.log(`Win:${score.wins}, Lose:${score.loses}, Tie:${score.ties}`);
      updateScore();
    }
  
   function updateScore() {
       document.getElementById('js-result').innerHTML = 
       `Win:${score.wins}, Lose:${score.loses}, Tie:${score.ties}`;
        //playGame()
   }
  
  function removeScore() {
    playGame();
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('Score');
    updateScore();
    console.log('Score removed');
   }
  
  let intervalId;
  let isAutoPlay = false;
  
  function autoPlay() {
    if (!isAutoPlay) {
      intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
      }, 1000)
      isAutoPlay = true
    } else {
      clearInterval(intervalId);
      isAutoPlay = false;
    }
  }
  
  setTimeout(() => {
    console.log('settime out');
  }, 3000);

  return (
    <>
      <div className="w-full h-[100vh] bg-RPS">
        <div className="w-full h-full flex justify-center bg-black/30 backdrop-blur-[5px]">
          <div className=" mt-5 w-fit h-fit p-10 bg-black/50 backdrop-blur-[5px] space-y-4 rounded-2xl">
            <h1 className='text-[60px] font-bold text-center'>Rock Paper Scissor</h1>
            <div className="p-4 flex justify-center space-x-6">
              <button className='RPS flex-center' onClick={() =>playGame('Rock')}>
               <div className="Rock-RPS"></div>
              </button>
              <button className='RPS flex-center' onClick={() => playGame('Paper')}>
                <div className="Paper-RPS"></div>
              </button>
              <button className='RPS flex-center' onClick={() => playGame('Scissor')}>
                <div className="Scissor-RPS"></div>
              </button>
            </div>
            <div className="p-1 flex flex-col justify-center items-center space-x-6">
              <p id='js-result' className='text-[25px] font-bold'></p>
              <p id='js-move' className='text-[25px] font-bold'></p>
            </div>
            <div className="px-4 pt-6 flex justify-center space-x-6">
              <button className='w-fit h-7 py-6 px-4 flex-center text-2xl text-black font-bold bg-white/50 brightness-100 rounded-[10px]' onClick={() => removeScore()}>Remove Score</button>
              <button className='w-fit h-7 py-6 px-4 flex-center text-2xl text-black font-bold bg-white/50 brightness-100 rounded-[10px]' onClick={() => autoPlay()}>Auto Play</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <h1>RPS</h1>
        <div class="container">
            <div> 
                <div class="btn-box">
                    <button id="Rock" class="btn1" onclick="playGame('Rock')">
                        <img class="img" src='picture/Rock-emoji.png' />
                    </button>
                    <button id="Paper" class="btn1" onclick="playGame('Paper')">
                        <img class="img" src='picture/Paper-emoji.png' />
                    </button>
                    <button id="Scissor" class="btn1" onclick="playGame('Scissor')">
                       <img class="img" src='picture/Scissor-emoji.png' />
                    </button>
                </div>
                <div class="description">
                    <p id="js-result" onshow="" class="font"></p>
                    <p id="js-score" onshow="updateScore();" class= 'font'></p>
                    <div class="btn-box2">
                        <button class="btn1" onclick="removeScore()">Remove Score</button>
                        <button class="btn1" onclick="autoPlay()">Auto play</button>
                    </div>
                </div>
            </div>
       </div>
       </div> */}
      
    </>
  )
}


