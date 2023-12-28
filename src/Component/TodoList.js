import React, { useState } from 'react'
import './ToDoItem'

const TodoList = () => {
    const [toDos,setToDos] = useState([])// this line store all list of todo items --settodo use for put everything inside toDos
    const [editedToDo, setEditedToDo] = useState(null) //hold item that edit / after edit we put inside toDo

    const sortTodosByDeadline =()=>{
      const sortedToDos = [...toDos].sort(
        (a,b)=> new Date(b.createdAt) - new Date(a.createdAt)
      );
      setToDos(sortedToDos)

    }
    
  return (
    <div>
<h1>Manangement Lists</h1>
<button onClick={sortTodosByDeadline}>Sort by deadline date</button>
{/* we maps toDos and then put all inside toDoItem */}
<ul>
{toDos.map((toDo)=>(
<ToDoItem 
key = {toDo.id}
Individual2do = {toDo}
/>
))}
</ul>
    </div>
  )
}

export default TodoList