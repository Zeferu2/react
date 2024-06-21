import React from 'react';
import "./Common.css"
 
function Increment ({handleIncrement, value}){
    function onIncrease() {
        handleIncrement(value+1);
    }
    return (
        <>
        <button onClick={onIncrease} className='decrement'>+</button>
        </>
    )

}

export default Increment;
