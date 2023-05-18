import classes from "../styles/Main.module.css";
import Posts from "./data/posts";

const Main = () => {
  return (
    <main className={classes.main}>
      Głógwna zawartość, jeszcze nie wiem jak to będzie wyglądać
      <Posts />
    </main>
  );
};

export default Main;
