import React,{useState} from 'react';


function MyComponent(){
    //function of the user
const[name,setName] = useState("Guests");
//function of the quantity 
const[quantity,setQuantity] =useState(1);
//Comment function
const[comment,setComment]= useState("");
//Payment function
const [payment,setPayment] =useState("");
 function handleNameChange(event){
    setName(event.target.value);
 }
 function handleQuantityChange(event){
    setQuantity(event.target.value);
 }
 function handleCommentChange(event){
    setComment(event.target.value);
 }
 function handlePaymentChange(event){
    setPayment(event.target.value);
 }

return(<div>
    <input value={name} onChange={handleNameChange}/>
    <p>Name:{name}</p>
    <input value={quantity} onChange={handleQuantityChange} type='number' />
    <p>Quantity: {quantity}</p>
    <textarea  value={comment} onChange={handleCommentChange} 
    placeholder='provide delivery instructions'/>
    <p>Comment: {comment}</p>
    <select value={payment} onChange={handlePaymentChange} >
        <option value=" " >Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Mpesa">Mpesa</option>
    </select>
    <p>Payment:{payment}</p>
    <option></option>
      </div>);
}

export default MyComponent