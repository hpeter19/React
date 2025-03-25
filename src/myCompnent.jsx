import  React,{ useState ,useEffect } from "react"

function Mycompnent(){
     
      const[width,setWidth]=useState(window.innerWidth);
      const[height,setHeight]=useState(window.innerHeight);





    return(<>
           
           <p>Windows Width:{width}px</p>
           <p>Windows Height:{height}px</p>
           </>);
}
export default Mycompnent