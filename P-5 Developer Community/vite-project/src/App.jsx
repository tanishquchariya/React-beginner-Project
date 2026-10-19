import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/";
const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <nav>
        <Routes>
          <Route path="/" element={`Welcome to DevConnect`}>
            Home
          </Route>
          <Route path="/developers element = {`Developers`}">Developers</Route>
          <Route path="/posts element = {`Posts`}">Posts</Route>
        </Routes>
      </nav>
    </div>
  );
};

export default App;
