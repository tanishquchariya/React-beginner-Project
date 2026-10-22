// App.jsx: contains the user interface and handles user interactions.

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask as addTaskAction,deleteTask, completeTask } from "./tasks/tasksSlice";

function App() {
  // Temporary input value lives in React state
  const [title, setTitle] = useState("");

  // Read tasks from the Redux store
  const tasks = useSelector((state) => state.tasks.items);

  // Get the function that sends actions to Redux
  const dispatch = useDispatch();

  function handleAddTask() {
    dispatch(addTaskAction(title));
    setTitle("");
  }
  function handleDeleteTask() {
    dispatch(deleteTask(title));
    setTitle("");
  }

  return (
    <div className="app">
      <h1>Redux Task Manager</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button onClick={handleAddTask}>
        Add Task
      </button>
      <button onClick={handleDeleteTask}>
        delete Task
      </button>

      <h2>My Tasks ({tasks.length})</h2>

      {tasks.length === 0 ? (
        <p>No tasks yet. Add your first task!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
      <span
        style={{
          textDecoration: task.completed
            ? "line-through"
            : "none",
          color: task.completed ? "green" : "black",
        }}
      >
        {task.title}
      </span>
              {task.title} — {" "}
              {task.completed ? "Completed" : "Pending"}

              <button
              onClick={()=>dispatch(completeTask(task.id))}
              >{task.completed ? "Undo" : "Complete"}</button>

              <button
              onClick={()=> dispatch(deleteTask(task.id))}
              >Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
