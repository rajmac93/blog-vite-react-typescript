import classes from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
        <li>Twitter</li>
        <li>Github</li>
      </ul>
    </nav>
  );
};

export default Navbar;
