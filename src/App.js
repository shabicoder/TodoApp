import React from "react";
import TodoApp from "./component/todoApp/TodoApp";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import Photo from "./component/photo/Photo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Perfect from "./component/Perfect/Perfect";
import Final from "./component/Final/Final"

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/"  element={<TodoApp />} />
          <Route path="/About" element={<About />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/Perfect" element={<Perfect />} />
          <Route path="/Final" element={<Final />} />
     

          
          
        </Routes>
      </Router>
    </div>
  );
}
export default App;
