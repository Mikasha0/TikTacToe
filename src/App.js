import './App.css';
import Board from './components/Board';
import {useState} from 'react';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,5]
  ]
  const [scores, setScores] = useState({xScore:0, oScore:0})
  const [board,setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);

  const handleBoxClick = (boxIdx)=> {
    const updateBoard = board.map((value,idx) =>{
      if(idx === boxIdx){
        return xPlaying === true ? "X" : "O";
      }else{
        return value;
      }
    })
    const winner = checkWinner(updateBoard);

    if(winner){
      if(winner ==="0"){
        let {oScore} = scores;
        oScore +=1;
        setScores({...scores, oScore})
      }else{
        let {xScore} = scores;
        xScore +=1;
        setScores({...scores, xScore})
      }
    }
    setBoard(updateBoard);
    setXPlaying(!xPlaying);
  }

  const checkWinner =(board)=>{
    for(let i=0; i<WIN_CONDITIONS.length; i++){
      const [x, y,z] = WIN_CONDITIONS[i];

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        console.log(board[x]);
        return board[x];
      }
    }
  }
  return (
    <>
    <ScoreBoard score ={scores} xPlaying={xPlaying}/>
    <Board board1={board} onClick={handleBoxClick}/>
    </>
  );
}

export default App;
