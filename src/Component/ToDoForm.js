import React from 'react'
import { useState } from 'react'

const ToDoForm = ({editeToDo,onAdd, onUpdate}) => {
const [newToDo,setNewToDo] = useState('');
const [deadLine,setDeadLine] = useState('');

const handleAddOrUpdate =()=>{
  if (newToDo.trim() === '') return ;
const updatedToDo = {
  id : editeToDo ? editeToDo.id : Date.now(),
  text: newToDo, 
  completed : editeToDo ? editeToDo.completed : false,
  deadLine : deadLine || null,
  createdAt : editeToDo ? editeToDo.createdAt : new Date(),
  // continue here
}

}

  return (
    <div>
      <input
      type = "text"
      value = {newToDo}
      onChange={(e)=>setNewToDo(e.target.value)}
      placeholder='New Task'
      />
         <input
      type = "text"
      value = {deadLine}
      onChange={(e)=>setDeadLine(e.target.value)}
      placeholder='Set Deadline'
      />
      <button onClick={handleAddOrUpdate}>
        {/* this button have 2 function update to do and add to do  by use ternary operator*/}
        {
          edited2Do ? 'Update todo' : 'Add todo'
        }
      </button>
    </div>
  )
}

export default ToDoForm