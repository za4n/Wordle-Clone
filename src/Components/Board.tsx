import {useSelector } from "react-redux";

import { RootState } from "./STORE/store";


type BoardProps = {
  dA : string[]
}

export default function Board({dA}:BoardProps) {
 
  const {board} = useSelector((state:RootState)=>state.Board);

   
  

  return (
    <>
    
    <div className="board">
       {board.map((b,index)=>{
        return (
          <div className="row" key={index}>
            {b.map((i,index)=>{
              return (
                <span className="box" style={{backgroundColor:dA.includes(i)?"grey":"white"}} key={index}>{i}</span>
              )
            })}
          </div>
        );
       })}
    </div>
     
    </>
  )
}
