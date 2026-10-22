// App.jsx: contains the user interface and handles user interactions.
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask as addTaskAction,
  deleteTask,
  completeTask,
  editTask,
  toggleSelection,
} from "./tasks/tasksSlice";

import "./App.css";

function App() {
  // Temporary input value lives in React state
  const [title, setTitle] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  // Read tasks from the Redux store
  const tasks = useSelector((state) => state.tasks.items);

  // Get the function that sends actions to Redux and containing the title to Redux
  const dispatch = useDispatch();

  function handleAddTask() {
    dispatch(addTaskAction(title));
    setTitle("");
  }
  // function handleDeleteTask() {
  //   dispatch(deleteTask(title));
  //   setTitle("");
  // }

  // receives the task object.
  function handleEditClick(task) {
    setEditingId(task.id);
    setEditTitle(task.title);
  }
  function handleSaveEdit(taskId) {
    dispatch(
      editTask({
        id: taskId,
        title: editTitle,
      }),
    );

    setEditingId(null);
    setEditTitle("");
  }

  return (
    <div className="app">
      <h1>Redux Task Manager</h1>

      <input
        className="task-input"
        type="text"
        placeholder="Enter a task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button onClick={handleAddTask}>Add Task</button>
      {/* <button onClick={handleDeleteTask}>delete Task</button> */}

      <h2>My Tasks ({tasks.length})</h2>

      {tasks.length === 0 ? (
        <p className="empty-message">No tasks yet. Add your first task!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              {editingId === task.id ? (
                <>
                  <input
                    className="edit-input"
                    type="text"
                    value={editTitle}
                    onChange={(event) => setEditTitle(event.target.value)}
                  />

                  <button onClick={() => handleSaveEdit(task.id)}>Save</button>

                  <button
                    onClick={() => {
                      setEditingId(null);
                      setEditTitle("");
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span
                    className={`task-title ${task.completed ? "completed" : "pending"}`}
                  >
                    {task.title}
                  </span>

                  <span>{task.completed ? "Completed" : "Pending"}</span>
                </>
              )}
              <button onClick={() => dispatch(completeTask(task.id))}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => handleEditClick(task)}>Edit</button>
              <button onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
