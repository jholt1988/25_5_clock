const displayInterface = {
    time:Number(), 
    timeType: "Session" || "Break", 
    isTimerRunning:Boolean()

}

export const DisplayState = Object.create(displayInterface)
 




export const formatTime = (time) => {
   let  minutes = parseInt(time / 60, 10);
    let seconds = parseInt(time % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return minutes + ":" + seconds;
}


