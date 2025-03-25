import  React,{ useState ,useEffect } from "react"

function Mycompnent(){

     const [count ,setCount]= useState(0);

     useEffect(function, [dependencies]);
     
//adding functionality to count to increase previous state by 1
     function addCount(){
        setCount(c => c +1 )
     }

return(<>
    
    <p>Count:{count}</p>
    <button onClick={addCount}>Add</button>
      </>);
}
export default Mycompnent