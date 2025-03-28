    import React,{useState,useEffect,useRef} from "react";

    function Remponent(){
    
        const inputRef =useRef(null);

        useEffect(() => {
            console.log("Component Rendered")
        });
        
        function handleClick(){
             inputRef.current.focus();
             inputRef.current.style.backgroundColor="green";

        }
        return( <div >
                <button onClick={handleClick}>
                Click Me 1
                </button>
                <input ref={inputRef}/>

                <button onClick={handleClick}>
                Click Me 2
                </button>
                <input ref={inputRef}/>

                <button onClick={handleClick}>
                Click me 3
                </button>
                <input ref={inputRef}/>
                
        </div>
        );

    }
export default Remponent