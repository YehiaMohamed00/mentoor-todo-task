import { useEffect, useState } from 'react'
import './App.css'
import Task from './components/Task'

function App() {

  interface Todo {
    taskId: number;
    isFinished:boolean
    text: string;
  }

  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("tasks");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [todo, setTodo] = useState("");

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify([...todos]));
  },[todos]);

  return (
    <>
      <h1> To Do List 📃</h1>
      <form onSubmit={(event)=> {
          event.preventDefault();
          setTodos([...todos, {taskId: todos.length + 1, isFinished: false, text: todo}])
          setTodo("");
        }}>
        <input type="text" style={{height:"30px", width:"60%"}} value={todo} onChange={(event)=>setTodo(event.target.value)}/> <button>add todo</button>
      </form>
        <button onClick={()=> {localStorage.clear(); setTodos([])}}> clear all </button>
        {todos.map((task, index)=> <Task key={task.taskId} taskId={index} isFinished={task.isFinished} text={task.text}/>)}
    </>
  )
}

export default App
