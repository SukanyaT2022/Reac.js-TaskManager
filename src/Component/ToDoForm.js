import React from 'react'

const ToDoForm = () => {
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
      <button>
        {}
      </button>
    </div>
  )
}

export default ToDoForm