import React,{useState} from 'react';

function MyComponent(){
const [name,setName]= useState();
const [age,setAge] = useState(0); //setting age component to increment age
//age is set to initially 0 after which its incremenented

const updateName = () => {

    setName("mark");
}    
const incrementAge = () => {
    setAge(age + 1);

}   

return(<div>
    <p>Name: {name}</p>
    <button onClick={updateName}>set Name</button>


    <p>Age: {age}</p>
    <button onClick= {incrementAge} > Increment Age </button>

</div>);

}

export default MyComponent