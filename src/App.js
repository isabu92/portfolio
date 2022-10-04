import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './components/TimeLine';
import Login from './components/Login';
import Logout from './components/Logout';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { CreatePost } from './components/CreatePost';

function App() {
  const [isAuth,setIsAuth]=useState(false);

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path='/createpost' element={<CreatePost />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
