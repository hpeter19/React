import React,{useState} from 'react';


function MyComponent(){
    //function of the user
const[name,setName] = useState("Guests");
//function of the quantity 
const[quantity,setQuantity] =useState(1);
//Comment function
const[comment,setComment]= useState("");
 function handleNameChange(event){
    setName(event.target.value);
 }
 function handleQuantityChange(event){
    setQuantity(event.target.value);
 }
 function handleCommentChange(event){
    setComment(event.target.value);
 }

return(<div>
    <input value={name} onChange={handleNameChange}/>
    <p>Name:{name}</p>
    <input value={quantity} onChange={handleQuantityChange} type='number' />
    <p>Quantity: {quantity}</p>
    //placeholder holds the initial comment in the textarea
    <input  value={comment} onChange={handleCommentChange} 
    placeholder='provide delivery instructions'/>
    <p>Comment: {comment}</p>
      </div>);
}

export default MyComponent