import './App.css';
import rock from './images/rock.png';
import scissors from './images/scissors.png';
//import paper from './images/paper.png';

function App() {
  return (
    <div>
      <h1>Rock Paper Scissors game!</h1>
      <div>
        <div>
          <div>
            <div>You: 0</div>
            <div></div>
          </div>
          <div>
            <div>Computer: 0</div>
            <div></div>
          </div>
        </div>
        <div>
          <button><img src={rock} alt="rock" className='rock'/></button>
          <button>Scissors</button>
          <button><img src={scissors} alt="rock" className='scissors'/></button>
        </div>
        <h2>Player 1 wins</h2>
      </div>
    </div>
  );
}
 
export default App;
