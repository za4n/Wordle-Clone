import { useDispatch } from "react-redux";
import { AppDispatch } from "./STORE/store";
import { add,remove } from "../Features/Board";
const keyDown:React.FC = () =>{

    const dispatch:AppDispatch = useDispatch();
    console.log("k");
    document.body.addEventListener('keydown', (e) => {
      let key = e.key.toUpperCase();
      let code = key.charCodeAt(0);
      if (e.key === "Backspace") {
        dispatch(remove());
      }
     else if(code >=65 && code<=90) 
      dispatch(add(key));
    
  });
  return <>
        
      </>
  }
  export default keyDown;