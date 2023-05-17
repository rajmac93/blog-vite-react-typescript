import classes from "../../styles/Articles.module.css";
import Card from "../UI/Card";

const Article = () => {
  return (
    <Card className={classes.article}>
      <div className={classes["title--article"]}>Tytuł jakiegoś artykułu</div>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          voluptas mollitia qui iure cum veniam, dicta quas deserunt, debitis
          sit ab suscipit voluptate a blanditiis. Corrupti porro repellat neque.
          Neque.
        </p>
      </article>
    </Card>
  );
};

export default Article;
