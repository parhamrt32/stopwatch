import React from "react";

export default function StopWatch(){

    const [time , setTime] = React.useState(0);
    const [start , setStart] = React.useState(true);

   const handleClick = () => setStart( preStart => !preStart )

   
    React.useEffect(() => {
        let interval;

        while( !start ){
            interval = setInterval( () => setTime( t => t +1 ) , 1000 );
        }
        
     
     
    } )


    return(
        <div className="stopwatch_frame">
            <p className="time"> {time} </p>
            <button onClick={handleClick} className="btn"> {start ? "Start" : "Reset"} </button>

        </div>
    )
}