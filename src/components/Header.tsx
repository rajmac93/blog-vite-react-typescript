import classes from "../styles/Header.module.css";
import logo from "../assets/icons/logo.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <img className={classes.logo} src={logo} alt={logo}></img>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
