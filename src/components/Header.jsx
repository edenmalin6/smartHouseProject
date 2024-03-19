import { NavLink } from "react-router-dom";


export const Header = () => {
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
        </ul>
      </nav>
      </header>
    );
  };