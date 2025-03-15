function Buttonn(){
    

    const handleClick= () => console.log("OUCH!");
    const handleClick2= (name) => console.log('$(name)stop clicking me');
    
    
    return(<button onClick={() => handleClick2("njosh")}>Click me</button>);
   
    

}
export default Buttonn