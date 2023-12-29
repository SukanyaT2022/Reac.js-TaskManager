import React, { useState } from 'react'
import './ToDoItem'
import ToDoForm from './ToDoForm'

const TodoList = () => {
    const [toDos,setToDos] = useState([])// this line store all list of todo items --settodo use for put everything inside toDos
    const [editedToDo, setEditedToDo] = useState(null) //hold item that edit / after edit we put inside toDo

    const sortTodosByDeadline =()=>{
      const sortedToDos = [...toDos].sort(
        (a,b)=> new Date(b.createdAt) - new Date(a.createdAt)
      );
      setToDos(sortedToDos)

    }

    const editeToDoFunc =(toDoValue)=>{
      setEditedToDo(toDoValue)
    }

    const addToDoFunc =(newToDoValue)=>{
//this func take new to do and add to toDos state
setToDos((prevToDos)=>[...prevToDos,newToDoValue])
    }
    const updateToDoFunc =(updatedToDoValue)=>{
      // 2 thing either store updatedToDovalue or singleToDo
      const updatedToDos = toDos.map((singleToDo)=>singleToDo.id === updatedToDoValue.id ? updatedToDoValue : singleToDo)
      setToDos(updatedToDos)
      setEditedToDo(null)
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
onEdit = {()=>editedToDo(toDos)}

// cotinue next week delete and toggle function 


onDelete = {()=>DeleteToDo(toDo.id)}
onToggleCompleted = {()=>toggleCompleted(toDo.id)}
/>
))}
</ul>
<ToDoForm 
editeToDo = {editeToDoFunc}
onAdd = {addToDoFunc}
onUpdate = {updateToDoFunc}
/>
    </div>
  )
}

export default TodoList