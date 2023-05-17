import Article from "./Article/Article";

import classes from "../styles/Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      Głógwna zawartość, jeszcze nie wiem jak to będzie wyglądać
      <Article />
      <Article />
      <Article />
      <Article />
    </main>
  );
};

export default Main;
