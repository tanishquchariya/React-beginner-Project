1. What is Context API?
React Context API lets you share data with multiple components without passing props manually through every intermediate component.

For example, in your shopping cart project, you passed cart from App.jsx to Cart.jsx through props. With Context API, components can access shared cart data directly from a context.

2. The three main concepts
Concept	Purpose
createContext():-  Creates a context for shared data.

Provider:- Makes a context value available to descendant components.

useContext():- Reads the context value from a component.