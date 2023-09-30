import Label from "./label";


function Timer({label, labelID, time, id}){
    return(
        <>
        <Label id={labelID} label={label} />
        <h4 id={id}>{time}</h4>
        </>
    )
}

export default Timer