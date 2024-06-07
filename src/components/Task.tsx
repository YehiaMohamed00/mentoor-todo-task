
interface Props{
  key: number;
  isFinished: boolean;
  text: string;
}

export default function Task({key, isFinished, text}:Props):JSX.Element{
  return (<div >
    <input type="checkbox" key={key} defaultChecked={isFinished}/>
    <p style={{display: "inline", fontSize:"1.5em"}}>{text}</p>
  </div>);
}