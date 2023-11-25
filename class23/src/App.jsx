/*
 OPTIMIZATION IN REACT
  - memo
  - useCallback
  - useMemo
*/

import { useState, useCallback, useMemo } from "react"
import Todo from "./Todo"
 

function App() {
  console.log("Parent render");
  const [counter, setCounter] = useState(0);
  const [todos, setAllTodos] = useState([]);
  const [nums, setAllNums] = useState([10, 20, 30, 40, 50])

  const addTodo = useCallback(() => {
    setAllTodos([...todos, "New Todo"])
  }, [todos])

  const getLargestNum = useMemo(() => {
    console.log("HEAVY OPERATION LOGIC")
    return Math.max(...nums)
  },[nums]);


  return (
    <div >
      <Todo todos={todos} addTodo={addTodo} />
      <h1>Counter:{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>increment Counter</button>
      <h1>The Greatest Number is {getLargestNum}</h1>
      <button onClick={()=> setAllNums([100,200,300,400,500])}>Click to Change Array</button>
    </div>
  )
}

export default App
