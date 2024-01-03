import React from 'react'
import { useState } from 'react'

const ToDoForm = ({editeToDo,onAdd, onUpdate}) => {
const [newToDo,setNewToDo] = useState('');
const [deadLine,setDeadLine] = useState('');

const handleAddOrUpdate =()=>{
  if (newToDo.trim() === '') return ;
const updatedToDo = {
  id : editeToDo ? editeToDo.id : Date.now(),
  // id is key : value editToDo if editToDo is true -we put editeToDo.ID -else we put Date.now()
  text: newToDo, 
  completed : editeToDo ? editeToDo.completed : false,
  //complete is key if editToDo exist -if true we put editTODO.completed - if flase we put false
  deadLine : deadLine || null,
  //deadeline is key either we put deadline or null novalue
  createdAt : editeToDo ? editeToDo.createdAt : new Date(),
//cartedAt is key that time that task crate at
}
if (editeToDo){
onUpdate(updatedToDo)
}else{
  onAdd(updatedToDo)
}
setNewToDo('')
setDeadLine('')
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
       editeToDo ? 'Update todo' : 'Add todo'
        }
      </button>
    </div>
  )
}

export default ToDoForm