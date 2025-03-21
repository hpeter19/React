import React,{useState} from 'react';
//importing the source objects
function MyComponento(){

        const[food,setFood]=useState(["apple","Orange","Mangoe"]);

        function addHandleFood(){

        }
        
        function addRemoveFood(){
            
        }
        //adding list to the components
    return(<div>
        <h2>List Of Food :</h2>
        <ul>
            {food.map((food, index) => <li key={index}>{food}</li>)}
        </ul>
    </div>);

}
export default MyComponento