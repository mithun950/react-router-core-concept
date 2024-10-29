
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='mt-7'>
      
      <nav className='text-center flex justify-center gap-7 text-3xl font-bold bg-yellow-200 p-4'>
        <NavLink className='' to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </div>
  )
}

Header.propTypes = {

}

export default Header

