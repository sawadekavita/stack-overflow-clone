import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import globe from  '../../assets/globe.png'

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeclassname='active'>
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/Questions' className='side-nav-links' activeclassname='active'>
                        <img src={globe} alt="globe" style={{width:"20px" ,height:"20px"}} />
                        <p style={{paddingLeft: "10px"}}> Questions </p>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar
// import React from 'react'

// const LeftSidebar = () => {
//   return (
//     <div>LeftSidebar</div>
//   )
// }

// export default LeftSidebar