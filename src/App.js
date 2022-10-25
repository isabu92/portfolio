import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { TimeLine } from './components/TimeLine';
import Login from './components/Login';
import Logout from './components/Logout';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { CreatePost } from './components/CreatePost';

function App() {
  const [isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<TimeLine isAuth={isAuth} />}/>
        {isAuth ? 
        (
        <Route path="/logout" element={<Logout />} />
        )
          :
          (
            <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
          )
        }
        <Route path='/createpost' element={<CreatePost />}/>
      </Routes>
    </Router>
  );
}

export default App;
