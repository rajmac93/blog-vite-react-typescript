import classes from "../../styles/Post.module.css";
import Card from "../UI/Card";

interface Asd {
  post: {
    title: string;
    body: string;
    imgUrl: string;
    author: string;
  };
  index: string;
}

const Post = ({ post: { title, body, imgUrl, author }, index }: Asd) => {
  return (
    <Card className={classes["post--container"]}>
      <article>
        <div className={classes["title--article"]}>{title}</div>
        <img className={classes.image} src={imgUrl} alt="post" />
        <p>{body}</p>
        <div className={classes.info}>
          <h4>Written by: {author}</h4>
        </div>
      </article>
    </Card>
  );
};

export default Post;
