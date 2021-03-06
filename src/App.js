import { useState } from 'react';
import './App.css';
import rock from './images/rock.png';
import scissors from './images/scissors.png';
import paper from './images/paper.png';
import Modal from './Modal';

const rockImg = () => {
  return( <img src={rock} alt="rock" className='rock'/>)
} 
const paperImg = () => {
  return( <img src={paper} alt="paper" className='paper'/>)
} 
const scissorsImg = () => {
  return( <img src={scissors} alt="scissors" className='scissors'/>)
} 


const actions = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};


function randomAction() {

  const keys = Object.keys(actions)
  const index = Math.floor(Math.random() * keys.length)

  return keys[index];
}

function calculateWinner(action1, action2){
  if (action1 === action2) {
    return 0
  } else if (actions[action1] === action2) {
    return -1
  } else if (actions[action2] === action1) {
    return 1
  }
  
  return null
}

function ActionIcon({action, ...props}) {
  const icons = {
    rock: rockImg,
    paper: paperImg,
    scissors: scissorsImg,
  };
  const Icon = icons[action];
  return (<Icon {...props}/>)
}

function Player ({name = 'You', score = 0, action}) {
  return (
    <div className='player'>
      <div className='score'>{`${name}: ${score}`}</div>
      <div className='action'>
        { action && <ActionIcon action={action}/>}
      </div>
    </div>
  );
}

function ActionButton({action, onActionSelected}) {
  return(
    <button onClick={() => onActionSelected(action)}>
      <ActionIcon action={action}/>
    </button>
  )
}

function App() {
  
  const [playerAction, setPlayerAction] = useState("");
  const [computerAction, setComputerAction] = useState("");
  const [winner, setWinner] = useState(-2)
  
  const [playerScore, setPlayerScore] = useState(0)
  const [comuterScore, setComputerScore] = useState(0)

  const [popup, setPopup] = useState(false)

  function ResetButton(){
    return(
      <button onClick={() => {
      setPlayerAction("");
      setComputerAction("");
      setWinner(-2);
      setPlayerScore(0);
      setComputerScore(0);
    }} >Reset the game</button>
    )
  }

  const onActionSelected = (selectedAction) => {
    const newComputerAction = randomAction()

    setPlayerAction(selectedAction)
    setComputerAction(newComputerAction)

    const newWinner = calculateWinner(selectedAction, newComputerAction);
    setWinner(newWinner)
    if (newWinner === -1) {
      setPlayerScore(playerScore + 1)
    } else if (newWinner === 1) {
      setComputerScore(comuterScore + 1)
    }
  }

  function ShowWinner({winner}) {
    const text = {
      '-2': "Let's begin!",
      '-1': 'You win!',
      0: "It's a Tie!",
      1: 'You Loose!'
    };

    return (
      <h2>{text[winner]}</h2>
    )
  }

  
  return (
    <div className='main'>
      <h1>Rock Paper Scissors game!</h1>
      <div className='container'>
        <div className='game'>
          <Player name='You' score={playerScore} action={playerAction}/>
          <Player name='Computer' score={comuterScore} action={computerAction}/>
        </div>
        <div className='buttons'>
          <ActionButton action='rock' onActionSelected={onActionSelected}/>
          <ActionButton action='paper' onActionSelected={onActionSelected}/>
          <ActionButton action='scissors' onActionSelected={onActionSelected}/>
        </div>
        <div className='bottom'>
          <ShowWinner winner={winner}/>
          <ResetButton resetOnClick={ResetButton}/>
          <button 
            onClick={() => setPopup(true)} 
            className='modalButton'>
              Check the rules
            </button>
          <Modal 
            open={popup} 
            onClose={() => setPopup(false)} />
        </div>
      </div>
    </div>
  );
}
 
export default App;
