import React, { useState } from "react";
import Input from "./component/Input";
import Button from "./component/Button";
import TaskItemCard from "./component/TaskitemCard";

const Todo = () => {

    // Store new task title
    const [title, setTitle] = useState("");

    // Store new task description
    const [description, setDescription] = useState("");

    // Store all tasks
    const [todos, setTodos] = useState([]);

    // Store the ID of the task being edited
    const [editingTaskId, setEditingTaskId] = useState(null);

    // Store edited title
    const [editTitle, setEditTitle] = useState("");

    // Store edited description
    const [editDescription, setEditDescription] = useState("");


    // Add a new task
    function addTask() {

        // Get the exact time when Add Task is clicked
        const currentTime = Date.now();

        const newTodo = {
            id: currentTime,
            title: title,
            description: description,
            completed: false,
            selected: false,

            // Store task creation time
            createdAt: currentTime,

            // Task expires after 20 seconds
            expiresAt: currentTime + 20000
        };

        // Add new task to the todos array
        setTodos([...todos, newTodo]);

        // Clear input fields
        setTitle("");
        setDescription("");
    }


    // Select or unselect a task
    function selectTask(taskId) {

        const updatedTodos = todos.map((currentTodo) => {

            if (currentTodo.id === taskId) {

                return {
                    ...currentTodo,
                    selected: !currentTodo.selected
                };
            }

            return currentTodo;
        });

        setTodos(updatedTodos);
    }


    // Delete one task
    function deleteTask(taskId) {

        const updatedTodos = todos.filter((currentTask) => {
            return currentTask.id !== taskId;
        });

        setTodos(updatedTodos);
    }


    // Complete or uncomplete one task
    function completeTask(taskId) {

        const updatedTodos = todos.map((currentTask) => {

            if (currentTask.id === taskId) {

                return {
                    ...currentTask,
                    completed: !currentTask.completed
                };
            }

            return currentTask;
        });

        setTodos(updatedTodos);
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
                    selected: false
                };
            }

            return currentTask;
        });

        setTodos(updatedTodos);
    }


    // Start editing a task
    function editTask(taskId) {

        const taskToEdit = todos.find((currentTask) => {
            return currentTask.id === taskId;
        });

        setEditTitle(taskToEdit.title);
        setEditDescription(taskToEdit.description);
        setEditingTaskId(taskId);
    }


    // Save edited task
    function saveEditTask() {

        const updatedTodos = todos.map((currentTask) => {

            if (currentTask.id === editingTaskId) {

                return {
                    ...currentTask,
                    title: editTitle,
                    description: editDescription
                };
            }

            return currentTask;
        });

        setTodos(updatedTodos);

        setEditingTaskId(null);
        setEditTitle("");
        setEditDescription("");
    }


    // Cancel editing
    function cancelEdit() {

        setEditingTaskId(null);
        setEditTitle("");
        setEditDescription("");
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

            {/* Input for new task description */}
            <Input
                type="text"
                placeholder="Write Description of Task"
                value={description}
                onChange={(event_object) => {
                    setDescription(event_object.target.value);
                }}
            />

            {/* Add new task */}
            <Button
                text="Add Task"
                onClick={addTask}
            />

            {/* Delete selected tasks */}
            <Button
                text="Delete Selected"
                onClick={deleteSelectedTasks}
            />

            {/* Complete selected tasks */}
            <Button
                text="Mark as Complete"
                onClick={markSelectedComplete}
            />


            {/* Show edit form only when a task is being edited */}
            {editingTaskId !== null && (

                <div className="edit-box">

                    <h2>Edit Task</h2>

                    {/* Edit task title */}
                    <Input
                        type="text"
                        placeholder="Edit Title"
                        value={editTitle}
                        onChange={(event_object) => {
                            setEditTitle(event_object.target.value);
                        }}
                    />

                    {/* Edit task description */}
                    <Input
                        type="text"
                        placeholder="Edit Description"
                        value={editDescription}
                        onChange={(event_object) => {
                            setEditDescription(event_object.target.value);
                        }}
                    />

                    {/* Save edited task */}
                    <Button
                        text="Save"
                        onClick={saveEditTask}
                    />

                    {/* Cancel editing */}
                    <Button
                        text="Cancel"
                        onClick={cancelEdit}
                    />

                </div>
            )}
            
            {/* Render every task */}
            {todos.map((currentTask) => (

                <TaskItemCard
                    key={currentTask.id}
                    task={currentTask}
                    selectTask={selectTask}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    editTask={editTask}
                />
            ))}

        </div>
    );
};

export default Todo;