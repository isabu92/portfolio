import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({isAuth}) => {
  return (
    <div>
      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
          タイムライン
        </Link>
        {!isAuth ?  
        (<Link to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
          ログイン
        </Link> 
        ):  
        ( 
      <>
        <Link to="/createpost">
          <FontAwesomeIcon icon={faPlus} />
          記事を投稿する
        </Link>
        <Link to="/logout">
          <FontAwesomeIcon icon={faRightToBracket} />
          ログアウト
        </Link>
      </>
      )
      }
      </nav>
    </div>
  )
}

export default Navbar