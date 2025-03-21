import React,{useState} from 'react';

function Counter(){

const[count,setCount] =useState(0);


const increament = () =>{
    setCount(c => c+ 1);
    setCount(c => c+ 1);
}
//a function set on argument useState.Allows for safe updates based on the previous updates.used with multiple state updates.
//Updater functions
const decrement = () =>{
    setCount(c => c- 1);
    setCount(c => c- 1);
}

const reset = () =>{
    setCount(0);
}

return(
    <div className ="counter-container">
        <p className='count-display'>{count}</p>
        <button className='counter-button' onClick={decrement}>decrement</button>
        <button className='counter-button' onClick={reset}>reset</button>
        <button className='counter-button' onClick={increament}>increament</button>

    </div>
);

}
export default Counter
//developing containers to increment,reset or decrement