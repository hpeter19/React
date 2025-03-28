    import React,{useState,useEffect,useRef} from "react";

    function Remponent(){
    
        const inputRef =useRef(null);

        useEffect(() => {
            console.log("Component Rendered")
        });
        
        function handleClick(){
             inputRef.current.focus();
        }


        return( <div >
                <button onClick={handleClick}>
                Click Me
                </button>
                <input ref={inputRef}/>
        </div>
        );

    }
    export default Remponent