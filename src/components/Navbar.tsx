import classes from "../styles/Navbar.module.css";
import CardSocial from "./UI/Cards/CardSocial";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes["profile--container"]}>
        <img
          className={classes["profile--image"]}
          src="https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0"
          alt="mojefoto"
        ></img>
      </div>
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
