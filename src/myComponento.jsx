import { element } from 'prop-types';
import React,{useState} from 'react';
//importing the source objects
function MyComponento(){

        const[food,setFood]=useState(["apple","Orange","Mangoe"]);
          
        function addHandleFood(){ //function to clear add  new food item 
            const newfood = document.getElementById('foodInput').value ;
            document.getElementById('foodInput').value="" ;
//using the spread operator to access intial values
            setFood(f => [...food, newfood])
        }
       //setting up a remover function 
        function handleRemoveFood(index){
            setFood(food.filter((_, i) => i !==index));
        }
        //adding list to the components
    return(<div>
        <h2>List Of Food :</h2>
        <ul>
            {food.map((food, index) => 
               <li key={index}  onClick={() =>handleRemoveFood(index)}>
                {food}
                </li>)}
        </ul>
        <input type='text' id='foodInput' placeholder="Enter your foods name"/>
        <button onClick={addHandleFood}>Add Food</button>
    </div>);

}
export default MyComponento