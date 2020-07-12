import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Message from './Message.js'

function Room(){
  let [isLit, setLit] = useState(false);
  let [count, setMyCount]=useState(0)
  const brightness = isLit ? "lit": "dark";
  return (
    <div className={`room ${brightness}`}>
      the room is {isLit ? "lit" : "dark"}
      <br/>
      <button onClick={() => setLit(!isLit)}>
        Flip Light
      </button>
      <hr/>
      <Message counter={count}/>
      <button onClick={() => setMyCount(++count)}>
        + 1
      </button>
      
    </div>

  )
}
ReactDOM.render(<Room />, document.querySelector('#root'));
export default Room;
