import logo from './logo.svg';
import './App.css';
import SignInForm from './componenets/SignInForm';
// import SideBar from './componenets/SideBar';
import EllipseInBox from './componenets/EllipseInBox';
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
