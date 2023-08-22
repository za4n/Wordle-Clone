
import { useDispatch } from "react-redux";
import { AppDispatch } from "./STORE/store";
import { add } from "../Features/Board";


type KeyboardProps = {
  disableArr:string[]
}

export default function Keyboard({disableArr}:KeyboardProps) {
  const dispatch:AppDispatch = useDispatch();
  
   const addToBoard = (value:string)=>{
    dispatch(add(value))
  }
   
  
  return (
    <div className="keyboard">
      <div className="row">
        <button onClick={()=>{addToBoard('Q')}}  disabled={disableArr.includes('Q')}    key={0}> Q</button>
        <button onClick={()=>{addToBoard('W')}}  disabled={disableArr.includes('W')}    key={1} >W</button>
        <button onClick={()=>{addToBoard('E')}}  disabled={disableArr.includes('E')}    key={2} >E</button>
        <button onClick={()=>{addToBoard('R')}}  disabled={disableArr.includes('R')}    key={3} >R</button>
        <button onClick={()=>{addToBoard('T')}}  disabled={disableArr.includes('T')}    key={4} >T</button>
        <button onClick={()=>{addToBoard('Y')}}  disabled={disableArr.includes('Y')}    key={5} >Y</button>
        <button onClick={()=>{addToBoard('U')}}  disabled={disableArr.includes('U')}    key={6} >U</button>
        <button onClick={()=>{addToBoard('I')}}  disabled={disableArr.includes('I')}    key={7} >I</button>
        <button onClick={()=>{addToBoard('O')}}  disabled={disableArr.includes('O')}    key={8} >O</button>
        <button onClick={()=>{addToBoard('P')}}  disabled={disableArr.includes('P')}    key={9} >P</button>
      </div>
      <div className="row">
        <button onClick={()=>{addToBoard('A')}}   disabled={disableArr.includes('A')}   key={10}  >A</button>
        <button onClick={()=>{addToBoard('S')}}   disabled={disableArr.includes('S')}   key={11}  >S</button>
        <button onClick={()=>{addToBoard('D')}}   disabled={disableArr.includes('D')}   key={12}  >D</button>
        <button onClick={()=>{addToBoard('F')}}   disabled={disableArr.includes('F')}   key={13}  >F</button>
        <button onClick={()=>{addToBoard('G')}}   disabled={disableArr.includes('G')}   key={14}  >G</button>
        <button onClick={()=>{addToBoard('H')}}   disabled={disableArr.includes('H')}   key={15}  >H</button>
        <button onClick={()=>{addToBoard('J')}}   disabled={disableArr.includes('J')}   key={16}  >J</button>
        <button onClick={()=>{addToBoard('K')}}   disabled={disableArr.includes('K')}   key={17}  >K</button>
        <button onClick={()=>{addToBoard('L')}}   disabled={disableArr.includes('L')}   key={18}  >L</button>
      </div>
      <div className="row">
        <button onClick={()=>{addToBoard('Z')}}   disabled={disableArr.includes('Z')}   key={19}  >Z</button>
        <button onClick={()=>{addToBoard('X')}}   disabled={disableArr.includes('X')}   key={20}  >X</button>
        <button onClick={()=>{addToBoard('C')}}   disabled={disableArr.includes('C')}   key={21}  >C</button>
        <button onClick={()=>{addToBoard('V')}}   disabled={disableArr.includes('V')}   key={22}  >V</button>
        <button onClick={()=>{addToBoard('B')}}   disabled={disableArr.includes('B')}   key={23}  >B</button>
        <button onClick={()=>{addToBoard('N')}}   disabled={disableArr.includes('N')}   key={24}  >N</button>
        <button onClick={()=>{addToBoard('M')}}   disabled={disableArr.includes('M')}   key={25}  >M</button>
      </div>
    </div>
  )
}
