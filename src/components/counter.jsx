import Label from "./label.jsx"
import {FaArrowDown, FaArrowUp} from "react-icons/fa"

function Counter ({id, time,setTime, max, min, type, interval}){
    return(
        <div>
        <Label id={`${type}-label`} label={`${type}-length`}/>
        <button onClick={() => (time > min) ? setTime(time- interval) : null}
                id={`${type}-decrement`}>
           <FaArrowDown />
        </button>
        <span id={`${type}-length`}>{time/interval}</span>
        <button onClick={() => (time < max) ? setTime(time + interval) : null}
                id={`${type}-increment`}>
           <FaArrowUp />
        </button>
    
        </div>
    )
}


export default Counter