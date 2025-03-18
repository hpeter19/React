import React,{useState} from 'react';

function MyComponent(){
#response button with name appearing after clicking
const [name,setName]= useState();


const updateName = () => {

    setName("mark");
    
}

return(<div>
<p>name: {name}</p>
<button onClick={updateName}>set Name</button>

</div>);

}

export default MyComponent