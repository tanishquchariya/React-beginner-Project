App
 │
 └── Todo
      │
      ├── Input        ← Title
      ├── Input        ← Description
      ├── Button       ← Add Task
      ├── Button       ← Delete Selected
      ├── Button       ← Mark as Complete
      │
      ├── Edit Box
      │    ├── Input
      │    ├── Input
      │    ├── Button ← Save
      │    └── Button ← Cancel
      │
      ├── TaskItemCard ← Task 1
      │    ├── Input ← checkbox
      │    ├── Button ← Complete
      │    ├── Button ← Delete
      │    └── Button ← Edit
      │
      ├── TaskItemCard ← Task 2
      │
      └── TaskItemCard ← Task 3

Responsibility of each component
Component	Responsibility
Todo.jsx	Main brain — state + functions + passing props
Input.jsx	Reusable input field
Button.jsx	Reusable button
TaskitemCard.jsx	Display/edit one Todo

Name	Meaning
todos	All tasks
currentTask	One task while mapping
task	Prop name sent to child
props.task	One task received by child
selectTask	Function sent from parent to child


                         ┌─────────────────────┐
                         │       App.jsx       │
                         │                     │
                         │      <Todo />       │
                         └──────────┬──────────┘
                                    │
                                    ↓
                         ┌─────────────────────┐
                         │      Todo.jsx       │
                         │                     │
                         │   MAIN CONTROLLER   │
                         │                     │
                         │  State + Functions  │
                         └──────────┬──────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ↓                     ↓                     ↓
       ┌─────────────┐       ┌─────────────┐      ┌───────────────┐
       │  Input.jsx  │       │ Button.jsx  │      │ TaskItemCard  │
       │             │       │             │      │     .jsx      │
       │ Reusable    │       │ Reusable    │      │               │
       │ Input       │       │ Button      │      │ Task UI       │
       └─────────────┘       └─────────────┘      └───────┬───────┘
                                                          │
                                                   ┌──────┴──────┐
                                                   ↓             ↓
                                             Input.jsx      Button.jsx