import React from 'react';
import "./Common.css"
 
function Reset ({handleReset}){
    function onReset() {
        handleReset(0);
    }
    return (
        <>
        <button onClick={onReset} className='decrement'>Reset</button>
        </>
    )

}

export default Reset;
