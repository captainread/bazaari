import { Link } from "react-router-dom";
import { UserContext } from "./contexts";
import add from "../assets/more.png";
import basket from "../assets/shopping-basket.png";
import home from "../assets/home.png";
import { useContext } from "react";
import userIcon from "../assets/user.png";

const Nav = () => {
  const { user } = useContext(UserContext);

  const userMsg = (user) => {
    if (user) {
      const msg = `Hello ${user}`;
      return msg;
    } else {
      return "Hello Guest";
    }
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img className="nav-icon" src={home} alt="Home" />
      </Link>
      <Link to="/api/users">
        <img className="nav-icon" alt="Sign In" src={userIcon} />
      </Link>
      <Link to="/">
        <img className="nav-icon" src={add} alt="Add item" />
      </Link>
      <Link to="/api/users/:username/basket">
        <img className="nav-icon" src={basket} alt="Your Basket" />
      </Link>
      <span className="nav-user-text">{userMsg(user)}</span>
    </nav>
  );
};

export default Nav;
