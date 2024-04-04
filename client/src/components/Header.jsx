import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
// import { storageService } from "../services/storageService";


export const Header = () => {
  const {user, logout} = useAuth()

    const getNavLinkClassName = (props) => {
        if (props.isActive) return "active"
        return
      }
    return (
      <header>
        <h2 className="logo">Smart House</h2>
        <nav>
        <ul>
          <li>
            <NavLink className={getNavLinkClassName} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getNavLinkClassName} to="/add-room">
              Add Room
            </NavLink>
          </li>
          <li>
            <NavLink className={getNavLinkClassName} to="/room">
              My Room
            </NavLink>
          </li>
          <li>
            <button className="btn-logout" onClick={() => logout()}>
             Logout
            </button>
          </li>
        </ul>
      </nav>
     
      </header>
    );
  };