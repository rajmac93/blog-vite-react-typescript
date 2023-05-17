import classes from "../styles/Navbar.module.css";
import CardSocial from "./UI/CardSocial";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <CardSocial className={classes["social--title"]}>Facebook</CardSocial>
        <CardSocial className={classes["social--title"]}>Instagram</CardSocial>
        <CardSocial className={classes["social--title"]}>LinkedIn</CardSocial>
        <CardSocial className={classes["social--title"]}>Twitter</CardSocial>
        <CardSocial className={classes["social--title"]}>Github</CardSocial>
      </ul>
    </nav>
  );
};

export default Navbar;
