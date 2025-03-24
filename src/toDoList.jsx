    import React,{useState} from "react"

    function ToDoList(){

            const[tasks,setTask] =useState(["Eat Breakfast","Take a shower","Run some codes"]);
            const [newTask,setNewTask]=useState("");
    
        function HandleInputChange(event){
            setNewTask(event.target.value)
    
    }
        function AddTask(){
            //function not to add an empty task
            //adding tasks
            if(newTask.trim() !== ""){
                setTask(t =>[...t,newTask] );
            setNewTask("")

            }
    }
        function DeleteTask(index){

            const updatedTasks= tasks.filter((_,i) => i !== index);
            setTask(updatedTasks);

    }
        function MoveTaskUp(){

    }

        function MoveTaskDown(){

    }

    
        return(<div className="to-do-list">
            <h1>To do List</h1>
                 <div>
                   <input type="text"
                    placeholder="enter some task"
                     value={newTask} 
                     onChange={HandleInputChange} />

                     <button className="add-button" onClick={AddTask}>add</button>
                 </div>
                 <ol>
                    {tasks.map((task,index)=>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button 
                             className="delete-button"
                             onClick={() => DeleteTask(index)}>
                                Delete
                            </button>
                            <button 
                             className="move-button"
                             onClick={() => MoveTaskUp(index)}>
                                🔝
                            </button>
                            <button 
                             className="move-button"
                             onClick={() => MoveTaskDown(index)}>
                                ⏬
                            </button>
                        </li>
                    )}
                 </ol>

            </div>);

    }
    export default ToDoList