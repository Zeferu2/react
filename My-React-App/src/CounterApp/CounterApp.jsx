import React, {useState} from "react";
import Decrement from "./Decrement"
import Increment from "./Increment"
import Reset from "./Reset";
import "./Common.css"

function Counter () {
    const[counter, setCounter] = useState(10);
    function onDecrement() {
        setCounter(prev=>prev>0?prev-1:0);
    }
    function onIncrement() {
        setCounter(prev=>prev+1);
    }
    function onReset() {
        setCounter(0);
    }    
    

return (
    <>
    <p className="decrement">{counter}</p>
    <Decrement handleDecrement={onDecrement} value={counter}/>
    <Increment handleIncrement={onIncrement} value={counter}/>
    <Reset handleReset={onReset}/>
    
    </>
)
}
export default Counter;