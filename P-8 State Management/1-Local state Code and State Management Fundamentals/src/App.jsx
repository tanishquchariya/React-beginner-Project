// 1. Local state

import { useState } from "react";

// Task - 1
const App = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h1>Likes: {count}</h1>

      <button onClick={increase}>Like</button>
      <button onClick={decrease}
      disabled={count === 0}
      >Unlike</button>
    </div>
  );
};
export default App;

// Task - 2 - Local state with an input

// const App = () => {
//   const [name, setName] = useState("")
//   return (
//     <div>
//       <input type="text" onChange={(e)=>{
//         setName(e.target.value)
//       }} />
//       <h1> {name.trim() ? name : "Please enter your name"}</h1>
//     </div>
//   )
// }

// export default App

// Task - 3 : Understand multiple state variables
// const App = () => {
//   const [name, setName] = useState("")
//   const [age, setAge] = useState("")
//   return (
//     <div>
//       <input type="text"
//       value={name}
//       onChange={(e)=>{
//         setName(e.target.value)
//       }} />
//       <input type="text"
//       value={age}
//       onChange={(e)=>{
//         setAge(e.target.value)
//       }} />
//       <h1>Name: {name.trim() ? name : "Please enter your name"}</h1>
//       <h1>Age: {age.trim() ? age : "Age not Provided"}</h1>
//     </div>
//   )
// }

// export default App

// Task - 4 :

// const App = () => {
//   // Store the text entered in the input
//   const [task, setTask] = useState("");

//   // Store all tasks in an array
//   const [tasks, setTasks] = useState([]);

//   // Add a new task
//   function AddTask() {
//     // Prevent empty tasks
//     if (task.trim() === "") {
//       return;
//     }

//     // Add the new task to the existing array
//     setTasks((previousTasks) => [
//       ...previousTasks,
//       task.trim(),
//     ]);

//     // Clear the input
//     setTask("");
//   }

//   return (
//     <div>
//       <h1>My Task Manager</h1>

//       <input
//         type="text"
//         placeholder="Enter a task"
//         value={task}
//         onChange={(e) => {
//           setTask(e.target.value);
//         }}
//       />

//       <button onClick={AddTask}>Add Task</button>

//       <ul>
//         {tasks.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

