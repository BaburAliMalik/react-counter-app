import { useState } from "react";

function App() {

  // let num = 0;
  let [num, setNum] = useState(0)

  // add counter

  function addCounter() {
   
    setNum(num += 1);
  }

  
  // subtract counter

  function removeCounter() {
    setNum(num -= 1);
  }

  // set counter

  function setCounter() {
    setNum(num = 0);
  }
  return (
    <>
      <h1>Hello World , This is a React Counter</h1>
      <p>{num}</p>
      <button onClick={addCounter}>+</button>
      <button onClick={ setCounter}>Set</button>
      <button onClick={removeCounter}>-</button>
    </>
  )
}

export default App

