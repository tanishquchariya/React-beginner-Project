
import React from 'react'
import Todo from './Todo'
import "./App.css";
const App = () => {
  return (
    <div>
      <Todo />
    </div>
  )
}
export default App


// import React, { useState } from 'react'
// import './App.css'
// import TodoForm from './component/TodoForm';
// import TodoActions from './component/TodoActions';
// import TodoList from './component/TodoList';
// const App = () => {

//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
//   const [todos, setTodos] = useState([])

//   const d = new Date();

//   // Add a new task
//   function addTask() {

//     const newTodo = {
//       id: Date.now(),
//       title: title,
//       description: description,
//       completed: false,
//       selected: false,
//       createdAt: Date.now()
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
//   function selectTask(taskId) {
//     const updatedTodos = todos.map((currentTodo, ) => {
//       if (taskId === currentTodo.id) {
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
//  function editTask(todoId, newTitle, newDescription) {

//     const updatedTodos = todos.map((currentTodo) => {

//         if (currentTodo.id === todoId) {

//             return {
//                 ...currentTodo,
//                 title: newTitle,
//                 description: newDescription
//             }

//         } else {

//             return currentTodo
//         }
//     })

//     setTodos(updatedTodos)
// }
//   return (
//     <>

//       <div className="app" id="todoApp">
//         <h1 id="todoHeading">
//           Todo List
//         </h1>
//         <TodoForm
//           title={title}
//           setTitle={setTitle}
//           description={description}
//           setDescription={setDescription}
//           addTask={addTask}
//         />

//         <TodoActions
//           deleteSelectedTasks={deleteSelectedTasks}
//           markSelectedAsCompleted={markSelectedAsCompleted}
//         />

//         {/* Todo List */}
//         <TodoList
//           todos={todos}
//           selectTask={selectTask}
//           editTask={editTask}
//         />
//       </div>
//     </>
//   )
// }
// export default App;
