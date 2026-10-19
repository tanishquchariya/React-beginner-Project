selected tasks
      ↓
 ┌────┴─────┐
 ↓          ↓
Delete    Complete
 ↓          ↓
filter()   map()


old code : 

// import React, { useState } from 'react'
// import './App.css'
// // import InputComponent from './component/InputComponent';
// const App = () => {

//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
//   const [todos, setTodos] = useState([])

//   const d = new Date();

//   // Add a new task
//   function addTask() {

//     const newTodo = {
//       title: title,
//       description: description,
//       completed: false,
//       selected: false
//     }

//     setTodos([...todos, newTodo])

//     setTitle("")
//     setDescription("")
//   }

//   // Mark one task as completed
//   function completedTask(taskIndex) {

//     // console.log(taskIndex)

//     const updatedTodos = todos.map((currentTodo, currentIndex) => {

//       if (currentIndex === taskIndex) {

//         return {
//           ...currentTodo,
//           completed: true
//         }

//       } else {

//         return currentTodo
//       }
//     })

//     setTodos(updatedTodos)
//   }
//   // Select task for delete or mark as completed
//   function selectTask(taskIndex) {
//     const updatedTodos = todos.map((currentTodo, currentIndex) => {
//       if (taskIndex === currentIndex) {
//         return {
//           ...currentTodo,
//           selected: !currentTodo.selected
//         }
//       } else {
//         return currentTodo
//       }
//     })
//     setTodos(updatedTodos)
//   }

//   // Delete selected tasks
//   function deleteSelectedTasks() {

//     const remainingTodos = todos.filter((currentTodo) => {

//       return currentTodo.selected === false
//     })
//     setTodos(remainingTodos)

//   }

//   // Select multiple tasks using the Delete checkbox click Mark as Completed
//   function markSelectedAsCompleted() {

//     const updatedTodos = todos.map((currentTodo) => {

//       if (currentTodo.selected === true) {

//         return {
//           ...currentTodo,
//           completed: true,
//           selected: false
//         }

//       } else {

//         return currentTodo

//       }
//     })

//     setTodos(updatedTodos)
//   }
//   // task to edit
//   function editTask(taskIndex) {
//     const newTitle = prompt("Enter New Title")
//     const newDescription = prompt("Enter new description")
//     const updatedTodos = todos.map((currentTodo, currentIndex) => {
//       if (currentIndex === taskIndex) {
//         return {
//           ...currentTodo,
//           title: newTitle,
//           description: newDescription
//         }
//       } else {

//         return currentTodo
//       }
//     })
//     setTodos(updatedTodos)

//   }
//   return (
//     <>

//       {/* <InputComponent
//     placeholder = "TJrthr"/>


//     <InputComponent/> */}

//       <div className="app" id="todoApp">
//         <h1 id="todoHeading">
//           Todo List
//         </h1>
//         {/* Title Input */}
//         <input
//           id="titleInput"
//           type="text"
//           placeholder="Write Title of Task"
//           value={title}
//           onChange={(event) => setTitle(event.target.value)}
//         />
//         {/* Description Input */}
//         <input
//           id="descriptionInput"
//           type="text"
//           placeholder="Write Description of Task"
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//         />

//         {/* Add Task */}
//         <button
//           id="addTaskButton"
//           onClick={addTask}
//         >
//           Add Task
//         </button>


//         {/* Task Actions */}
//         <div id="taskActions">

//           <button
//             id="deleteButton"
//             onClick={deleteSelectedTasks}
//           >
//             Delete
//           </button>

//           <button
//             id="completeButton"
//             onClick={markSelectedAsCompleted}
//           >
//             Mark Selected Task as Completed
//           </button>

//         </div>

//         {/* Todo List */}
//         <div id="todoListContainer">

//           <ul id="todoList">

//             {todos.map((currentTodo, currentIndex) => (

//               <li key={currentIndex}>

//                 <h2>Select Todo</h2>

//                 {/* Select Checkbox */}
//                 <input
//                   className="todoCheckbox"
//                   type="checkbox"
//                   checked={currentTodo.selected}
//                   onChange={() => selectTask(currentIndex)}
//                 />

//                 {/* Task Title */}
//                 <h2 className={currentTodo.completed ? "completed" : "pending"}>
//                   {currentTodo.title}
//                 </h2>

//                 {/* Task Description */}
//                 <p className={currentTodo.completed ? "completed" : "pending"}>
//                   {currentTodo.description}
//                 </p>
//                 <h2>
//                   {d.getHours()} : {d.getMinutes()}
//                 </h2>
//                 {/* Edit Button */}
//                 <button className="editButton" onClick={() => editTask(currentIndex)}>
//                   Edit
//                 </button>

//               </li>

//             ))}

//           </ul>

//         </div>

//       </div>
//     </>
//   )
// }
// export default App



1. input.jsx
2. btn.jsx
3. todo.jsx
4. taskitemCard.jsx