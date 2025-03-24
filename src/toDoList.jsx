    import React,{useState} from "react"

    function ToDoList(){

            const[tasks,setTask] =useState([]);
            const [newTask,setNewTask]=useState("");
    
        function HandleInputChange(event){
            setNewTask(event.target.value)
    
    }
        function AddTask(){

    }
        function DeleteTask(){

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

                     <button>add</button>
                 </div>


            </div>);

    }
    export default ToDoList