import { useState } from "react";
import ComponentB from "./componentB";


function ComponentA(){
    const[user,setUser]=useState("Njosh");
    return(
           <div className="box">
            <h1>Component A</h1>
            <h2>{`hello ${user}`}</h2>
            <ComponentB  user={user}/>

           </div>);

}
export default ComponentA