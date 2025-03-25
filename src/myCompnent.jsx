import  React,{ useState ,useEffect } from "react"

function Mycompnent(){
     
      const[width,setWidth]=useState(window.innerWidth);
      const[height,setHeight]=useState(window.innerHeight);

     
      useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTNER ADDED");

          return()=>{
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTNER REMOVED")
          }

      },[]);
      useEffect(()=> {
        document.title=`size:${width} x ${height}`;
      }, [width,height]);

      function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }



    return(<>
           
           <p>Windows Width:{width}px</p>
           <p>Windows Height:{height}px</p>
           </>);
}
export default Mycompnent