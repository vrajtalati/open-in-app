
import './App.css';

import Login from './pages/Login';
import Main from './pages/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element= {<Login />}/>
    <Route path="dashboard" element= {<Main />}/>
    </Routes>
 
 
  </BrowserRouter>
  );
}

export default App;
