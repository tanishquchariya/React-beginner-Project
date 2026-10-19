import React, { useState, useEffect } from "react";
import Input from "./component/Input";
import Button from "./component/Button";
import TaskItemCard from "./component/TaskitemCard";
import axios from "axios";

const Todo = () => {
  // Store new task title
  const [title, setTitle] = useState("");

  // Store all tasks
  const [todos, setTodos] = useState([]);

  // Store the ID of the task being edited
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    getUsertodo();
  }, []);

  // GET Method (Fetch All Tasks)
  const getUsertodo = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/todos");
      console.log("GET response:", response.data);
      console.log(response.data.todos);
      setTodos(response.data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Add a new task
  // POST Method (Create a Task)
  async function addTask() {
    // Stop if Input is empty
    if (!title.trim()) {
      return;
    }

    try {
      const response = await axios.post("https://dummyjson.com/todos/add", {
        todo: title,
        completed: false,
        userId: 5,
      });

      console.log("Post response: ", response.data);

      // Give newly created tasks a unique ID so adding multiple tasks doesn't duplicate id: 255
      const newTask = {
        ...response.data,
        id: Date.now(),
        isLocal: true, // Marks that this task was created locally
      };

      // Add new task to the todos array
      setTodos([newTask, ...todos]);

      // Clear input fields
      setTitle("");
    } catch (error) {
      console.error("Error Adding Task:", error);
    }
  }

  // Select or unselect a task
  function selectTask(taskId) {
    const updatedTodos = todos.map((currentTodo) => {
      if (currentTodo.id === taskId) {
        return {
          ...currentTodo,
          selected: !currentTodo.selected,
        };
      }

      return currentTodo;
    });

    setTodos(updatedTodos);
  }

  // Delete one task
async function deleteTask(taskId) {
  const taskToDelete = todos.find((currentTask) => currentTask.id === taskId);

  try {
    if (taskToDelete && !taskToDelete.isLocal) {
      const response = await axios.delete(
        `https://dummyjson.com/todos/${taskId}`
      );
      console.log("DELETE response:", response.data);
    }

    const updatedTodos = todos.filter((currentTask) => {
      return currentTask.id !== taskId;
    });

    setTodos(updatedTodos);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}

  // Complete or uncomplete one task
 async function completeTask(taskId) {
    const taskToUpdate = todos.find((currentTask)=>currentTask.id === taskId);
    if(!taskToUpdate){
      return;
    }
    try {
      // Only call the DummyJSON if it is an original server task (id <= 254)
    if(!taskToUpdate.isLocal){
      const response = await axios.put(`https://dummyjson.com/todos/${taskId}`,{
        completed: !taskToUpdate.completed,
      });
      console.log("PUT complete response:", response.data);
    }
        const updatedTodos = todos.map((currentTask) => {
      if (currentTask.id === taskId) {
        return {
          ...currentTask,
          completed: !currentTask.completed,
        };
      }

      return currentTask;
    });
    setTodos(updatedTodos);

    } catch (error) {
      console.error("Error Completing TaskL:",error);
      
    }
  }

  // Delete all selected tasks
  function deleteSelectedTasks() {
    const updatedTodos = todos.filter((currentTask) => {
      return !currentTask.selected;
    });

    setTodos(updatedTodos);
  }

  // Complete all selected tasks
  function markSelectedComplete() {
    const updatedTodos = todos.map((currentTask) => {
      if (currentTask.selected) {
        return {
          ...currentTask,
          completed: true,
          selected: false,
        };
      }

      return currentTask;
    });

    setTodos(updatedTodos);
  }

  // Start editing a task
  function editTask(task) {
    // const taskToEdit = todos.find((currentTask) => {
    //   return currentTask.id === taskId;
    // });

    setTitle(task.todo);
    setEditingTaskId(task.id);
  }

  // Save edited task
async function saveEditTask() {
  if (!title.trim()) return;

  const taskToEdit = todos.find((task) => task.id === editingTaskId);
  if (!taskToEdit) return;

  try {
    if (!taskToEdit.isLocal) {
      const response = await axios.put(
        `https://dummyjson.com/todos/${editingTaskId}`,
        {
          todo: title,
        }
      );
      console.log("PUT edit response:", response.data);
    }

    const updatedTodos = todos.map((task) => {
      if (task.id === editingTaskId) {
        return {
          ...task,
          todo: title,
        };
      }
      return task;
    });

    setTodos(updatedTodos);
    setEditingTaskId(null);
    setTitle("");
  } catch (error) {
    console.error("Error saving edited task:", error);
  }
}

  // Cancel editing
  function cancelEdit() {
    setEditingTaskId(null);
    setTitle("");
  }

  return (
    <div>
      <h1>Todo List</h1>

      {/* Input for new task title */}
      <Input
        type="text"
        placeholder="Write Title of Task"
        value={title}
        onChange={(event_object) => {
          setTitle(event_object.target.value);
        }}
      />
      {/* Add new task */}
      <Button text="Add Task" onClick={addTask} />

      {/* Delete selected tasks */}
      <Button text="Delete Selected" onClick={deleteSelectedTasks} />

      {/* Complete selected tasks */}
      <Button text="Mark as Complete" onClick={markSelectedComplete} />

      {/* Show edit form only when a task is being edited */}

      {/* Render every task */}
      {todos.map((currentTask, index) => (
        <TaskItemCard
          key={currentTask.id}
          task={currentTask}
          title={title}
          setTitle={setTitle}
          saveEditTask={saveEditTask}
          cancelEdit={cancelEdit}
          editingTaskId={editingTaskId}
          selectTask={selectTask}
          deleteTask={deleteTask}
          completeTask={completeTask}
          editTask={editTask}
        />

        // <ul key={user.id} className="user-list">
        //   <li>Task : {user.todo} </li>
        //   <li>
        //     {" "}
        //     Completed :{" "}
        //     {user.completed ? "Task completed" : "Task Not completed"}
        //   </li>
        //   <li>User ID : {user.userId}</li>
        // </ul>

        // <button>hello</button>
      ))}
      {/* {apicall.map((user) => (
        <ul key={user.id} className="user-list">
          <li>Task : {user.todo} </li>
          <li>
            {" "}
            Completed :{" "}
            {user.completed ? "Task completed" : "Task Not completed"}
          </li>
          <li>User ID : {user.userId}</li>
        </ul>
      ))} */}
    </div>
  );
};

export default Todo;
