import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Todo from "../Todo";

const TaskItemCard = (props) => {
  const [remainingTime, setRemainingTime] = useState(
    parseInt((props.task.expiresAt - Date.now()) / 1000),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = Date.now();

      const secondsLeft = parseInt((props.task.expiresAt - currentTime) / 1000);

      setRemainingTime(secondsLeft);

      const taskIds = [props.task].reduce((acc, task, index) => {
        if (task.expiresAt <= currentTime) {
          acc.push(index);
        }

        return acc;
      }, []);

      if (taskIds.length > 0) {
        clearInterval(timer);

        props.deleteTask(props.task.id);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [props.task.expiresAt, props.deleteTask]);

  return (
    <div className={props.task.completed ? "task-card completed" : "task-card"}>
      <Input
        type="checkbox"
        checked={props.task.selected}
        onChange={() => props.selectTask(props.task.id)}
      />

      { props.task.id === props.editingTaskId ? 
        <div className="edit-box">
          <h2>Edit Task</h2>
 
          <Input
            type="text"
            placeholder="Edit Title"
            value={props.title}
            onChange={(event_object) => {
              props.setTitle(event_object.target.value);
            }}
          />
 
          <Button text="Save" onClick={props.saveEditTask} />
 
          <Button text="Cancel" onClick={props.cancelEdit} />
        </div>
       : <h2>{props.task.todo}</h2>
      }


      {/* <p>{props.task.description}</p> */}

      {/* <p>Added at: {new Date(props.task.createdAt).toLocaleTimeString()}</p>

      <p>Time left: {remainingTime} seconds</p> */}

      {/* {((!props.editingTaskId && !props.task.completed && props.task.id === props.editingTaskId) || (props.editingTaskId && props.task.id !== props.editingTaskId)) && ( */}
      {(!props.task.completed && props.task.id !== props.editingTaskId) && (
        <Button
          text="Complete"
          onClick={() => props.completeTask(props.task.id)}
        />
      )}

      {( props.editingTaskId === null || props.task.id !== props.editingTaskId) && <Button text="Delete" onClick={() => props.deleteTask(props.task.id)} />}

      {/* {((!props.editingTaskId && !props.task.completed) ||  props.task.id !== props.editingTaskId) && ( */}
      {(!props.task.completed && props.task.id !== props.editingTaskId) && (
        <Button text="Edit" onClick={() => props.editTask(props.task)} />
      )}
    </div>
  );
};

export default TaskItemCard;
