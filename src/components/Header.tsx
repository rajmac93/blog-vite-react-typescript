import classes from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>Maciej Rajtar blog</h1>
      <p>tutaj będę pisać o pewnych rzeczach z mojego życia (prawdopodobnie)</p>
    </div>
  );
};

export default Header;
