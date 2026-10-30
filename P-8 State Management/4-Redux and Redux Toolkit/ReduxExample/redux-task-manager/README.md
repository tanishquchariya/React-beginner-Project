The most important idea is this:
- Store: Holds the current data.
- Action: Describes what happened, such as adding a task.
- Reducer: Determines how the state should change.
- Dispatch: Sends an action to Redux.
- Selector: Reads data from the store.
- React component: Displays that data to the user.

The core flow to memorize:

User action → dispatch(action) → reducer updates state → useSelector reads state → React re-renders.

Think of dispatch as a messenger: it sends an action to Redux so the appropriate reducer can process it.