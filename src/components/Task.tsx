
interface Props{
  key:number;
  isFinished: boolean;
  text: string;
}

export default function Task({ key, isFinished, text}:Props):JSX.Element{

  // TODO: Fix checkbox not registering in localStorage issue.

  return (<div >
    <input type="checkbox" defaultChecked={isFinished} onChange={(event)=>{
      const tasks:string | null = localStorage.getItem("tasks");
      const tasksObj = JSON.parse(tasks!);
      tasksObj[key].isFinished = event.target.checked;
      localStorage.clear();
      localStorage.setItem("tasks", JSON.stringify(tasksObj));
    }}/>
    <p style={{display: "inline", fontSize:"1.5em"}}>{text}</p>
  </div>);
}