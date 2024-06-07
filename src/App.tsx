import { useState } from 'react'
import './App.css'
import Task from './components/Task'

function App() {
  const [todos, setTodos] = useState([
    {isFinished: false, text:"1st item"},
    {isFinished: true, text:"2nd item"},
  ]); 
  const [todo, setTodo] = useState("");
  return (
    <>
      <h1> To Do List 📃</h1>
      <form onSubmit={(event)=> {
          event.preventDefault();
          setTodos([...todos, {isFinished: false, text: todo}])
          setTodo("");
        }}>
        <input type="text" style={{height:"30px", width:"60%"}} value={todo} onChange={(event)=>setTodo(event.target.value)}/> <button>add todo</button>
      </form>
        {todos.map((task, index)=> <Task key={index} isFinished={task.isFinished} text={task.text}/>)}
    </>
  )
}

export default App
