import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';


const Logout = ({setIsAuth}) => {
  const navigate=useNavigate("/home");
  const logout=()=>{
    //ログアウト
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout;