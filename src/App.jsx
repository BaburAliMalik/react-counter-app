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
    if (num > 0){
      setNum( num -= 1)
    }else{
      alert("already zero")
    }
      
    }
  

  // set counter

  function setCounter() {
    setNum(num = 0);
  }
  return (
    <>
      
        <h1 class = "text-center text-dark mt-[2rem]">Hello World , This is a React Counter</h1>
      <div className="text-center mt-[2rem]">
      <p>{num}</p>
      </div>
     <div className="flex justify-center items-center mt-[2rem]">
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-3"
       onClick={addCounter}>Increase</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-3"
       onClick={ setCounter}>Set</button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
       onClick={removeCounter}>Decrease</button>
     </div>
    </>
  )
}

export default App

