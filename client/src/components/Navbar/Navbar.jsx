import React, {useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import decode from "jwt-decode";
import { setCurrentUser } from '../../actions/currentUser'
const Navbar = () => {
  const dispatch =useDispatch()
    var User =useSelector((state)=>state.currentUserReducer)
const navigate=useNavigate()

const handleLogout =()=>{
  dispatch({type:'LOGOUT'})
  navigate('/')
  dispatch(setCurrentUser(null))
}

useEffect(() => {
  const token = User?.token;
  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      handleLogout();
    }
  }
  dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
}, [User?.token, dispatch]);

  return (
    <nav className='main-nav'>
        <div className ='navbar'>
<Link to ='/' className='nav-icon nav-btn'>
    <img src={logo} alt='logo'  width="150"/>
</Link>
<Link to='/' className='nav-item nav-btn'>About</Link>
<Link to='/' className='nav-item nav-btn'>Products</Link>
<Link to='/' className='nav-item nav-btn'>For Teams</Link>

<form>
    <input type='text' placeholder='Search...' />
    <img src={search} alt='search' width="20"  className='search-icon'/>

</form>
{User===null ? 
<Link to ='/Auth' className='nav-item nav-links'>Login</Link> :
<>
<Avatar  backgroundColor='#009dff' py='7px' px='14px' borderRadius='50%' color='white'>
  <Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}
  </Link>
</Avatar>
<button className='nav-item nav-links' onClick={handleLogout}>Logout</button>
</>
}
        </div>
        
        </nav>
  )
}

export default Navbar

