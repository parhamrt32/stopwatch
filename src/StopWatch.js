import React from "react";

export default function StopWatch(){

    const [time , setTime] = React.useState(0);
    const [start , setStart] = React.useState(true);

   const handleClick = () => setStart( preStart => !preStart )

   React.useEffect(() => {
       let interval = null;

       if(start === false){
           interval = setInterval(() => {
               setTime(t => t + 1)
           }, 1000);
       }else{
        clearInterval(interval);

       }
       return () => {
        clearInterval(interval);
       };
   }, [start])
   
   function handleReset(){
       setTime(0);

   }


    return(
        <div className="stopwatch_frame">
            <p className="time"> {time} </p>
            <div className="btns"> 
                <button onClick={handleClick} className="btn"> {start ? "Start" : "Stop"} </button>
                <button className="btn" onClick={handleReset} > Reset </button>
            </div>
        </div>
    )
}