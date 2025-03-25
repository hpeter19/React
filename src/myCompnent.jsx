import  React,{ useState ,useEffect } from "react"

function Mycompnent(){

     const [count ,setCount]= useState(0);

     useEffect(() => {
        document.title=`count: ${count}`;
     },[count]);
     

     function addCount(){
        setCount(c => c +1 )
     }
     function subtractCount(){
        setCount(c => c -1 )
     }
     //changing the title of the document

return(<>
    
    <p>Count:{count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button>
      </>);
}
export default Mycompnent