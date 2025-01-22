import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          {/* <li><NavLink to='/mailboxes'>Mailboxes</NavLink></li> */}
          {/* <li>
          <NavLink to="/new-mailbox">New Mailbox</NavLink>
          </li>
          <li><NavLink to='/new-letter'>New Letter</NavLink></li> */}
        </ul>
        </nav>
    )
}

export default NavBar;