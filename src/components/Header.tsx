import Icon from "./UI/Icon";

import classes from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <Icon name="logo-37" color="black" size="20" />
      </nav>
    </header>
  );
};

export default Header;
