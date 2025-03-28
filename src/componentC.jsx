import ComponentD from "./componentD";
function ComponentC(props){

    return(
           <div className="box">
            <h1>Component C</h1>
            <ComponentD user={props.users}/>

           </div>);

}
export default ComponentC