import { DisplayState, formatTime } from "../helpers/displayHelpers";
import {FaPause, FaPlay, FaUndo} from 'react-icons/fa';


function Display ({displayState, reset, startStop}){
    return(
        <div className='display'>
            <h4 id='timer-label'>{displayState.timeType}</h4>
            <span id='time-left'>
                {formatTime(displayState.time)}
            </span>
            <div>
                <button id="start_stop" onClick={() => startStop(displayState)}>{displayState.isTimerRunning ? <FaPause /> :<FaPlay />}</button>
                <button id='reset' onClick={reset}><FaUndo /></button>
            </div>
        </div>
    )


}

export default Display