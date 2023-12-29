import React from 'react'
import { useState } from 'react'

const ToDoForm = () => {
const [newToDo,setNewToDo] = useState('')
const [deadLine,setDeadLine] = useState('')


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