import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  function addTask() {
    if (task.trim() === "") {
      alert("Please enter a task")
      return
    }

    const newTodo = {
      text: task,
      completed: false
    }

    setTodos([...todos, newTodo])

    setTask("")
  }

  function deleteTask(index) {
    const newTodo = todos.filter((todo, i) => i !== index)

    setTodos(newTodo)
  }

  function editTask(index) {
    if (todos[index].completed) {
      return
    }
    const newTask = prompt("Enter new Task")

    if (newTask === null || newTask.trim() === "") {
      return
    }

    const newTodos = [...todos]

    newTodos[index] = {
      ...newTodos[index],
      text: newTask
    }

    setTodos(newTodos)
  }

  function completeTask(index) {
    const newTodos = [...todos]

    newTodos[index] = {
      ...newTodos[index],
      completed: !newTodos[index].completed
    }

    setTodos(newTodos)
  }

  return (
    <>
      <div className='todomain'>

        <h1>Todo List</h1>

        <div className='inputarea'>

          <input
            type="text"
            placeholder='Add task...'
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />

          <button onClick={addTask}>
            Add items
          </button>

        </div>

        <div>
          <ul>

            {todos.map((todo, index) => (

              <li key={index}>

                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => completeTask(index)}
                />

                <span className='tasktext'>
                  {todo.text}
                </span>

                <span className={todo.completed ? 'complete' : 'pending'}>
                  {todo.completed ? "Complete" : "Pending"}
                </span>

                <button
                  onClick={() => editTask(index)}
                  disabled={todo.completed}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>

              </li>

            ))}

          </ul>
        </div>

        <div className='bottombuttons'>
          <button
          >Delete Selected items</button>
          <button>Marks as complete selected items</button>
        </div>

      </div>
    </>
  )
}

export default App
{/* <ul>
  <li>
    <input type="checkbox" />
    <span>task1</span>
    <button>Edit</button>
    <button>Delete</button>
  </li>
  <li>
    <input type="checkbox" />
    <span>task2</span>
    <button>Edit</button>
    <button>Delete</button>
  </li>
  <li>
    <input type="checkbox" />
    <span>task3</span>
    <button>Edit</button>
    <button>Delete</button>
  </li>
</ul> */}