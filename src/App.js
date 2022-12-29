import React,{useState} from "react";
function App(){
const[count,setCount]=useState(0)

function addHandler(){
      setCount(count+1)
}
function minusHandler(){
      setCount(count-1)
}
  return (
    <div>
      <h1>counting = {count}</h1>
      <div>
        <button onClick={addHandler}>counter+</button>
      </div>
      <div>
        <button onClick={minusHandler}>counter -</button>
      </div>
    </div>
  )
}
export default App