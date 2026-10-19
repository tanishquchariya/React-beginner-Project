import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";

const TaskItemCard = (props) => {

    const [remainingTime, setRemainingTime] = useState(
 
            parseInt((props.task.expiresAt - Date.now()) / 1000)
        
    );

    useEffect(() => {

        const timer = setInterval(() => {

            const currentTime = Date.now();

            const secondsLeft = parseInt((props.task.expiresAt - currentTime) / 1000);

            setRemainingTime(secondsLeft);

            const taskIds = [props.task].reduce(
                (acc, task, index) => {

                    if (task.expiresAt <= currentTime) {
                        acc.push(index);
                    }

                    return acc;

                },
                []
            );

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
        <div
            className={
                props.task.completed
                    ? "task-card completed"
                    : "task-card"
            }
        >

            <Input
                type="checkbox"
                checked={props.task.selected}
                onChange={() => props.selectTask(props.task.id)}
            />

            <h2>{props.task.title}</h2>

            <p>{props.task.description}</p>

            <p>
                Added at:{" "}
                {new Date(props.task.createdAt).toLocaleTimeString()}
            </p>

            <p>
                Time left: {remainingTime} seconds
            </p>

            <Button
                text="Complete"
                onClick={() => props.completeTask(props.task.id)}
            />

            <Button
                text="Delete"
                onClick={() => props.deleteTask(props.task.id)}
            />

            <Button
                text="Edit"
                onClick={() => props.editTask(props.task.id)}
            />

        </div>
    );
};

export default TaskItemCard;


// import React, { useEffect, useState } from "react";
// import Input from "./Input";
// import Button from "./Button";

// const TaskItemCard = (props) => {
    
//     // Store the remaining seconds
//     const [remainingTime, setRemainingTime] = useState(
//         parseInt((props.task.expiresAt - Date.now()) / 1000)
//     );
//     useEffect(() => {

//         const timer = setInterval(() => {

//             const currentTime = Date.now();

//             const taskIds = [props.task].reduce(
//                 (acc, task, index) => {

//                     if (task.expiresAt <= currentTime) {
//                         acc.push(index);
//                     }

//                     return acc;

//                 },
//                 []
//             );

//             if (taskIds.length > 0) {
//                 props.deleteTask(props.task.id);
//             }

//         }, 1000);

//         // Stop the timer when the component is removed
//         return () => {
//             clearInterval(timer);
//         };

//     }, [props.task.expiresAt]);
//     // // Store the remaining seconds
//     // const [remainingTime, setRemainingTime] = useState(
//     //     parseInt((props.task.expiresAt - Date.now()) / 1000)
//     // );

//     // Start the countdown
//     // useEffect(() => {

//     //     // Run this function every 1 second
//     //     const timer = setInterval(() => {

//     //         // Calculate remaining time
//     //         const secondsLeft = Math.ceil(
//     //             (props.task.expiresAt - Date.now()) / 1000
//     //         );

//     //         // Update the countdown on screen
//     //         setRemainingTime(secondsLeft);


//     //         // Delete task when time reaches zero
//     //         if (secondsLeft <= 0) {

//     //             clearInterval(timer);

//     //             props.deleteTask(props.task.id);
//     //         }

//     //     }, 1000);


//     //     // Stop the timer when the component is removed
//     //     return () => {
//     //         clearInterval(timer);
//     //     };

//     // }, [props.task.expiresAt]);


//     return (
//         <div
//             className={
//                 props.task.completed
//                     ? "task-card completed"
//                     : "task-card"
//             }
//         >

//             {/* Select this task */}
//             <Input
//                 type="checkbox"
//                 checked={props.task.selected}
//                 onChange={() => props.selectTask(props.task.id)}
//             />


//             {/* Show task title */}
//             <h2>{props.task.title}</h2>


//             {/* Show task description */}
//             <p>{props.task.description}</p>


//             {/* Show task creation time */}
//             <p>
//                 Added at:{" "}
//                 {new Date(props.task.createdAt).toLocaleTimeString()}
//             </p>


//             {/* Show countdown */}
//             <p>
//                 Time left: {remainingTime} seconds
//             </p>


//             {/* Complete this task */}
//             <Button
//                 text="Complete"
//                 onClick={() => props.completeTask(props.task.id)}
//             />


//             {/* Delete this task */}
//             <Button
//                 text="Delete"
//                 onClick={() => props.deleteTask(props.task.id)}
//             />


//             {/* Edit this task */}
//             <Button
//                 text="Edit"
//                 onClick={() => props.editTask(props.task.id)}
//             />

//         </div>
//     );
// };

// export default TaskItemCard;