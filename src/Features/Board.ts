
import { createSlice ,PayloadAction} from "@reduxjs/toolkit";





const initial = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
]

type initialStateType = {
    board : string[][],
    row: number,
    columm: number
}
const initialState:initialStateType = {
  board:initial,
  row:0,
  columm:0
}


const boardSlice = createSlice({
    name:"board",
    initialState,
    reducers:{
       add:(state, actions:PayloadAction<string>)=>{
        if(state.row==0 && state.columm == 0 && state.board[state.row][state.columm]=='')
         state.board[state.row][state.columm] = actions.payload
        else{
            if(state.row==5 && state.columm==4){
                state.row=0;
                state.columm=0;
         }
            else{
                if(state.columm<4){
                   state.columm =  state.columm+1;
                }
                else{
                    state.row = state.row+1;
                    state.columm=0;
                }
            }

            state.board[state.row][state.columm] = actions.payload
        }    
       },
       reset : (state)=>{
       
            state.board = initialState.board
            state.row=initialState.row;
            state.columm=initialState.columm
       },
       remove:(state)=>{
        state.board[state.row][state.columm] = '';
          if(state.row == 0 && state.columm==0){

          }
          else if (state.row!=0 && state.columm===0){
            state.columm = 4;
            state.row = state.row-1;
          }
          else{
            state.columm=state.columm-1;
          }


       }
    }
})

export default boardSlice.reducer;
export const {add,reset,remove} = boardSlice.actions;




