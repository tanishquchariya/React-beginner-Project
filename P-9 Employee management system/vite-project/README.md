required libraries
npm install react-router-dom
npm install @reduxjs/toolkit react-redux
npm install react-hook-form
npm install lucide-




Folder	Responsibility
pages/	What the user sees
components/	Reusable UI components
features/	Application functionality and business logic
app/	Global application configuration, including Redux store


Concept	Purpose
configureStore()	Create the Redux store
createSlice()	Define state and reducers
initialState	Define initial employee data
reducers	Define state update operations
actions	Describe which operation should happen
dispatch()	Send an action to Redux
useSelector()	Read data from Redux
useDispatch()	Get the dispatch function
Provider	Make the store available to React components