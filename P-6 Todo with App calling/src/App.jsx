// import React from 'react'
import Todo from './Todo'
import "./App.css";
// import axios from 'axios';
const App = () => {
  // const getUsertodo = async () => {
  //   const reponse = await axios.get("https://dummyjson.com/todos")

  //   console.log(reponse.data.todos);
  // }
  return (
    <div>
      <Todo />
      {/* <button onClick={getUsertodo}>Fetch Api</button> */}
    </div>
  )
}
export default App
