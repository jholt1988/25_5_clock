import { useState, useRef, useEffect } from "react";
import Counter from "../counter";
import Timer from "../Timer";
import Display from "../Display";
import  Alarm from '../../assets/alarmsound.mp3'
import { DisplayState, formatTime } from "../../helpers/displayHelpers";
const defaultSessionTime = 25*60
const defaultBreakTime = 5*60
const min = 60
const max = 60*60
const interval = 60


function Clock() {
    const [session, setSession] = useState(defaultSessionTime)
    const [breakTime, setBreakTime] = useState(defaultBreakTime)
    const [displayState, setDisplayState] = useState({
        time: session,
        timeType: "Session", 
        isTimerRunning: false
        
    })

    const timerRef = useRef(null)

    
const reset =() =>{
    setBreakTime(defaultBreakTime)
    setSession(defaultSessionTime)
    setDisplayState({
        time:defaultSessionTime, 
        timeType:'Session',
        isTimerRunning:false
    })
    const audio = document.getElementById('beep') 
    audio.pause()
    audio.currentTime= 0
}

const decrementTime = () => {
    setDisplayState((prev) => ({
        ...prev,
        time: prev.time - 1
    }))
}
useEffect(() => {
  if(!displayState.isTimerRunning) return 

  if(displayState.isTimerRunning){
    timerRef.current = window.setInterval(decrementTime,1000)
  }

  return () =>{
    window.clearInterval(timerRef.current)
  }
},[displayState.isTimerRunning])

useEffect(() =>{
    if(displayState.time === 0){
        const audio = document.getElementById('beep');
        audio.play()
        audio.currentTime = 3
        audio.play().catch((err) => console.log(err))
        setDisplayState((prev) =>({
            ...prev,
            timeType: prev.timeType === 'Session' ? 'Break' : "Session",
            time: prev.timeType === 'Session' ? breakTime: session,  

        })
     )
    }

}, [displayState, breakTime, session])

const startStop = (displayState) => {
    setDisplayState((prev) => ({
        ...prev,
        isTimerRunning:!prev.isTimerRunning
    })
)}


const changeBreakTime =(time) =>{
    if(displayState.isTimerRunning) return;
    setBreakTime(time)
}

const changeSession = (time) => {
    if(displayState.isTimerRunning) return;
    setSession(time)
    setDisplayState({
        time: time, 
        timeType:"Session",
        isTimerRunning: false
    })
}
    

    return(
        <div id="clock">
            <div className="time-setters">
                <div className="break">
                    <Counter time={breakTime} setTime={changeBreakTime} min={min} max={max} interval={interval} type='break'/>
                </div>
                <div className="session">
                <Counter time={session} setTime={changeSession} min={min} max={max} interval={interval} type='session'/>
                </div>
                </div>
                <Display displayState={displayState} reset={reset} startStop={startStop}/>
            
            <audio src={Alarm} id='beep'/>
        </div>
    )

}

export default  Clock 