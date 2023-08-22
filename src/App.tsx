
import './app.css';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from './Components/STORE/store';
import { add, reset,remove } from './Features/Board';
import { AppDispatch } from './Components/STORE/store';
import {useState,useRef} from 'react';
import { words } from './words';






export const k:React.FC = () =>{
   
  const dispatch:AppDispatch = useDispatch();
  
  document.body.addEventListener('keydown', (e) => {
    let key = e.key.toUpperCase();
    let code = key.charCodeAt(0);
    if (e.key === "Backspace") {
      dispatch(remove());
    }
   else if(code >=65 && code<=90) 
    dispatch(add(key));
  
});
return <div>
      
    </div>
}


const App: React.FC = () => {
  
  
  const [disabledArr, setDisabledArr] = useState<string[]>(()=>[]);
  const [row,setRow] = useState(()=>0);
  const [game,setGame] = useState(()=>false);
  const currentList = useRef("");
  const dispatch:AppDispatch = useDispatch();
  const [guesNo, setGuessNo] = useState(()=>Math.floor(Math.random()*words.length));


  const guessWord = words[guesNo];

 
  const b = useSelector((state:RootState)=>state.Board);
 

  const checking = ()=>{
    
  if(b.board[b.row].every(e=>e!=='') && row === b.row){
    console.log("check");
    let arr:string[] = [];
     b.board[b.row].forEach(ch=>{
      currentList.current += ch;
      if(!guessWord.includes(ch)){
        arr.push(ch);
      }
     })
    
     if(arr.length===0 && guessWord === currentList.current){
      setGame(true);
    }
    
   else{
    setDisabledArr(prev=>[...prev,...arr]);
  }
    setRow(row+1)
    currentList.current = "";
  }
 
}


checking();


let resetGame = ()=>{
  dispatch(reset());
  currentList.current = "";
  setDisabledArr([]);
  setRow(0)
  setGame(false);
  setGuessNo((p)=>{
    let n = Math.floor(Math.random()*words.length);
    while(n==p){
     n = Math.floor(Math.random()*words.length);
    }
    return n;
  })
}

  return (
    <>
    <div className="app">
      <nav>Wordle</nav>
     <Board dA={disabledArr} ></Board>
     {row>=6 ? 
     
     
      
     <div className='end'>
     
     <p>You Lose !</p>
     <p>THE GUESS Word : {guessWord}</p>
     <button onClick={resetGame}>Reset</button>
     
     </div>
    
     
     :
    
      game ? <div className='win'>
         <p>You Guess It</p>
         <button onClick={resetGame}>Reset</button>
      </div>:
 <Keyboard disableArr = {disabledArr}></Keyboard>
     
     }
  
    </div>
    
    </>
  );
};

export default App;
