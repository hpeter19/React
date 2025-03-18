import React,{useState} from 'react';

function MyComponent(){
const [name,setName]= useState();
const [age,setAge] = useState(0); //setting age component to increment age
//age is set to initially 0 after which its incremenented
const [isEmployed, setIsEmployed]= useState(false);

const updateName = () => {

    setName("mark");
}    
const incrementAge = () => {
    setAge(age + 1);

}   

const toggleEmployedStatus =() =>{
    setIsEmployed(!isEmployed);

}
return(<div>
    <p>Name: {name}</p>
    <button onClick={updateName}>set Name</button>


    <p>Age: {age}</p>
    <button onClick= {incrementAge} > Increment Age </button>
//toggle key
    <p>Is Employed: {isEmployed ? "yes":"no"}</p>
    <button onClick= {toggleEmployedStatus} > Toggle status</button>

</div>);

}

export default MyComponent