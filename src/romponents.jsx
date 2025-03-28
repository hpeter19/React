    import React,{useState,useEffect,useRef} from "react";

    function Remponent(){
    
        const inputRef =useRef(null);

        useEffect(() => {
            console.log("Component Rendered")
            console.log(inputRef);
        });
        
        function handleClick(){
            ref.current++
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