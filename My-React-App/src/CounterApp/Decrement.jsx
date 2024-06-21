import React from 'react';
import "./Common.css"
 
function Decrement ({handleDecrement, value}){
    function onDecrease() {
        handleDecrement(value-1);
    }
    return (
        <>
        <button onClick={onDecrease} className='decrement'>-</button>
        </>
    )

}

export default Decrement;