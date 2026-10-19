import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/students" element={<Students />} />

          <Route path="/students/:studentId" element={<StudentDetails />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
