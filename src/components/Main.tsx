import classes from "../styles/Main.module.css";
import Posts from "./data/Posts";

const Main = () => {
  return (
    <main className={classes.main}>
      <Posts />
    </main>
  );
};

export default Main;
