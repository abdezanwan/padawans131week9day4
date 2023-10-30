import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Login from './Login';
import Navbar from './Navbar';
import ECommerce from './ECommerce'; // Import the e-commerce component

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage todos={todos} addTodo={addTodo} removeTodo={removeTodo} newTodo={newTodo} setNewTodo={setNewTodo} />} />
          <Route path="/ecommerce" element={<ECommerce />} /> {/* Add the e-commerce route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
