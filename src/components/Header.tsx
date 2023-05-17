import classes from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Maciej Rajtar blog</h1>
      <p>tutaj będę pisać o pewnych rzeczach z mojego życia (prawdopodobnie)</p>
    </header>
  );
};

export default Header;
